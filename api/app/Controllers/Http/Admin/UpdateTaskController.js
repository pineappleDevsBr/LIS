'use strict'
const TaskRepository = use('App/Repositories/TaskRepository');
const QuestionRepository = use('App/Repositories/QuestionRepository');
const AnswerRepository = use('App/Repositories/AnswerRepository');

class UpdateTaskController {
  async task({ request, response }) {
    const body = request.all();
    response.send(await TaskRepository.updateById(body.id, body));
  }

  async question({ request, response }) {
    const body = request.all();
    console.log(body);
    response.json(await QuestionRepository.updateById(body.id, body));
  }

  async answers({ request, response }) {
    const { answers } = request.all();
    const hasRightProp = answers.find(item => item.hasOwnProperty('right'))
    answers.map(async aws => {
      const payload = { ...aws }

      if (hasRightProp) {
        payload.right = (payload.right == 'true')
      }

      await AnswerRepository.updateById(payload.id, payload)
    })

    response.json({ success: true });
  }
}

module.exports = UpdateTaskController
