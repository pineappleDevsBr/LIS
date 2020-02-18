'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response, auth, session }, next) {
    await auth.authenticator('session').check();

    try {
      if (!auth.user || auth.user.user_type !== 1) {
        response.status(401).json()
      }

      await next();
    } catch (err) {
      response.send(err)
    }
  }
}

module.exports = Admin
