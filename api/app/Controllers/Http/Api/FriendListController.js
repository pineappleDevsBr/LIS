'use strict'
const FriendList = use('App/Models/FriendList');

class FriendListController {
  async index({ response, auth }) {
    try {
      const data = await FriendList
        .query()
        .where('user_one_id', auth.user.id)
        .orWhere('user_two_id', auth.user.id)
        .fetch();
      response.send(data);
    } catch(err) {
      response.send(err);
    }
  }
}

module.exports = FriendListController
