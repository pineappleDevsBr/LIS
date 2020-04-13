'use strict'

const TaskRepository = use('App/Repositories/TaskRepository');
const UserRepository = use('App/Repositories/UserRepository');
const TaskEnum = use('App/Enums/Task');

class FinishTaskController {
  async index({ request, response, auth }) {
    const requestData = request.all();
    const data = await TaskRepository.getById(requestData.task_id);
    const result = await this[TaskEnum[requestData.task_type_id]](requestData, data);


    if (result.approved) {
      await this.updateUser({ id: auth.user.id, data: data.task, response });
    }

    response.json(result);
  }

  quiz(req, data) {
    const { questions } = data;
    const results = [];

    req.answers.forEach(async item => {
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
      approved: hits >= 6 ? true : false
    };
  }

  async updateUser({ id, data }) {
    const user = await UserRepository.getById(id);
    user.xp = user.xp + data.xp;
    user.money = user.money + data.money;
    await user.save();
  }

}

module.exports = FinishTaskController
