/** @module testConfig */
module.exports = {
  apiKey: '_QSulAXJSnq_KtnRppA2',
  cacheTime: 10000,
  loggerEnabled: true,
  queryOverrideLimit: 5000,
  defaultPaginationStates: {
    limit: 1000,
    offset: 0,
    page: 1,
    pages: 1
  },
  externalEndpoints: {
    movies: {
      getAll: '/movie',
      getById: '/movie/:id',
      getQuotes: '/movie/:id/quote'
    }
  }
};
