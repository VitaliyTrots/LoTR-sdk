const moviesInterface = require('../interfaces/movies.js');

/**
 * Retrieve all movies data from API
 * @param {Object} context
 * @param {Object} params
 * @returns {Promise<Object>} Object containing movies array and pagination details
 */
async function getAll(context, params) {
  const { logger, utils } = context;
  const { formatResponse } = utils;

  logger({
    step: 'request',
    method: 'getAll'
  });

  try {
    const movies = await moviesInterface.getAll(context, params);
    return formatResponse(movies, 'movies');
  } catch (error) {
    logger({
      error,
      payload: { params }
    });
  }
}

/**
 * Retrieve movies matching to provided name
 * @param {Object} context
 * @param {string} name searching happens by matching to this prop
 * @param {Object} params
 * @returns {Promise<Object>} Object containing movies array and pagination details
 */
async function getByName(context, name, params = {}) {
  const { logger, utils } = context;
  const { formatResponse } = utils;

  logger({
    step: 'request',
    method: 'getByName'
  });

  params.filters = params.filters || [];
  params.filters.unshift(['name', '=', `/.*${name}.*/i`]);

  try {
    const movies = await moviesInterface.getAll(context, params);
    return formatResponse(movies, 'movies');
  } catch (error) {
    logger({
      error,
      payload: {
        name,
        params
      }
    });
  }
}

/**
 * Retrieve movie by identifier
 * @param {Object} context
 * @param {string} id movie ID
 * @returns {Promise<Object>} IMovie instance
 */
async function getById(context, id) {
  const { logger, utils } = context;
  const { formatResponse } = utils;

  logger({
    step: 'request',
    method: 'getById'
  });

  try {
    const movie = await moviesInterface.getById(context, id);
    return formatResponse(movie)[0];
  } catch (error) {
    logger({
      error,
      payload: { id }
    });
  }
}

/**
 * Retrieve movie with quotes
 * @param {Object} context
 * @param {string} id movie ID
 * @param {Object} params
 * @returns {Promise<Object>} objects representing movie with an array of quotes related to it
 */
async function getQuotes(context, id, params) {
  const { logger, utils } = context;
  const { formatResponse } = utils;

  logger({
    step: 'request',
    method: 'getQuotes'
  });

  try {
    const movie = formatResponse(await moviesInterface.getById(context, id))[0];
    const quotes = await moviesInterface.getQuotes(context, id, params);
    const serializedResponse = formatResponse(quotes, 'quotes');
    serializedResponse.quotes.forEach(quote => {
      delete quote.id;
    });
    serializedResponse.name = movie.name;

    return serializedResponse;
  } catch (error) {
    logger({
      error,
      payload: {
        id,
        params
      }
    });
  }
}

module.exports = {
  getAll,
  getByName,
  getById,
  getQuotes
};
