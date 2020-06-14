'use strict'
const UserRepository = use('App/Repositories/UserRepository');

class SearchController {
  async index({ params, response }) {
    const data = await UserRepository.indexPaginated(params.page);
    response.send(data);
  }

  async search({ params, response }) {
    const { value } = params;
    const data = await UserRepository.searchByEmailOrName(value);
    response.send(data);
  }
}

module.exports = SearchController
