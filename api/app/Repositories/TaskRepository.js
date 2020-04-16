'use strict'
/** @type {import('@adonisjs/lucid/src/Lucid/Model')} */

const ThemeList = use('App/Models/ThemeList');
const Task = use('App/Models/Task');
const Question = use('App/Models/Question');

class TaskRepository {
  async getByType(type) {
    const data = await Task
      .query()
      .where('task_type_id', type)
      .with(['questions'])
      .fetch();

    return data.toJSON();
  }

  async getByUserAndType({ type, id }) {
    try {
      const themes = await ThemeList
        .query()
        .innerJoin('themes', 'theme_lists.theme_id', 'themes.id')
        .where('user_id', id)
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
        tasks: this.reduceEvaluations(tasks, theme)
          .filter(task => task.theme_id == theme.id)
      }))

      return data;
    } catch (err) {
      return err;
    }
  }

  async getById(id) {
    const task = await Task
      .query()
      .where('id', id)
      .with(['theme'])
      .with('evaluations')
      .first()

    const questions = await Question
      .query()
      .where('task_id', id)
      .with(['answers'])
      .fetch()

    console.log(id);


    return {
      task: this.calcEvaluation(task.toJSON()),
      questions: questions.toJSON()
    }
  }

  reduceEvaluations(tasks) {
    return tasks
      .toJSON()
      .map(task => (this.calcEvaluation(task)))
  }

  calcEvaluation(task) {
    return Object.assign(task, {
      evaluations: task.evaluations[0] ?
        task.evaluations.reduce((acc, { value }) => acc + parseInt(value), 0) / task.evaluations.length : 0
    })
  }
}

module.exports = new TaskRepository();
