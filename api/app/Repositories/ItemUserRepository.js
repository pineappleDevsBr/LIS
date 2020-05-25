'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

// const Database = use('Database');
const ItemUser = use('App/Models/ItemUser');
const UserRepository = use('App/Repositories/UserRepository');

class ItemUserRepository {
  async index(id) {
    const data = await ItemUser
      .query()
      .innerJoin('items', 'item_users.item_id', 'items.id')
      .where('user_id', id)
      .fetch();

    return data.toJSON();
  }

  async getAvailableItems(id) {
    const data = await ItemUser
      .query()
      .where('user_id', id)
      .innerJoin('items', 'item_users.item_id', 'items.id')
      .whereNotIn('items.name', ['present', 'chest'])
      .where('item_users.status', 'activated')
      .fetch();

    return data.toJSON();
  }

  async indexOf(id) {
    return await ItemUser.find(id);
  }

  async store({ item, quantify, user_id }) {
    // const trx = await Database.beginTransaction();
    const user = await UserRepository.getById(user_id);
    const money = user.money - (item.price * quantify);

    try {
      const data = []
      for (let index = 0; index < quantify; index++) {
        data.push(await ItemUser.create({ user_id, item_id: item.id }));
      }

      user.merge({ money });
      await user.save();

      // await trx.commit();
      return { data, money };
    } catch (err) {
      // await trx.rollback();
      return { err };
    }
  }
}

module.exports = new ItemUserRepository();