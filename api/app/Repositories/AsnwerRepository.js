'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

const Answer = use('App/Models/Answer');

class AnswerRepository {
  async getById(id) {
    const data = await Answer
      .query()
      .where('id', id)
      .fetch();

    return data.toJSON();
  }

  async updateById(id, body) {
    try {
      const data = await Answer
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

module.exports = new AnswerRepository();
