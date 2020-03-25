'use strict'
const Helpers = use('Helpers')
const Task = use('App/Models/Task');
const Question = use('App/Models/Question');
const Theme = use('App/Models/Theme');
const TaskType = use('App/Models/TaskType');

class TaskController {
  async index({ view, params }) {
    const types = await TaskType.all();
    const type = types.toJSON().find(tp => tp.name === params.type);

    const data = await Task
      .query()
      .where('task_type_id', type.id)
      .with(['questions'])
      .fetch();

    return view.render('pages.task.index', { tasks: data.toJSON(), type });
  }

  async new({ view, params }) {
    const themes = await Theme.all();
    const types = await TaskType.all();

    return view.render(`pages.task.store.${params.type}`, {
      themes: themes.toJSON(),
      task_type: types.toJSON().find(tp => tp.name == params.type)
    });
  }

  async get({ view, params }) {
    const data = await Task
      .query()
      .where('id', params.id)
      .with(['theme'])
      .with('evaluations')
      .first()

    const questions = await Question
      .query()
      .where('task_id', params.id)
      .with(['answers'])
      .fetch()

    const dataTask = data.toJSON();

    return view.render('pages.task.task', {
      task: Object.assign(dataTask, {
        evaluations: dataTask.evaluations[0] ?
          dataTask.evaluations.reduce((acc, { value }) => acc + parseInt(value), 0) / dataTask.evaluations.length : 0
      }),
      questions: questions.toJSON()
    });
  }

  async store({ request, response, session }) {
    const { task_type_name } = request.only(['task_type_name']);
    return this[task_type_name]({ request, response, session, type: task_type_name });
  }

  async listening({ request, response, session, type }) {
    const task = request.only(['name', 'title', 'xp', 'money', 'theme_id', 'task_type_id']);
    const { questions } = request.only(['questions']);
    let taskModel;
    const files = request.file('audio', {
      types: ['audio'],
      size: '5mb'
    })

    try {
      await files.moveAll(Helpers.publicPath('uploads/audios'), file => ({
        name: `${Date.now()}-${file.clientName}`
      }))

      if (!files.movedAll()) {
        return files.errors()
      }
    } catch (error) {
      return response.status(500);
    }


    try {
      taskModel = await Task.create(task);
    } catch (err) {
      return response.send(err);
    }

    questions.forEach(async (item, idx) => {
      try {
        const questionModel = await Question.create({
          task_id: taskModel.id,
          file: files.movedList()[idx].fileName
        });
        await questionModel.answers().create({ answer: item.answer });
      } catch (error) {
        return response.send(error);
      }
    })

    session.flash({ result: 'created' });
    return response.route('admin.tasks', { type });
  }

  async quiz({ request, response, session, type }) {
    const task = request.only(['name', 'title', 'xp', 'money', 'theme_id', 'task_type_id']);
    const { questions } = request.only(['questions']);
    let taskModel;

    try {
      taskModel = await Task.create(task);
    } catch (err) {
      return response.send(err);
    }

    questions.forEach(async item => {
      try {
        const questionModel = await Question.create({ question: item.question, text: item.text, task_id: taskModel.id });
        await questionModel.answers().createMany(item.answers.map(aws => ({ ...aws, right: (aws.right == 'true')})));
      } catch (error) {
        return response.send(error);
      }
    })

    session.flash({ result: 'created' });
    return response.route('admin.tasks', { type });
  }
}

module.exports = TaskController
