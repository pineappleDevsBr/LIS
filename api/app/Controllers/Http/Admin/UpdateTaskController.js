'use strict'
const TaskRepository = use('App/Repositories/TaskRepository');
const QuestionRepository = use('App/Repositories/QuestionRepository');
const AnswerRepository = use('App/Repositories/AnswerRepository');

class UpdateTaskController {
  task({ request, response }) {
    const { task } = request.all();
    response.send(await TaskRepository.updateById(task.id, task));
  }

  question({ request, response }) {
    const body = request.all();
    response.json(await QuestionRepository.updateById(body.id, body));
  }

  questions({ request, response }) {
    const body = request.all();

    body.answers.map(async aws => {
      await AnswerRepository.updateById(aws.id, aws)
    })

    response.json({ success: true });
  }
}

module.exports = UpdateTaskController
