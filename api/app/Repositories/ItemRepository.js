'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

const Item = use('App/Models/Item');

class ItemRepository {
  async index() {
    const data = await Item
      .query()
      .fetch();

    return data;
  }

  async getById(id) {
    return await Item.find(id);
  }
}

module.exports = new ItemRepository();