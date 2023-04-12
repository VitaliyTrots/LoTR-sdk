const { LoTRSdk } = require('../../index.js');
const { apiKey, cacheTime, loggerEnabled, externalEndpoints } = require('./config.js');

/**
 * Initialization of SDK function
 * @returns instance of main SDK function
 */
function initializeSDK() {
  const sdk = LoTRSdk(apiKey, { cacheTime, loggerEnabled });
  return sdk;
}

/**
 * Initialize mock context object for unit tests
 * @returns {Object} context
 */
function mockContext() {
  const fetch = path => path;
  const config = { externalEndpoints };
  const logger = () => null;
  const utils = {
    queryBuilder: (path, params) => {
      if (params && params.throwError) { // it's a fake param to trigger error action
        throw new Error('ERROR_TEST');
      }

      return `${path}${params ? `_${Object.entries(params).length}` : ''}`;
    },
    formatResponse: (testResult, dataKey) => {
      const result = testResult.split('_').map(name => ({ name }));
      return dataKey ? { [dataKey]: result } : result;
    }
  };

  return { fetch, utils, config, logger };
}

/** @module tests/utils */
module.exports = { initializeSDK, mockContext };
