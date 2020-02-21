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
  Route.get('/user/:id', 'Api/UserController.index')
  Route.get('/user', 'Api/UserController.get')
  Route.put('/user', 'Api/UserController.update')
  Route.get('/theme', 'Api/ThemeController.indexUser')
  Route.post('/theme', 'Api/ThemeController.store')
  Route.put('/theme', 'Api/ThemeController.update')
  Route.delete('/theme', 'Api/ThemeController.delete')
}).middleware(['auth:jwt']);

Route.group(() => { // Admin
  Route.get('/', 'Admin/IndexController.index').as('admin')
  Route.get('/themes', 'Admin/ThemeController.index').as('admin.themes')
  Route.on('/themes/new').render('pages.theme.store')
  Route.post('/themes/new', 'Admin/ThemeController.store').as('admin.themes.store')
  Route.get('/users', 'Admin/UserController.index').as('admin.users')
}).prefix('admin').middleware(['auth:session', 'admin'])

// Free app routes
Route.get('/theme/all', 'Api/ThemeController.index')
Route.post('/user', 'Api/UserController.store')
Route.post('/login', 'Api/SessionController.store')
Route.post('/forgot', 'Api/ForgotPasswordController.store')
Route.post('/reset', 'Api/ResetPasswordController.store')

// Free admin routes
Route.on('/admin/login').render('login').as('admin.login')
Route.post('/admin/login', 'Admin/AdminController.store').as('admin.auth')
