/**
 * GET all movies
 * @param {Object} context
 * @param {Object} queryParams
 * @returns {Promise<Object>}
 */
function getAll(context, queryParams) {
  const { fetch, utils, config } = context;
  const { queryBuilder } = utils;

  const path = config.externalEndpoints.movies.getAll;
  const queryString = queryBuilder(path, queryParams);

  return fetch(queryString);
}

/**
 * GET movie by id
 * @param {Object} context
 * @param {string} id movie ID
 * @returns {Promise<Object>}
 */
function getById(context, id) {
  const { fetch, config } = context;
  const path = config.externalEndpoints.movies.getById.replace(':id', id);

  return fetch(path);
}

/**
 * GET quotes related to movie
 * @param {Object} context
 * @param {string} id movie ID
 * @returns {Promise<Object>}
 */
function getQuotes(context, id, queryParams) {
  const { fetch, utils, config } = context;
  const { queryBuilder } = utils;

  const path = config.externalEndpoints.movies.getQuotes.replace(':id', id);
  const queryString = queryBuilder(path, queryParams);

  return fetch(queryString);
}

/** @module interfaces/movies API interfaces for movie entities retrieval */
module.exports = {
  getAll,
  getById,
  getQuotes
};
