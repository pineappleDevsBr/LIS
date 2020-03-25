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
const Theme = use('App/Models/Theme')

class DatabaseSeeder {
  async run () {

    await Factory.model('App/Models/Nationality').create(0, { country: 'Brazil' });
    await Nationality.find(1);

    const admin_1 = new User();
    admin_1.nickname = '4stronaut4'
    admin_1.name = 'Leandro C. Silva'
    admin_1.email = 'leandro@lis.com',
    admin_1.password = '123';
    admin_1.date_of_birth = new Date();
    admin_1.nationality_id = 1;
    admin_1.user_type = 1;
    await admin_1.save();

    const admin_2 = new User();
    admin_2.nickname = 'Isquerim'
    admin_2.name = 'Fernando S. Marques'
    admin_2.email = 'fernando@lis.com',
    admin_2.password = '123';
    admin_2.date_of_birth = new Date();
    admin_2.nationality_id = 1;
    admin_2.user_type = 1;
    await admin_2.save();

    // -------------------------------------------------------------------------- //

    await Factory.model('App/Models/TaskType').create('quiz')
    await Factory.model('App/Models/TaskType').create('listening')
    await Factory.model('App/Models/TaskType').create('complete')
    await Factory.model('App/Models/TaskType').create('reading')

    // -------------------------------------------------------------------------- //
  }
}

module.exports = DatabaseSeeder
