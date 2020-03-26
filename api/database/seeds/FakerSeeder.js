'use strict'

/*
|--------------------------------------------------------------------------
| FakerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class FakerSeeder {
  async run () {

    // -------------------------------------------------------------------------- //

    await Factory.model('App/Models/User').create({ nationality_id: 1 });
    await Factory.model('App/Models/User').create({ nationality_id: 1 });

    // -------------------------------------------------------------------------- //


    const user_1 = await User.find(2);
    const user_2 = await User.find(3);

    await Factory.model('App/Models/FriendList').create(0, { one: 1, two: user_2.id });
    await Factory.model('App/Models/FriendList').create(0, { one: user_1.id, two: user_2.id });

    // -------------------------------------------------------------------------- //

    await Factory.model('App/Models/Theme').create({ name: 'Marvel' });
    await Factory.model('App/Models/Theme').create({ name: 'DC comics' });
    await Factory.model('App/Models/Theme').create({ name: 'Heavy Metal' });

    await Factory.model('App/Models/ThemeList')
      .create(0, { user_id: 1, theme_id: 1 })

    await Factory.model('App/Models/ThemeList')
      .create(0, { user_id: 1, theme_id: 2 })

    await Factory.model('App/Models/ThemeList')
      .create(0, { user_id: 1, theme_id: 3 })

    await Factory.model('App/Models/ThemeList')
      .create(0, { user_id: 2, theme_id: 1 })

    await Factory.model('App/Models/ThemeList')
      .create(0, { user_id: 2, theme_id: 2 })

    await Factory.model('App/Models/ThemeList')
      .create(0, { user_id: 2, theme_id: 3 })


    // -------------------------------------------------------------------------- //

    const task_1 = await Factory.model('App/Models/Task').create({
      theme_id: 1,
      task_type_id: 1,
      title: 'Eu to maluco ?',
      name: 'verbos conjugados',
      difficulty: 1
    });

    const question_01 = await Factory.model('App/Models/Question').make({
      question: 'Selecione o verbo'
    });

    const answer_01 = await Factory.model('App/Models/Answer').make({
      answer: 'Go',
      right: true
    });

    const answer_02 = await Factory.model('App/Models/Answer').make({
      answer: 'Bread',
      right: null
    });

    const answer_03 = await Factory.model('App/Models/Answer').make({
      answer: 'Professor Girafales',
      right: null
    });

    const answer_04 = await Factory.model('App/Models/Answer').make({
      answer: 'Sua mae <3',
      right: null
    });


    await task_1.questions().save(question_01);
    await question_01.answers().save(answer_01);
    await question_01.answers().save(answer_02);
    await question_01.answers().save(answer_03);
    await question_01.answers().save(answer_04);

    // -------------------------------------------------------------------------- //

    const task_2 = await Factory.model('App/Models/Task').create({
      theme_id: 1,
      task_type_id: 2,
      title: 'Justin Bieber seloco',
      name: 'Litening basico',
      difficulty: 2,
      xp: 200,
    });

    const question_11 = await Factory.model('App/Models/Question').make({
      question: 'Digite o que escutou #1',
      file: 'example.mp3'
    });

    const answer_11 = await Factory.model('App/Models/Answer').make({
      answer: 'Louro jose fuma pao de queijo'
    });

    await task_2.questions().save(question_11);
    await question_11.answers().save(answer_11);

    // -------------------------------------------------------------------------- //

    await Factory.model('App/Models/Task').create({ theme_id: 2, task_type_id: 1 });
    await Factory.model('App/Models/Task').create({ theme_id: 3, task_type_id: 3 });
  }
}

module.exports = FakerSeeder