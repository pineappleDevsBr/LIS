'use strict'

const ItemRepository = use('App/Repositories/ItemRepository')
const ItemUserRepository = use('App/Repositories/ItemUserRepository')

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
}

module.exports = StoreController
