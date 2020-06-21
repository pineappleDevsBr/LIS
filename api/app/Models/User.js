'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get hidden() {
    return ['created_at', 'updated_at', 'password'];
  }

  static get computed() {
    return ['level']
  }

  friends() {
    return this.hasMany('App/Models/FriendList', 'id', 'id_friend_list')
  }

  nationality() {
    return this.belongsTo('App/Models/Nationality')
  }

  themeList() {
    return this.hasMany('App/Models/ThemeList')
  }

  getLevel({ xp }) {
    if (xp < 500) return { xp, level: 1 }
    return {
      xp: ((Math.ceil(xp / 500) * 500) + ((Math.ceil(xp / 500) * 500) * 0.5)),
      level: (Math.ceil(xp / 500))
    }
  }

  // getAvatar(avatar) {
  //   return `https://api.adorable.io/avatars/75/${avatar}.png`
  // }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
