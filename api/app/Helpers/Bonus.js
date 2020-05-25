'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */
const ItemType = use('App/Models/ItemType');

module.exports = async ({ payload, data }) => {
  const types = (await ItemType.query().fetch()).toJSON();
  const items = payload;
  const pdata = {
    money: data.money,
    xp: data.xp,
    bonus: {}
  };

  function checkToUse(datetime) {
    const now = new Date();
    const itemTime = new Date(datetime);

    return now.getTime() < itemTime.getTime();
  }

  function init() {
    items.forEach(item => {
      const type = types.find(i => i.id == item.item_type_id);
      const value = data.xp * (item.multiplier / 100);
      const hasUse = checkToUse(item.endtime);

      if (hasUse) {
        pdata[type.name] = value;
        pdata.bonus[type.name] = (value - data.xp);
      }
    });
  }

  init();

  return pdata;
}
