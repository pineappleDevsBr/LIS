const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Env = use('Env')
  const View = use('View')

  View.global('env', (name) => Env.get(name))
})