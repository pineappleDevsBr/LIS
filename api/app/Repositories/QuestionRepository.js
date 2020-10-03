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

  async updateById(id, body) {
    try {
      const data = await Question
        .query()
        .where('id', id)
        .first()

      data.merge(body);
      await data.save();

      return data
    } catch (err) {
      return err;
    }
  }
}

module.exports = new QuestionRepository();
