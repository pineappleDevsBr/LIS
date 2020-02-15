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
  Route.get('/user/:id', 'UserController.index')
  Route.get('/user', 'UserController.get')
  Route.put('/user', 'UserController.update')
  Route.get('/theme', 'ThemeController.indexUser')
  Route.post('/theme', 'ThemeController.store')
  Route.put('/theme', 'ThemeController.update')
  Route.delete('/theme', 'ThemeController.delete')
}).middleware(['auth']);

Route.get('/theme/all', 'ThemeController.index')
Route.post('/user', 'UserController.store')
Route.post('/login', 'SessionController.store')
Route.post('/forgot', 'ForgotPasswordController.store')
Route.post('/reset', 'ResetPasswordController.store')
Route.on('/').render('welcome')
