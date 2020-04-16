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

/*
|--------------------------------------------------------------------------
| App
|--------------------------------------------------------------------------
*/

Route.group(() => {
  // App -> User
  Route.get('/user/theme', 'Api/ThemeController.indexUser')
  Route.put('/user/theme', 'Api/ThemeController.update')
  Route.get('/user/:id', 'Api/UserController.index')
  Route.get('/user', 'Api/UserController.get')
  Route.put('/user', 'Api/UserController.update').validator(['User'])
  Route.get('/friends', 'Api/FriendListController.index')

  // App -> Tasks
  Route.get('/task', 'Api/TaskController.index')
  Route.get('/tasks/:id', 'Api/TaskController.get')
  Route.post('/task/finish', 'Api/FinishTaskController.index')
  Route.post('/task/evaluation', 'Api/EvaluationController.store')
}).prefix('api/v1').middleware(['auth:jwt']);

Route.group(() => {
  Route.get('/theme', 'Api/ThemeController.index')
  Route.post('/check', 'Api/UserController.check')
  Route.post('/user', 'Api/UserController.store').validator(['User'])
  Route.post('/login', 'Api/SessionController.store')
  Route.post('/forgot', 'Api/ForgotPasswordController.store')
  Route.post('/reset', 'Api/ResetPasswordController.store')
}).prefix('api/v1')

/*
|--------------------------------------------------------------------------
| Admin
|--------------------------------------------------------------------------
*/

Route.group(() => {
  Route.get('/', 'Admin/IndexController.index').as('admin')

  // Admin -> Themes
  Route.on('/themes/new').render('pages.themes.store')
  Route.post('/themes/new', 'Admin/ThemeController.store').as('admin.themes.store')
  Route.post('/themes/update', 'Admin/ThemeController.update').as('admin.themes.update')
  Route.get('/themes/update/:id', 'Admin/ThemeController.indexOf').as('admin.themes.indexOf')
  Route.post('/themes', 'Admin/ThemeController.delete').as('admin.themes.delete')
  Route.get('/themes', 'Admin/ThemeController.index').as('admin.themes')

  // Admin -> Users
  Route.get('/users', 'Admin/UserController.index').as('admin.users')

  // Admin -> Tasks
  Route.get('/tasks/update/:id', 'Site/TaskController.update').as('admin.tasks.update')
  Route.get('/tasks/:type/new', 'Admin/TaskController.new').as('admin.tasks.type.store')
  Route.get('/tasks/type/:type', 'Admin/TaskController.index').as('admin.tasks')
  Route.get('/tasks/:id', 'Admin/TaskController.get').as('admin.task')
  Route.post('/tasks/new', 'Admin/TaskController.store').as('admin.tasks.store')

}).prefix('admin')
// }).prefix('admin').middleware(['admin', 'auth:session'])

Route.group(() => {
  Route.on('/login').render('login').as('admin.login')
  Route.post('/login', 'Admin/AdminController.store').as('admin.auth')
}).prefix('admin')

Route.on('/').render('welcome')
