'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

// const Database = use('Database');
const FriendList = use('App/Models/FriendList');
const FriendState = use('App/Base/FriendState');

class FriendRepository {
  async index(id) {

    try {
      const data = await FriendList
        .query()
        .where('user_one_id', id)
        .orWhere('user_two_id', id)
        .fetch();

      return data;
    } catch (err) {
      return err;
    }
  }

  async store(payload) {
    try {
      return await FriendList.create(payload);
    } catch (err) {
      return err;
    }
  }

  async updateOrDelete({ invite_id, selection }) {
    try {
      const data = await FriendList
        .query()
        .where('id', invite_id)
        .first()

        if (selection) {
          data.merge({ status: FriendState.CONFIRMED });
          await data.save();
        } else {
          await data.delete()
        }

      return data;
    } catch (err) {
      return err;
    }
  }
}

module.exports = new FriendRepository();
