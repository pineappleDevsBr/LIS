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

    await Factory.model('App/Models/User').create({
      nationality_id: 1,
      email: 'block@test.com',
      password: 'Secret123',
      user_type: 3
    });

    await Factory.model('App/Models/User').create({ nationality_id: 1 });
    await Factory.model('App/Models/User').create({ nationality_id: 1 });
    await Factory.model('App/Models/User').create({ nationality_id: 1 });

    // -------------------------------------------------------------------------- //


    const user_1 = await User.find(2);
    const user_2 = await User.find(3);
    const user_3 = await User.find(4);

    await Factory.model('App/Models/FriendList').create(0, { user_one_id: 1, user_two_id: user_2.id, status: 'confirmed' });
    await Factory.model('App/Models/FriendList').create(0, { user_one_id: 1, user_two_id: user_3.id });

    await Factory.model('App/Models/FriendList').create(0, { user_one_id: 2, user_two_id: user_2.id, status: 'confirmed' });
    await Factory.model('App/Models/FriendList').create(0, { user_one_id: 2, user_two_id: user_3.id });

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
      title: 'Hi, how are you ?',
      name: 'verbos conjugados',
      difficulty: 1,
      xp: 200,
      money: 400,
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
      answer: 'nao sei',
      right: null
    });

    const question_02 = await Factory.model('App/Models/Question').make({
      question: 'Traduçao de "house"'
    });

    const answer_11 = await Factory.model('App/Models/Answer').make({
      answer: 'Casa',
      right: true
    });

    const answer_12 = await Factory.model('App/Models/Answer').make({
      answer: 'Bread',
      right: null
    });

    const answer_13 = await Factory.model('App/Models/Answer').make({
      answer: 'Professor Girafales',
      right: null
    });

    const answer_14 = await Factory.model('App/Models/Answer').make({
      answer: 'nao sei',
      right: null
    });

    const question_03 = await Factory.model('App/Models/Question').make({
      question: 'Como se diz "mulher"'
    });

    const answer_21 = await Factory.model('App/Models/Answer').make({
      answer: 'girl',
      right: null
    });

    const answer_22 = await Factory.model('App/Models/Answer').make({
      answer: 'woman',
      right: true
    });

    const answer_23 = await Factory.model('App/Models/Answer').make({
      answer: 'I',
      right: null
    });

    const answer_24 = await Factory.model('App/Models/Answer').make({
      answer: 'nao sei',
      right: null
    });

    const question_04 = await Factory.model('App/Models/Question').make({
      question: 'Selecione a traduçao correta',
      text: 'Ela é uma mulher.'
    });

    const answer_31 = await Factory.model('App/Models/Answer').make({
      answer: 'He is a woman.',
      right: null
    });

    const answer_32 = await Factory.model('App/Models/Answer').make({
      answer: 'It is a woman.',
      right: null
    });

    const answer_33 = await Factory.model('App/Models/Answer').make({
      answer: 'She is a woman.',
      right: true
    });

    const answer_34 = await Factory.model('App/Models/Answer').make({
      answer: 'nao sei',
      right: null
    });

    const question_05 = await Factory.model('App/Models/Question').make({
      question: 'Como se diz "ela"',
    });

    const answer_41 = await Factory.model('App/Models/Answer').make({
      answer: 'girl',
      right: null
    });

    const answer_42 = await Factory.model('App/Models/Answer').make({
      answer: 'am',
      right: null
    });

    const answer_43 = await Factory.model('App/Models/Answer').make({
      answer: 'she',
      right: true
    });

    const answer_44 = await Factory.model('App/Models/Answer').make({
      answer: 'her',
      right: null
    });

    const evaluation_1 = await Factory.model('App/Models/Evaluation').make({ value: 4, user_id: user_1.id })

    await task_1.questions().save(question_01);
    await task_1.questions().save(question_02);
    await task_1.questions().save(question_03);
    await task_1.questions().save(question_04);
    await task_1.questions().save(question_05);
    await task_1.evaluations().save(evaluation_1);

    await question_01.answers().save(answer_01);
    await question_01.answers().save(answer_02);
    await question_01.answers().save(answer_03);
    await question_01.answers().save(answer_04);

    await question_02.answers().save(answer_11);
    await question_02.answers().save(answer_12);
    await question_02.answers().save(answer_13);
    await question_02.answers().save(answer_14);

    await question_03.answers().save(answer_21);
    await question_03.answers().save(answer_22);
    await question_03.answers().save(answer_23);
    await question_03.answers().save(answer_24);

    await question_04.answers().save(answer_31);
    await question_04.answers().save(answer_32);
    await question_04.answers().save(answer_33);
    await question_04.answers().save(answer_34);

    await question_05.answers().save(answer_41);
    await question_05.answers().save(answer_42);
    await question_05.answers().save(answer_43);
    await question_05.answers().save(answer_44);

    // -------------------------------------------------------------------------- //

    const task_11 = await Factory.model('App/Models/Task').create({
      theme_id: 1,
      task_type_id: 2,
      title: 'Justin Bieber seloco',
      name: 'Litening basico',
      difficulty: 2,
      xp: 200,
    });

    const question_001 = await Factory.model('App/Models/Question').make({
      question: 'Digite a tradução da frase que você ouvir',
      file: 'i-am-from-brazil.mp3'
    });

    const question_002 = await Factory.model('App/Models/Question').make({
      question: 'Digite o que você ouvir',
      file: 'whats-your-name.mp3'
    });

    const question_003 = await Factory.model('App/Models/Question').make({
      question: 'Qual o nome falado no audio',
      file: 'hi-my-name-is-lis.mp3'
    });

    const question_004 = await Factory.model('App/Models/Question').make({
      question: 'Digite o que você ouvir',
      file: 'hello.mp3'
    });

    const answer_001 = await Factory.model('App/Models/Answer').make({
      answer: 'eu sou do brasil'
    });

    const answer_002 = await Factory.model('App/Models/Answer').make({
      answer: 'what is your name'
    });

    const answer_003 = await Factory.model('App/Models/Answer').make({
      answer: 'Lis'
    });

    const answer_004 = await Factory.model('App/Models/Answer').make({
      answer: 'Hello'
    });

    await task_11.questions().save(question_001);
    await task_11.questions().save(question_002);
    await task_11.questions().save(question_003);
    await task_11.questions().save(question_004);
    await question_001.answers().save(answer_001);
    await question_002.answers().save(answer_002);
    await question_003.answers().save(answer_003);
    await question_004.answers().save(answer_004);

    // -------------------------------------------------------------------------- //

    const task_21 = await Factory.model('App/Models/Task').create({
      theme_id: 1,
      task_type_id: 3,
      title: 'Say my name',
      name: 'Complete basico',
      difficulty: 1,
      xp: 200,
    });

    const question_0001 = await Factory.model('App/Models/Question').make({
      question: 'I\'m a ______'
    });

    const answer_0001 = await Factory.model('App/Models/Answer').make({
      answer: 'rockstar'
    });

    await task_21.questions().save(question_0001);
    await question_0001.answers().save(answer_0001);

    // -------------------------------------------------------------------------- //

    const task_31 = await Factory.model('App/Models/Task').create({
      theme_id: 1,
      task_type_id: 4,
      title: 'Franca`s history',
      name: 'Reading basico',
      difficulty: 1,
      xp: 200,
    });

    const question_00001 = await Factory.model('App/Models/Question').make({
      question: 'História da franca',
      text: 'Franca is a Brazilian municipality in the interior of the state of São Paulo, home to the Administrative Region of Franca (14th Administrative Region of the state of São Paulo) and the Urban Agglomeration of Franca [8]. It is the 74th most populous Brazilian city and the 9th most populous in the interior of the state of São Paulo. It is located at 20º32\'19 "south latitude and 47º24\'03" west longitude, 401 km away from the state capital and 676 km from Brasília. It has an area of 605,679 km², of which 86.92 km² are in urban areas, and its estimated population in August 2019 was 353 187 inhabitants. [5] It is known throughout Brazil as the National Capital of Footwear and the National Capital of Basketball.',
      translation: 'Franca é um município brasileiro no interior do estado de São Paulo, sede da Região Administrativa de Franca (14ª Região Administrativa do estado de São Paulo) e da Aglomeração Urbana de Franca [8]. É a 74ª cidade brasileira mais populosa e a 9ª mais populosa do interior de São Paulo. Está localizado a 20º32 \'19 "de latitude sul e 47º24 \'03" de longitude oeste, a 401 km da capital do estado e a 676 km de Brasília. Possui uma área de 605.679 km², dos quais 86,92 km² estão em áreas urbanas e sua população estimada em agosto de 2019 era de 353 187 habitantes. [5] É conhecida em todo o Brasil como a Capital Nacional do Calçado e a Capital Nacional do Basquete.'
    });

    await task_31.questions().save(question_00001);
  }
}

module.exports = FakerSeeder
