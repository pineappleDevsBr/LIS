'use strict'
const Task = use('App/Models/Task');
const Question = use('App/Models/Question');
const Theme = use('App/Models/Theme');
const TaskType = use('App/Models/TaskType');

class TaskController {
  async index({ view }) {
    const data = await Task
      .query()
      .with(['questions'])
      .fetch();

    return view.render('pages.task.index', { tasks: data.toJSON() });
  }

  async new({ view }) {
    const themes = await Theme.all();
    const types = await TaskType.all();

    return view.render('pages.task.store', { themes: themes.toJSON(), types: types.toJSON() });
  }

  async get({ view, params }) {
    const data = await Task
      .find(params.id)

    const questions = await Question
      .query()
      .where('task_id', params.id)
      .with(['answers'])
      .fetch()

    return view.render('pages.task.task', { task: data, questions: questions.toJSON() });
  }

  async store({ request, response, view }) {
    const { task_type_id } = request.only(['task_type_id']);
    const type = await TaskType.find(task_type_id);
    this[type.name]({ request, response, view });
  }

  async quiz({ request, response, view }) {
    const task = request.only(['name', 'title', 'xp', 'money', 'theme_id', 'task_type_id']);
    const { questions } = request.only(['questions']);
    let taskModel;

    if (questions.length < 10) {
      return response.status(422).send('Exactly 10 questions must be registered')
    }

    try {
      taskModel = await Task.create(task);
    } catch (err) {
      return response.send(err);
    }

    questions.forEach(async item => {
      console.log(item);

      try {
        const questionModel = await Question.create({ question: item.question, text: item.text, task_id: taskModel.id });
        await questionModel.answers().createMany(item.answers.map(aws => ({ ...aws, right: (aws.right == 'true')})));
      } catch (error) {
        return response.send(error);
      }
    })

    session.flash({ result: 'created' });
    return view.render('pages.task.index');
  }
}

module.exports = TaskController
