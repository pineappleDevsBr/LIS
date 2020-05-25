'use strict'

const TaskRepository = use('App/Repositories/TaskRepository');
const UserRepository = use('App/Repositories/UserRepository');
const ItemUserRepository = use('App/Repositories/ItemUserRepository');
const Bonus = use('App/Helpers/Bonus');
const TaskType = use('App/Models/TaskType');
const BaseTask = use('App/Base/Task');

class FinishTaskController {
  async index({ request, response, auth }) {
    const requestData = request.all();
    const data = await TaskRepository.getById(requestData.task_id);
    const task_type = await TaskType.find(requestData.task_type_id);
    const result = this[task_type.name](requestData, data);
    let values;

    if (result.approved) {
      values = await this.updateUser({
        id: auth.user.id,
        data: data.task
      });
    }

    response.json({
      ...result,
      task: data.task,
      values
    });
  }

  quiz(req, data) {
    const { questions } = data;
    const results = [];

    req.answers.forEach(item => {
      const { answers, id } = questions.find(quest => quest.id === item.question_id);
      const correctQuestion = answers.find(aws => ((aws.right) && (aws.right === 1)));

      results.push({
        id,
        status: item.answer === correctQuestion.id
      })
    })

    const hits = results
      .reduce((acc, { status }) => acc + (status === true ? 1 : 0), 0)

    return {
      results,
      hits,
      approved: (((hits*100) / results.length) / BaseTask.quiz.tasks) >= BaseTask.quiz.approvation
    };
  }

  listening(req, data) {
    const { questions } = data;
    const results = [];

    req.answers.forEach(item => {
      const { answers, id } = questions.find(quest => quest.id === item.question_id);

      results.push({
        id,
        status: item.answer === answers[0].answer
      })
    })

    const hits = results
      .reduce((acc, { status }) => acc + (status === true ? 1 : 0), 0)

    return {
      results,
      hits,
      approved: (((hits*100) / results.length) / BaseTask.listening.tasks) >= BaseTask.listening.approvation
    };
  }

  complete(req, data) {
    const { questions } = data;
    const results = [];

    req.answers.forEach(item => {
      const { answers, id } = questions.find(quest => quest.id === item.question_id);

      results.push({
        id,
        status: item.answer === answers[0].answer
      })
    })

    const hits = results
      .reduce((acc, { status }) => acc + (status === true ? 1 : 0), 0)

    return {
      results,
      hits,
      approved: (((hits*100) / results.length) / BaseTask.complete.tasks) >= BaseTask.complete.approvation
    };
  }

  reading() {
    return {
      approved: true
    };
  }

  async updateUser({ id, data }) {
    const user = await UserRepository.getById(id);
    const items = await ItemUserRepository.getAvailableItems(id);
    const values = await Bonus({ payload: items, data });

    user.xp += values.xp;
    user.money += values.money;
    await user.save();
    return values;
  }

}

module.exports = FinishTaskController
