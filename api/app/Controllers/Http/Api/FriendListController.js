'use strict'
const FriendRepository = use('App/Repositories/FriendRepository');
const FriendState = use('App/Base/FriendState');
const User = use('App/Models/User');

class FriendListController {
  async index({ response, auth }) {
    const data = {
      friends: [],
      invites: [],
    };

    try {
      const fetchData = await FriendRepository.index(auth.user.id);
      const friendData = fetchData.rows.map((item) => ({
          status: item.status,
          invite_id: item.id_friend_list,
          id: item.user_one_id === auth.user.id ? item.user_two_id : item.user_one_id
        }))

      const fetchFriends = await User
        .query()
        .whereIn('id', friendData.map(dt => dt.id))
        .fetch();

      friendData.forEach(item => {
        const user = fetchFriends.rows.find(user_data => user_data.id === item.id);

        if (item.status === FriendState.PENDING) {
          data.invites.push({ ...user.toJSON(),  invite_id: item.invite_id});
        } else if (item.status === FriendState.CONFIRMED) {
          data.friends.push(user)
        }
      })

      response.send(data);
    } catch (err) {
      response.send(err);
    }
  }

  async store({ request, response, auth }) {
    const { friend_id } = request.only(['friend_id']);

    try {
      const data = await FriendRepository.store({
        user_one_id: auth.user.id,
        user_two_id: friend_id,
        user_action_id: auth.user.id,
      })

      if (data.code) {
        response.status(401).json({
          message: 'are already friends'
        })
      } else {
        response.send(data);
      }

    } catch (err) {
      response.send(err)
    }
  }

  async update({ request, response }) {
    const { invite_id, selection } = request.only(['invite_id', 'selection']);
    response.send(await FriendRepository.updateOrDelete({ invite_id, selection }));
  }
}

module.exports = FriendListController
