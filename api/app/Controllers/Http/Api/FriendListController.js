'use strict'
const FriendList = use('App/Models/FriendList');
const User = use('App/Models/User');

class FriendListController {
  async index({ response, auth }) {
    try {
      const data = await FriendList
        .query()
        .where('user_one_id', auth.user.id)
        .orWhere('user_two_id', auth.user.id)
        .fetch();

      const friendIds = data.toJSON().map((item) => item.user_one_id === auth.user.id ? item.user_two_id : item.user_one_id)

      const friends = await User
        .query()
        .whereIn('id', friendIds)
        .fetch();

      response.send(friends);
    } catch(err) {
      response.send(err);
    }
  }
}

module.exports = FriendListController
