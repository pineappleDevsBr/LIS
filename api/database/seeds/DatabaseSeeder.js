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
    const country_1 = await Nationality.find(1);

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

    // -------------------------------------------------------------------------- //

    await Factory.model('App/Models/Theme').createMany(5)

    await Factory.model('App/Models/ThemeList')
      .create(0, { user_id: 1, theme_id: 1 })

    await Factory.model('App/Models/ThemeList')
      .create(0, { user_id: 1, theme_id: 2 })

    await Factory.model('App/Models/ThemeList')
      .create(0, { user_id: 1, theme_id: 3 })

    // -------------------------------------------------------------------------- //

    await Factory.model('App/Models/TaskType').create('quiz')
    await Factory.model('App/Models/TaskType').create('complete')
    await Factory.model('App/Models/TaskType').create('reading')

    const task_1 = await Factory.model('App/Models/Task').create({ theme: 1, type: 1 });
    const question_1 = await Factory.model('App/Models/Question').make();
    const question_2 = await Factory.model('App/Models/Question').make();
    await task_1.questions().save(question_1);
    await task_1.questions().save(question_2);

    await Factory.model('App/Models/Task').create({ theme: 2, type: 1 });
    await Factory.model('App/Models/Task').create({ theme: 2, type: 2 });
    await Factory.model('App/Models/Task').create({ theme: 3, type: 3 });
  }
}

module.exports = DatabaseSeeder
