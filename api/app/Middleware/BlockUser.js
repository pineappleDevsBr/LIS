'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class BlockUser {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response, auth }, next) {
    try {
      if (parseInt(auth.user.user_type) === 3) {
        response.status(403).json({
          message: 'Blocked user'
        });
      } else {
        await next();
      }

    } catch (err) {
      response.status(401).json(err.toString());
    }
  }
}

module.exports = BlockUser
