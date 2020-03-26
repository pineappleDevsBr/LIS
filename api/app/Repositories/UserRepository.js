'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

const Database = use('Database');
const User = use('App/Models/User');
const ThemeList = use('App/Models/ThemeList');

class UserRepository {
  async getById(id) {
    try {
      const data = await User
        .query()
        .where('id', id)
        .with('nationality')
        .first()

      return data;
    } catch (err) {
      return err;
    }
  }

  async updateById(id, body) {
    try {
      const data = await User
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

  async create({ body, themes }) {
    const trx = await Database.beginTransaction();

    try {
      const data = await User.create(body, trx);
      const theme_data = await ThemeList.createMany(
        themes.map(theme => ({ theme_id: theme, user_id: data.id })),
        trx
      );
      await trx.commit();

      return {
        user: data,
        theme: theme_data
      }

    } catch (err) {
      await trx.rollback();
      return err
    }
  }
}

module.exports = new UserRepository();
