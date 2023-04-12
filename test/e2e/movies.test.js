const { initializeSDK } = require('../libs/utils.js');
const { defaultPaginationStates } = require('../libs/config.js');

describe('Test movies endpoints availability and response changes', () => {
  const sdk = initializeSDK();
  let movieId = '5cd95395de30eff6ebccde56';

  describe('getAll', () => {
    it('Success scenario, no params', async () => {
      const result = await sdk.movies.getAll();

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');

      expect(result.movies).toBeDefined();
      expect(Array.isArray(result.movies)).toBeTruthy();
      expect(result.movies.length).toBeGreaterThan(0);
      expect(result.paginationInfo).toBeDefined();
      expect(typeof result.paginationInfo).toEqual('object');

      const movieSample = result.movies[0];
      movieId = movieSample._id;

      expect(movieId).toBeDefined();
      expect(typeof movieId).toEqual('string');
      expect(movieSample.name).toBeDefined();
      expect(typeof movieSample.name).toEqual('string');
      expect(movieSample.runtimeInMinutes).toBeDefined();
      expect(typeof movieSample.runtimeInMinutes).toEqual('number');
      expect(movieSample.budgetInMillions).toBeDefined();
      expect(typeof movieSample.budgetInMillions).toEqual('number');
      expect(movieSample.boxOfficeRevenueInMillions).toBeDefined();
      expect(typeof movieSample.boxOfficeRevenueInMillions).toEqual('number');
      expect(movieSample.academyAwardNominations).toBeDefined();
      expect(typeof movieSample.academyAwardNominations).toEqual('number');
      expect(movieSample.academyAwardWins).toBeDefined();
      expect(typeof movieSample.academyAwardWins).toEqual('number');
      expect(movieSample.rottenTomatoesScore).toBeDefined();
      expect(typeof movieSample.rottenTomatoesScore).toEqual('number');

      expect(result.paginationInfo.total).toBeDefined();
      expect(result.paginationInfo.limit).toEqual(defaultPaginationStates.limit);
      expect(result.paginationInfo.offset).toEqual(defaultPaginationStates.offset);
      expect(result.paginationInfo.pages).toEqual(defaultPaginationStates.pages);
      expect(result.paginationInfo.page).toEqual(defaultPaginationStates.page);
      expect(result.paginationInfo.pages).toEqual(defaultPaginationStates.pages);
    });

    it('Success scenario, with limit and offset', async () => {
      const params = { limit: 2, offset: 1 };
      const result = await sdk.movies.getAll(params);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');

      expect(result.movies).toBeDefined();
      expect(Array.isArray(result.movies)).toBeTruthy();
      expect(result.movies.length).toBeGreaterThan(0);
      expect(result.paginationInfo).toBeDefined();
      expect(typeof result.paginationInfo).toEqual('object');

      const movieSample = result.movies[0];
      expect(movieSample._id).toBeDefined();
      expect(typeof movieSample._id).toEqual('string');
      expect(movieSample.name).toBeDefined();
      expect(typeof movieSample.name).toEqual('string');
      expect(movieSample.runtimeInMinutes).toBeDefined();
      expect(typeof movieSample.runtimeInMinutes).toEqual('number');
      expect(movieSample.budgetInMillions).toBeDefined();
      expect(typeof movieSample.budgetInMillions).toEqual('number');
      expect(movieSample.boxOfficeRevenueInMillions).toBeDefined();
      expect(typeof movieSample.boxOfficeRevenueInMillions).toEqual('number');
      expect(movieSample.academyAwardNominations).toBeDefined();
      expect(typeof movieSample.academyAwardNominations).toEqual('number');
      expect(movieSample.academyAwardWins).toBeDefined();
      expect(typeof movieSample.academyAwardWins).toEqual('number');
      expect(movieSample.rottenTomatoesScore).toBeDefined();
      expect(typeof movieSample.rottenTomatoesScore).toEqual('number');

      expect(result.paginationInfo.total).toBeDefined();
      expect(result.paginationInfo.limit).toEqual(params.limit);
      expect(result.paginationInfo.offset).toEqual(params.offset);
      expect(result.paginationInfo.pages).not.toBeDefined();
      expect(result.paginationInfo.page).not.toBeDefined();
    });

    it('Success scenario, with limit and page', async () => {
      const params = { limit: 2, page: 1 };
      const result = await sdk.movies.getAll(params);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');

      expect(result.movies).toBeDefined();
      expect(Array.isArray(result.movies)).toBeTruthy();
      expect(result.movies.length).toBeGreaterThan(0);
      expect(result.paginationInfo).toBeDefined();
      expect(typeof result.paginationInfo).toEqual('object');

      const movieSample = result.movies[0];
      expect(movieSample._id).toBeDefined();
      expect(typeof movieSample._id).toEqual('string');
      expect(movieSample.name).toBeDefined();
      expect(typeof movieSample.name).toEqual('string');
      expect(movieSample.runtimeInMinutes).toBeDefined();
      expect(typeof movieSample.runtimeInMinutes).toEqual('number');
      expect(movieSample.budgetInMillions).toBeDefined();
      expect(typeof movieSample.budgetInMillions).toEqual('number');
      expect(movieSample.boxOfficeRevenueInMillions).toBeDefined();
      expect(typeof movieSample.boxOfficeRevenueInMillions).toEqual('number');
      expect(movieSample.academyAwardNominations).toBeDefined();
      expect(typeof movieSample.academyAwardNominations).toEqual('number');
      expect(movieSample.academyAwardWins).toBeDefined();
      expect(typeof movieSample.academyAwardWins).toEqual('number');
      expect(movieSample.rottenTomatoesScore).toBeDefined();
      expect(typeof movieSample.rottenTomatoesScore).toEqual('number');

      expect(result.paginationInfo.total).toBeDefined();
      expect(result.paginationInfo.limit).toEqual(params.limit);
      expect(result.paginationInfo.offset).not.toBeDefined();
      expect(result.paginationInfo.pages).toBeDefined();
      expect(result.paginationInfo.page).toEqual(params.page);
    });
  });

  describe('getByName', () => {
    const searchInput = 'return';

    it('Success scenario, no params', async () => {
      const result = await sdk.movies.getByName(searchInput);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');

      expect(result.movies).toBeDefined();
      expect(Array.isArray(result.movies)).toBeTruthy();
      expect(result.movies.length).toBeGreaterThan(0);
      expect(result.paginationInfo).toBeDefined();
      expect(typeof result.paginationInfo).toEqual('object');

      const movieSample = result.movies[0];
      expect(movieSample._id).toBeDefined();
      expect(typeof movieSample._id).toEqual('string');
      expect(movieSample.name).toBeDefined();
      expect(typeof movieSample.name).toEqual('string');
      expect(movieSample.runtimeInMinutes).toBeDefined();
      expect(typeof movieSample.runtimeInMinutes).toEqual('number');
      expect(movieSample.budgetInMillions).toBeDefined();
      expect(typeof movieSample.budgetInMillions).toEqual('number');
      expect(movieSample.boxOfficeRevenueInMillions).toBeDefined();
      expect(typeof movieSample.boxOfficeRevenueInMillions).toEqual('number');
      expect(movieSample.academyAwardNominations).toBeDefined();
      expect(typeof movieSample.academyAwardNominations).toEqual('number');
      expect(movieSample.academyAwardWins).toBeDefined();
      expect(typeof movieSample.academyAwardWins).toEqual('number');
      expect(movieSample.rottenTomatoesScore).toBeDefined();
      expect(typeof movieSample.rottenTomatoesScore).toEqual('number');

      expect(result.paginationInfo.total).toBeDefined();
      expect(result.paginationInfo.limit).toEqual(defaultPaginationStates.limit);
      expect(result.paginationInfo.offset).toEqual(defaultPaginationStates.offset);
      expect(result.paginationInfo.pages).toEqual(defaultPaginationStates.pages);
      expect(result.paginationInfo.page).toEqual(defaultPaginationStates.page);
      expect(result.paginationInfo.pages).toEqual(defaultPaginationStates.pages);
    });

    it('Negative scenario, not found', async () => {
      const result = await sdk.movies.getByName('aaaasssddd');

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');

      expect(result.movies).toBeDefined();
      expect(Array.isArray(result.movies)).toBeTruthy();
      expect(result.movies.length).toEqual(0);
      expect(result.paginationInfo).toBeDefined();
      expect(typeof result.paginationInfo).toEqual('object');

      expect(result.paginationInfo.total).toEqual(0);
      expect(result.paginationInfo.limit).toEqual(defaultPaginationStates.limit);
      expect(result.paginationInfo.offset).toEqual(defaultPaginationStates.offset);
      expect(result.paginationInfo.pages).toEqual(defaultPaginationStates.pages);
      expect(result.paginationInfo.page).toEqual(defaultPaginationStates.page);
      expect(result.paginationInfo.pages).toEqual(defaultPaginationStates.pages);
    });

    it('Success scenario, with limit and offset', async () => {
      const params = { limit: 2, offset: 0 };
      const result = await sdk.movies.getByName(searchInput, params);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');

      expect(result.movies).toBeDefined();
      expect(Array.isArray(result.movies)).toBeTruthy();
      expect(result.movies.length).toBeGreaterThan(0);
      expect(result.paginationInfo).toBeDefined();
      expect(typeof result.paginationInfo).toEqual('object');

      const movieSample = result.movies[0];
      expect(movieSample._id).toBeDefined();
      expect(typeof movieSample._id).toEqual('string');
      expect(movieSample.name).toBeDefined();
      expect(typeof movieSample.name).toEqual('string');
      expect(movieSample.runtimeInMinutes).toBeDefined();
      expect(typeof movieSample.runtimeInMinutes).toEqual('number');
      expect(movieSample.budgetInMillions).toBeDefined();
      expect(typeof movieSample.budgetInMillions).toEqual('number');
      expect(movieSample.boxOfficeRevenueInMillions).toBeDefined();
      expect(typeof movieSample.boxOfficeRevenueInMillions).toEqual('number');
      expect(movieSample.academyAwardNominations).toBeDefined();
      expect(typeof movieSample.academyAwardNominations).toEqual('number');
      expect(movieSample.academyAwardWins).toBeDefined();
      expect(typeof movieSample.academyAwardWins).toEqual('number');
      expect(movieSample.rottenTomatoesScore).toBeDefined();
      expect(typeof movieSample.rottenTomatoesScore).toEqual('number');

      expect(result.paginationInfo.total).toBeDefined();
      expect(result.paginationInfo.limit).toEqual(params.limit);
      expect(result.paginationInfo.offset).toEqual(params.offset);
      expect(result.paginationInfo.pages).toBeDefined();
      expect(result.paginationInfo.page).toBeDefined();
    });

    it('Success scenario, with limit and page', async () => {
      const params = { limit: 2, page: 1 };
      const result = await sdk.movies.getByName(searchInput, params);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');

      expect(result.movies).toBeDefined();
      expect(Array.isArray(result.movies)).toBeTruthy();
      expect(result.movies.length).toBeGreaterThan(0);
      expect(result.paginationInfo).toBeDefined();
      expect(typeof result.paginationInfo).toEqual('object');

      const movieSample = result.movies[0];
      expect(movieSample._id).toBeDefined();
      expect(typeof movieSample._id).toEqual('string');
      expect(movieSample.name).toBeDefined();
      expect(typeof movieSample.name).toEqual('string');
      expect(movieSample.runtimeInMinutes).toBeDefined();
      expect(typeof movieSample.runtimeInMinutes).toEqual('number');
      expect(movieSample.budgetInMillions).toBeDefined();
      expect(typeof movieSample.budgetInMillions).toEqual('number');
      expect(movieSample.boxOfficeRevenueInMillions).toBeDefined();
      expect(typeof movieSample.boxOfficeRevenueInMillions).toEqual('number');
      expect(movieSample.academyAwardNominations).toBeDefined();
      expect(typeof movieSample.academyAwardNominations).toEqual('number');
      expect(movieSample.academyAwardWins).toBeDefined();
      expect(typeof movieSample.academyAwardWins).toEqual('number');
      expect(movieSample.rottenTomatoesScore).toBeDefined();
      expect(typeof movieSample.rottenTomatoesScore).toEqual('number');

      expect(result.paginationInfo.total).toBeDefined();
      expect(result.paginationInfo.limit).toEqual(params.limit);
      expect(result.paginationInfo.offset).not.toBeDefined();
      expect(result.paginationInfo.pages).toBeDefined();
      expect(result.paginationInfo.page).toEqual(params.page);
    });
  });

  describe('getById', () => {
    it('Success scenario', async () => {
      const result = await sdk.movies.getById(movieId);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');
      expect(result._id).toBeDefined();
      expect(typeof result._id).toEqual('string');
      expect(result.name).toBeDefined();
      expect(typeof result.name).toEqual('string');
      expect(result.runtimeInMinutes).toBeDefined();
      expect(typeof result.runtimeInMinutes).toEqual('number');
      expect(result.budgetInMillions).toBeDefined();
      expect(typeof result.budgetInMillions).toEqual('number');
      expect(result.boxOfficeRevenueInMillions).toBeDefined();
      expect(typeof result.boxOfficeRevenueInMillions).toEqual('number');
      expect(result.academyAwardNominations).toBeDefined();
      expect(typeof result.academyAwardNominations).toEqual('number');
      expect(result.academyAwardWins).toBeDefined();
      expect(typeof result.academyAwardWins).toEqual('number');
      expect(result.rottenTomatoesScore).toBeDefined();
      expect(typeof result.rottenTomatoesScore).toEqual('number');
    });

    it('Negative scenario, no id', async () => {
      const result = await sdk.movies.getById();

      expect(result).toBeFalsy();
    });

    it('Negative scenario, wrong id', async () => {
      const result = await sdk.movies.getById('aa042b');

      expect(result).toBeFalsy();
    });
  });

  describe('getQuotes', () => {
    it('Success scenario, no params', async () => {
      const result = await sdk.movies.getQuotes(movieId);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');

      expect(result.name).toBeDefined();
      expect(typeof result.name).toEqual('string');

      expect(result.quotes).toBeDefined();
      expect(Array.isArray(result.quotes)).toBeTruthy();

      expect(result.paginationInfo).toBeDefined();
      expect(typeof result.paginationInfo).toEqual('object');
      expect(result.paginationInfo.total).toBeDefined();
      expect(result.paginationInfo.limit).toEqual(defaultPaginationStates.limit);
      expect(result.paginationInfo.offset).toEqual(defaultPaginationStates.offset);
      expect(result.paginationInfo.pages).toEqual(defaultPaginationStates.pages);
      expect(result.paginationInfo.page).toEqual(defaultPaginationStates.page);
      expect(result.paginationInfo.pages).toEqual(defaultPaginationStates.pages);
    });

    it('Success scenario, with limit and offset', async () => {
      const params = { limit: 2, offset: 1 };
      const result = await sdk.movies.getQuotes(movieId, params);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');

      expect(result.name).toBeDefined();
      expect(typeof result.name).toEqual('string');

      expect(result.quotes).toBeDefined();
      expect(Array.isArray(result.quotes)).toBeTruthy();

      expect(result.paginationInfo).toBeDefined();
      expect(typeof result.paginationInfo).toEqual('object');
      expect(result.paginationInfo.total).toBeDefined();
      expect(result.paginationInfo.limit).toEqual(params.limit);
      expect(result.paginationInfo.offset).toEqual(params.offset);
      expect(result.paginationInfo.pages).not.toBeDefined();
      expect(result.paginationInfo.page).not.toBeDefined();
    });

    it('Success scenario, with limit and page', async () => {
      const params = { limit: 2, page: 1 };
      const result = await sdk.movies.getQuotes(movieId, params);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');

      expect(result.name).toBeDefined();
      expect(typeof result.name).toEqual('string');

      expect(result.quotes).toBeDefined();
      expect(Array.isArray(result.quotes)).toBeTruthy();

      expect(result.paginationInfo).toBeDefined();
      expect(typeof result.paginationInfo).toEqual('object');
      expect(result.paginationInfo.total).toBeDefined();
      expect(result.paginationInfo.limit).toEqual(params.limit);
      expect(result.paginationInfo.page).toEqual(params.page);
      expect(result.paginationInfo.pages).toBeDefined();
      expect(result.paginationInfo.offset).not.toBeDefined();
    });

    it('Negative scenario, no id ', async () => {
      const result = await sdk.movies.getQuotes();

      expect(result).toBeFalsy();
    });

    it('Negative scenario, wrong id', async () => {
      const result = await sdk.movies.getQuotes('abcd');

      expect(result).toBeFalsy();
    });
  });
});
