'use strict'
const ThemeList = use('App/Models/ThemeList');
const Task = use('App/Models/Task');

class TaskController {
  async index({ response, request, auth }) {
    const { type } = request.only(['type']);

    try {
      const themes = await ThemeList
        .query()
        .innerJoin('themes', 'theme_lists.theme_id', 'themes.id')
        .where('user_id', auth.user.id)
        .fetch();

      const themes_id = themes.toJSON().map(item => (item.theme_id));

      const tasks = await Task
        .query()
        .whereIn('theme_id', themes_id)
        .where('task_type_id', type)
        .with('evaluations')
        .fetch();

      const data = themes.toJSON().map(theme => ({
        theme: theme.name,
        theme_id : theme.id,
        tasks: tasks
          .toJSON()
          .filter(task => task.theme_id == theme.id)
          .map(task => Object.assign(task, {
            evaluations: task.evaluations[0] ?
              task.evaluations.reduce((acc, { value }) => acc + parseInt(value), 0) / task.evaluations.length : 0
          }))
      }))

      response.send(data);
    } catch (err) {
      response.status(500).send(err);
    }
  }
}

module.exports = TaskController
