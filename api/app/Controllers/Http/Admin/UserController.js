'use strict'
const UserRepository = use('App/Repositories/UserRepository');
const UserState = use('App/Base/UserState');

class UserController {
  async block({ request, response, session }) {
    const { id, action } = request.all();
    const hasAction = action === 'true';

    try {
      const user = await UserRepository.updateById(id, {
        user_type: hasAction ? UserState.UNBLOCKED : UserState.BLOCKED
      });

      session.flash({ result: hasAction ? 'Blocked' : 'Unblocked' })
      response.route('admin.users');
    } catch (err) {
      response.send(err);
    }
  }
}

module.exports = UserController
