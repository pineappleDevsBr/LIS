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

    const evaluation_1 = await Factory.model('App/Models/Evaluation').make({ value: 4, user_id: user_1.id })

    await task_1.questions().save(question_01);
    await task_1.evaluations().save(evaluation_1);
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

    const task_4 = await Factory.model('App/Models/Task').create({
      theme_id: 1,
      task_type_id: 3,
      title: 'Minha bunda caiu',
      name: 'Complete basico',
      difficulty: 1,
      xp: 200,
    });

    const question_21 = await Factory.model('App/Models/Question').make({
      question: 'I\'m a ______'
    });

    const answer_22 = await Factory.model('App/Models/Answer').make({
      answer: 'virgin'
    });

    await task_4.questions().save(question_21);
    await question_21.answers().save(answer_22);

    // -------------------------------------------------------------------------- //

    const task_3 = await Factory.model('App/Models/Task').create({
      theme_id: 1,
      task_type_id: 4,
      title: 'Pindamonhangaba',
      name: 'Reading basico',
      difficulty: 1,
      xp: 200,
    });

    const question_12 = await Factory.model('App/Models/Question').make({
      question: 'História da franca',
      text: 'Franca is a Brazilian municipality in the interior of the state of São Paulo, home to the Administrative Region of Franca (14th Administrative Region of the state of São Paulo) and the Urban Agglomeration of Franca [8]. It is the 74th most populous Brazilian city and the 9th most populous in the interior of the state of São Paulo. It is located at 20º32\'19 "south latitude and 47º24\'03" west longitude, 401 km away from the state capital and 676 km from Brasília. It has an area of 605,679 km², of which 86.92 km² are in urban areas, and its estimated population in August 2019 was 353 187 inhabitants. [5] It is known throughout Brazil as the National Capital of Footwear and the National Capital of Basketball.',
      translation: 'Franca é um município brasileiro no interior do estado de São Paulo, sede da Região Administrativa de Franca (14ª Região Administrativa do estado de São Paulo) e da Aglomeração Urbana de Franca [8]. É a 74ª cidade brasileira mais populosa e a 9ª mais populosa do interior de São Paulo. Está localizado a 20º32 \'19 "de latitude sul e 47º24 \'03" de longitude oeste, a 401 km da capital do estado e a 676 km de Brasília. Possui uma área de 605.679 km², dos quais 86,92 km² estão em áreas urbanas e sua população estimada em agosto de 2019 era de 353 187 habitantes. [5] É conhecida em todo o Brasil como a Capital Nacional do Calçado e a Capital Nacional do Basquete.'
    });

    await task_3.questions().save(question_12);
  }
}

module.exports = FakerSeeder
