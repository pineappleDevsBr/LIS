'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('/user/all', 'UserController.index')
  Route.get('/user', 'UserController.get')
  Route.put('/user', 'UserController.update')
}).middleware(['auth']);

Route.post('/user', 'UserController.store')
Route.post('/login', 'SessionController.store')
Route.on('/').render('welcome')
