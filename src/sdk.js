const { initializeFetch, formatResponse } = require('./utils/fetch.js');
const { initializeCache } = require('./utils/cache.js');
const { initializeLogger } = require('./utils/logger.js');
const { queryBuilder } = require('./utils/query-builder.js');
const config = require('./config.js');

const {
  getAll,
  getByName,
  getById,
  getQuotes
} = require('./api/movies.js');

/**
 * LoTR SDK controller function
 * @param {string} apiKey key for API authorization
 * @param {Object|null} options object with options
 * @return {function} complete SDK function for retrieving serialized data from the API
 */
function SDK(apiKey, options = {}) {
  const { cacheTime, loggerEnabled } = options;
  const headers = { Authorization: `Bearer ${apiKey}` };
  const logger = initializeLogger(loggerEnabled);
  const cache = initializeCache(cacheTime);
  const fetchUtils = initializeFetch(headers, logger, cache, config);
  const utils = { formatResponse, queryBuilder };

  const context = { fetch: fetchUtils.apiGet, logger, utils, config };

  const movies = {
    getAll: params => getAll(context, params),
    getById: id => getById(context, id),
    getByName: (name, params) => getByName(context, name, params),
    getQuotes: (id, params) => getQuotes(context, id, params)
  };

  return { movies };
}

/** @module gateway */
module.exports.SDK = SDK;
