'use strict'

const ItemRepository = use('App/Repositories/ItemRepository')
const ItemUserRepository = use('App/Repositories/ItemUserRepository')
const ItemEnum = use('App/Base/ItemState');

class StoreController {
  async index({ response }) {
    const data = await ItemRepository.index();
    response.json(data);
  }

  async indexOf({ response, auth }) {
    const data = await ItemUserRepository.index(auth.user.id);
    response.status(data[0] ? 200 : 404).json(data);
  }

  async store({ request, response, auth }) {
    const { id, quantify } = request.only(['id', 'quantify']);
    const item = await ItemRepository.getById(id);

    if (((item.price * quantify) <= auth.user.money)) {
      const data = await ItemUserRepository.store({
        item,
        user_id: auth.user.id,
        quantify
      });

      if (data.err) {
        response.json(data.err)
      }

      response.json(data);
    } else {
      response.status(401).send('Unauthorized');
    }
  }

  async use({ request, response, auth }) {
    const { id } = request.only(['id']);
    const item = await ItemUserRepository.indexOf(id);

    if (item.status === ItemEnum.INACTIVATED) {
      const time = new Date();
      time.setHours(time.getHours() + 8);
      item.status = ItemEnum.ACTIVATED;
      item.endtime = time;
      await item.save();

      response.send('successfully used item');
    } else {
      response.status(401).send('The item is already being used');
    }
  }
}

module.exports = StoreController
