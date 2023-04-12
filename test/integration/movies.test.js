const {
  getAll,
  getByName,
  getById,
  getQuotes
} = require('../../src/api/movies.js');
const { mockContext } = require('../libs/utils.js');
const { externalEndpoints: { movies: moviesEndpoints } } = require('../libs/config.js');

describe('Test movies API', () => {
  const id = '12345';
  const testParams = { limit: 1000, offset: 1 };
  const paramsEntriesLength = Object.entries(testParams).length;
  const negativeTestParams = { ...testParams, throwError: true };
  const context = mockContext();

  describe('getAll', () => {
    it('Success scenario, no params', async () => {
      const result = await getAll(context);

      expect(result.movies[0].name).toEqual(moviesEndpoints.getAll);
    });

    it('Success scenario, with params', async () => {
      const result = await getAll(context, testParams);

      expect(result.movies[0].name).toEqual(moviesEndpoints.getAll);
      expect(Number(result.movies[1].name)).toEqual(paramsEntriesLength);
    });

    it('Negative scenario', async () => {
      const result = await getAll(context, negativeTestParams);

      expect(result).toBeFalsy();
    });
  });

  describe('getByName', () => {
    const name = 'first movie';
    it('Success scenario, no params', async () => {
      const result = await getByName(context, name);

      expect(result.movies[0].name).toEqual(moviesEndpoints.getAll);
    });

    it('Success scenario, with params', async () => {
      const result = await getByName(context, name, testParams);

      expect(result.movies[0].name).toEqual(moviesEndpoints.getAll);
      expect(Number(result.movies[1].name)).toEqual(paramsEntriesLength + 1);
    });

    it('Negative scenario', async () => {
      const result = await getByName(context, name, negativeTestParams);

      expect(result).toBeFalsy();
    });
  });

  describe('getById', () => {
    it('Success scenario', async () => {
      const result = await getById(context, id);
      const matchPath = moviesEndpoints.getById.replace(':id', id);

      expect(result.name).toEqual(matchPath);
    });
  });

  describe('getQuotes', () => {
    it('Success scenario, no params', async () => {
      const result = await getQuotes(context, id, testParams);

      expect(result).toBeDefined();
      expect(result.quotes).toBeDefined();
      expect(result.name).toBeDefined();
    });

    it('Success scenario, with params', async () => {
      const result = await getQuotes(context, id, testParams);

      expect(result).toBeDefined();
      expect(result.quotes).toBeDefined();
      expect(result.name).toBeDefined();
    });

    it('Negative scenario, query error imitation', async () => {
      const result = await getQuotes(context, id, negativeTestParams);

      expect(result).toBeFalsy();
    });
  });
});
