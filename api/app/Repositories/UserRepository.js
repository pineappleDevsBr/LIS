'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

const Database = use('Database');
const User = use('App/Models/User');
const FriendList = use('App/Models/FriendList');
const ThemeList = use('App/Models/ThemeList');

class UserRepository {
  async getById(id, user) {
    let areFriends;
    try {
      const data = await User
        .query()
        .where('id', id)
        .with('nationality')
        .first()

      if (user) {
        areFriends = await FriendList
        .query()
        .where('user_one_id', user)
        .andWhere('user_two_id', id)
        .orWhere('user_one_id', id)
        .andWhere('user_two_id', user)
        .first();

        return {
          ...data.toJSON(),
          areFriends: areFriends ? true : false
        };
      } else {
        return data;
      }


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

  async indexPaginated(page) {
    try {
      const data = await User
      .query()
      .orderBy('xp', 'desc')
      .paginate(page, 2)

      return data;
    } catch (err) {
      return err;
    }
  }

  async searchByEmailOrName(value) {
    try {
      const data = User
        .query()
        .whereRaw(`name LIKE ?`, `%${value}%`)
        .orWhereRaw(`email LIKE ?`, `%${value}%`)
        .fetch()

      return data;
    } catch (err) {
      return err;
    }
  }
}

module.exports = new UserRepository();
