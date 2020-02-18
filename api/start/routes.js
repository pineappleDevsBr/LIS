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

Route.group(() => { // App
  Route.get('/user/:id', 'UserController.index')
  Route.get('/user', 'UserController.get')
  Route.put('/user', 'UserController.update')
  Route.get('/theme', 'ThemeController.indexUser')
  Route.post('/theme', 'ThemeController.store')
  Route.put('/theme', 'ThemeController.update')
  Route.delete('/theme', 'ThemeController.delete')
}).middleware(['auth:jwt']);

Route.group(() => { // Admin
  Route.on('/').render('index').as('admin')
  Route.get('/themes', 'Admin/ThemeController.index').as('admin.themes')
  Route.get('/users', 'Admin/UserController.index').as('admin.users')
}).prefix('admin').middleware(['auth:session', 'admin'])

// Free app routes
Route.get('/theme/all', 'ThemeController.index')
Route.post('/user', 'UserController.store')
Route.post('/login', 'SessionController.store')
Route.post('/forgot', 'ForgotPasswordController.store')
Route.post('/reset', 'ResetPasswordController.store')

// Free admin routes
Route.on('/admin/login').render('login').as('admin.login')
Route.post('/admin/login', 'AdminController.store').as('admin.auth')
