/** @module config */
module.exports = {
  host: 'the-one-api.dev',
  queryOverrideLimit: 5000,
  externalEndpoints: {
    movies: {
      getAll: '/movie',
      getById: '/movie/:id',
      getQuotes: '/movie/:id/quote'
    }
  }
};
