const { getAll, getById, getQuotes } = require('../../src/interfaces/movies.js');
const { mockContext } = require('../libs/utils.js');
const { externalEndpoints: { movies: moviesEndpoints } } = require('../libs/config.js');

describe('Test movies interfaces', () => {
  const testParams = { limit: 1000, offset: 1 };
  let context;
  let paramsEntriesLength;

  beforeAll(() => {
    context = mockContext();
    paramsEntriesLength = Object.entries(testParams).length;
  });

  it('getAll', async () => {
    const result = await getAll(context, testParams);

    expect(result.startsWith(moviesEndpoints.getAll)).toBeTruthy();
    expect(result.endsWith(paramsEntriesLength)).toBeTruthy();
  });

  it('getById', async () => {
    const id = '42';
    const result = await getById(context, id, testParams);
    const matchPath = moviesEndpoints.getById.replace(':id', id);

    expect(result).toEqual(matchPath);
  });

  it('getQuotes', async () => {
    const id = '42';
    const result = await getQuotes(context, id, testParams);
    const matchPath = moviesEndpoints.getQuotes.replace(':id', id);

    expect(result.startsWith(matchPath)).toBeTruthy();
    expect(result.endsWith(paramsEntriesLength)).toBeTruthy();
  });
});
