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
  Route.put('/user', 'Api/UserController.update')

  // App -> Friends
  Route.get('/friends', 'Api/FriendListController.index')
  Route.post('/friends/invite', 'Api/FriendListController.store')
  Route.post('/friends/selection', 'Api/FriendListController.update')

  // App -> Search
  Route.get('/search/all/:page', 'Api/SearchController.index')
  Route.get('/search/:value', 'Api/SearchController.search')

  // App -> Tasks
  Route.get('/task', 'Api/TaskController.index')
  Route.get('/tasks/:id', 'Api/TaskController.get')
  Route.post('/task/finish', 'Api/FinishTaskController.index')
  Route.post('/task/evaluation', 'Api/EvaluationController.store')

  // App -> Store
  Route.post('/items/buy', 'Api/StoreController.store')
  Route.post('/items/use', 'Api/StoreController.use')
  Route.get('/items/all', 'Api/StoreController.index')
  Route.get('/items', 'Api/StoreController.indexOf')
}).prefix('api/v1').middleware(['auth:jwt', 'blockUser']);

Route.group(() => {
  Route.get('/tutorial', 'Api/TutorialController.index')
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
  Route.get('/', 'Site/IndexController.index').as('admin')

  // Admin -> Themes
  Route.on('/themes/new').render('pages.themes.store')
  Route.post('/themes/new', 'Admin/ThemeController.store').as('admin.themes.store')
  Route.post('/themes/update', 'Admin/ThemeController.update').as('admin.themes.update')
  Route.get('/themes/update/:id', 'Admin/ThemeController.indexOf').as('admin.themes.indexOf')
  Route.post('/themes', 'Admin/ThemeController.delete').as('admin.themes.delete')
  Route.get('/themes', 'Admin/ThemeController.index').as('admin.themes')

  // Admin -> Users
  Route.get('/users', 'Site/UserController.index').as('admin.users')
  Route.post('/users', 'Admin/UserController.block').as('admin.users.block')

  // Admin -> Tutorials
  Route.on('/tutorials/new').render('pages.tutorials.store')
  Route.get('/tutorials', 'Admin/TutorialController.index').as('admin.tutorials')
  Route.post('/tutorials/new', 'Admin/TutorialController.store').as('admin.tutorials.store')

  // Admin -> Tasks
  Route.get('/tasks/update/:id', 'Site/TaskController.update').as('admin.task.update')
  Route.get('/tasks/:type/new', 'Admin/TaskController.new').as('admin.tasks.type.store')
  Route.get('/tasks/type/:type', 'Admin/TaskController.index').as('admin.tasks')
  Route.get('/tasks/:id', 'Admin/TaskController.get').as('admin.task')
  Route.post('/tasks/new', 'Admin/TaskController.store').as('admin.tasks.store')
  Route.post('/tasks/update/task', 'Admin/UpdateTaskController.task').as('admin.tasks.update.task')
  Route.post('/tasks/update/question', 'Admin/UpdateTaskController.question').as('admin.tasks.update.question')
  Route.post('/tasks/update/answers', 'Admin/UpdateTaskController.answers').as('admin.tasks.update.answers')
  Route.post('/tasks/delete', 'Admin/TaskController.delete').as('admin.tasks.delete')

  // Admin -> Emails
  Route.get('/emails', 'Site/EmailSenderController.index').as('admin.emails')
  Route.get('/emails/:template', 'Site/EmailSenderController.get')
  Route.post('/emails', 'Admin/EmailSenderController.store')

// }).prefix('admin')
}).prefix('admin').middleware(['admin', 'auth:session'])

Route.group(() => {
  Route.on('/login').render('login').as('admin.login')
  Route.post('/login', 'Admin/AdminController.store').as('admin.auth')
}).prefix('admin')

Route.on('/').render('welcome')
