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

    await Factory.model('App/Models/Nationality').create();
    const country_1 = await Nationality.find(1);

    // -------------------------------------------------------------------------- //

    const user = await Factory.model('App/Models/User').make();

    // -------------------------------------------------------------------------- //

    await country_1.users().save(user);
    
    // const admin = new User();
    // admin.username = 'admin'
    // admin.email = 'admin@lis.com',
    // admin.password = 'admin123';
    // await admin.save();

    // await Factory
    //   .model('App/Models/User')
    //   .createMany(10)
  }
}

module.exports = DatabaseSeeder
