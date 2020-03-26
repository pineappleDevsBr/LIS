'use strict'
const TaskRepository = use('App/Repositories/TaskRepository')

class TaskController {
  async index({ response, request, auth }) {
    const { type } = request.only(['type']);

    try {
      const data = await TaskRepository.getByUserAndType({
        type,
        id: auth.user.id
      });
      response.json(data)
    } catch (error) {
      response.status(500).send(error);
    }
  }

  async get({ params }) {
    return await TaskRepository.getById(params.id);
  }
}

module.exports = TaskController
