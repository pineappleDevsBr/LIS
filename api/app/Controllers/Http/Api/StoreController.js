'use strict'

const ItemRepository = use('App/Repositories/ItemRepository')
const ItemUserRepository = use('App/Repositories/ItemUserRepository')
const ItemEnum = use('App/Base/ItemState');
const ItemType = use('App/Models/ItemType');
const ItemUser = use('App/Models/ItemUser');
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
    const types = (await ItemType.query().fetch()).toJSON();
    const { id, friend } = request.all();
    const item = await ItemUserRepository.indexOf(id);
    const itemData = item.toJSON();
    const findedType = (types.find(i => i.id == itemData.items.item_type_id)).name;
    const actions = {

      async gift(item) {
        const items = await ItemRepository.index();
        const random = randomIntFromInterval(0, items.rows.length - 1);
        const randomItem = items.rows[random];
        const data = await ItemUser.create({
          user_id: friend ? friend : auth.user.id,
          item_id: randomItem.id
        })

        item.status = ItemEnum.USED;
        item.endtime = new Date();
        await item.save();
        
        response.json({
          message: 'successfully used item',
          data,
          randomItem
        });
      },
  
      async attribute(item) {
        const time = new Date();
        time.setHours(time.getHours() + itemData.items.active_time);
        item.status = ItemEnum.ACTIVATED;
        item.endtime = time;
        await item.save();
        
        response.json({
          message: 'successfully used item',
        });
      }
    }


    if (itemData.status === ItemEnum.INACTIVATED) {
      if (findedType === 'chest' || findedType === 'present' ) {
        await actions.gift(item);
      } else {
        await actions.attribute(item);
      }
    } else {
      response.status(401).send('The item is already being used');
    }

  }
}

module.exports = StoreController
