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
const fixUrlAvatar = 'https://api.adorable.io/avatars/75/'

class DatabaseSeeder {
  async run () {

    await Factory.model('App/Models/Nationality').create(0, { country: 'Brazil' });
    await Nationality.find(1);

    const admin_1 = new User();
    admin_1.nickname = '4stronaut4'
    admin_1.avatar = `${fixUrlAvatar}lis_4stronaut4.png`
    admin_1.name = 'Leandro C. Silva'
    admin_1.email = 'leandro@lis.com',
    admin_1.password = 'Secret123';
    admin_1.date_of_birth = new Date();
    admin_1.nationality_id = 1;
    admin_1.user_type = 1;
    await admin_1.save();

    const admin_2 = new User();
    admin_2.nickname = 'fsouza2404'
    admin_2.avatar = `${fixUrlAvatar}lis_avatar-g844.png`
    admin_2.name = 'Fernando S. Marques'
    admin_2.email = 'fernando@lis.com',
    admin_2.password = '123';
    admin_2.money = 10000;
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

    await Factory.model('App/Models/ItemType').create('xp')
    await Factory.model('App/Models/ItemType').create('money')
    await Factory.model('App/Models/ItemType').create('present')
    await Factory.model('App/Models/ItemType').create('chest')

    // -------------------------------------------------------------------------- //

    await Factory.model('App/Models/Item').create({
      name: 'Dobro de XP',
      icon: 'xp',
      description: 'Por 8 horas você ganha o dobro de XP por atividade!',
      price: 1000,
      active_time: 8,
      item_type_id : 1,
      multiplier: 200
    })

    await Factory.model('App/Models/Item').create({
      name: '10% de Dinheiro',
      icon: 'money',
      description: '10% dinheiro: você receberá 10% a mais de todo o dinheiro que você ganhar nas próximas 8 horas!',
      price: 1000,
      active_time: 8,
      item_type_id : 2,
      multiplier: 110
    })

    await Factory.model('App/Models/Item').create({
      name: 'Vale-presente',
      icon: 'present',
      description: 'Você pode comprar para presentear um amigo com um item surpresa!',
      price: 1000,
      item_type_id : 3
    })

    await Factory.model('App/Models/Item').create({
      name: 'Baú especial',
      icon: 'chest',
      description: 'Quais itens aleatórios virão nesse baú?',
      price: 1500,
      item_type_id : 4
    })

    await Factory.model('App/Models/Tutorial').create({
      name: 'Como alterar minha senha',
      link: 'https://www.youtube.com/embed/TnlPtaPxXfc'
    })
  }
}

module.exports = DatabaseSeeder
