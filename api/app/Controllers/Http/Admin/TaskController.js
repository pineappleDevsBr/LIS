'use strict'
const Database = use('Database');
const Task = use('App/Models/Task');
const Question = use('App/Models/Question');
const Theme = use('App/Models/Theme');
const Answer = use('App/Models/Answer');
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

  async store({ request, response }) {
    const task = request.only(['name', 'title', 'xp', 'money', 'theme_id', 'task_type_id']);
    const { questions } = request.only(['questions']);
    let taskModel;

    // if (questions.length < 10) {
    //   return response.status(422).send('Exactly 10 questions must be registered')
    // }

    // const trx = await Database.beginTransaction();

    // try {
    //   taskModel = await Task.create(task, trx);

    //   console.log(taskModel);


    //   questions.forEach(async item => {
    //     try {
    //       const questionModel = await Question.create({ question: item.question, text: item.text, task_id: taskModel.id }, trx);

    //       console.log(questionModel);

    //       await Answer.createMany(item.answers.map(aws => ({ ...aws, question_id: questionModel.id })), trx);
    //     } catch (er) {
    //       await trx.rollback();
    //       response.send(er);
    //     }
    //   });

    //   await trx.commit();
    // } catch (err) {
    //   await trx.rollback();
    //   response.send(err);
    // }



    // return { taskModel };

    return;
  }
}

module.exports = TaskController
