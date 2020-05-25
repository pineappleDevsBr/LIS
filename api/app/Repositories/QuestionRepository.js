'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

const Question = use('App/Models/Question');

class QuestionRepository {
  async getById(id) {
    const data = await Question
      .query()
      .where('id', id)
      .with(['answers'])
      .fetch();

    return data.toJSON();
  }
}

module.exports = new QuestionRepository();
