'use strict'

const Evaluation = use('App/Models/Models/Evaluation');

class EvaluationController {
  async store({ request, response, auth }) {
    const { value, task_id } = request.only(['value', 'task_id']);

    try {
      const data = await Evaluation.create({
        user_id: auth.user.id,
        task_id,
        value
      });

      response.json(data);
    } catch (err) {
      response.json(err);
    }
  }
}

module.exports = EvaluationController
