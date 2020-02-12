'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Nationality = use('App/Models/Nationality')
const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {

    await Factory.model('App/Models/Nationality').create(0, { country: 'Brazil' });
    const country_1 = await Nationality.find(1);

    const admin = new User();
    admin.nickname = 'admin'
    admin.email = 'admin@lis.com',
    admin.password = 'admin123';
    admin.date_of_birth = new Date();
    admin.nationality_id = 1;
    admin.user_type = 1;
    await admin.save();

    // -------------------------------------------------------------------------- //

    const user_model_1 = await Factory.model('App/Models/User').make();
    const user_model_2 = await Factory.model('App/Models/User').make();

    // -------------------------------------------------------------------------- //

    await country_1.users().save(user_model_1);
    await country_1.users().save(user_model_2);

    // -------------------------------------------------------------------------- //

    const user_1 = await User.find(2);
    const user_2 = await User.find(3);

    await Factory.model('App/Models/FriendList').create(0, { one: 1, two: user_2.id });
    await Factory.model('App/Models/FriendList').create(0, { one: user_1.id, two: user_2.id });
  }
}

module.exports = DatabaseSeeder
