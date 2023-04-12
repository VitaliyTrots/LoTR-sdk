const https = require('https');

/**
 * @param {Object} headers object with custom headers for request
 * @param {function} logger logger function
 * @param {Object} cache cache object with getCache and setCache methods
 * @param {Object} config config object
 * @returns {function} fetch init function
 */
function initializeFetch(headers, logger, cache, { host }) {
  /**
   * @param {string} path API endpoint
   * @returns {Object} options object
   */
  function defaultOptions(path) {
    return {
      hostname: host,
      path: `/v2/${path}`,
      method: 'GET',
      headers,
      timeout: 3000
    };
  }

  return {
    /**
     * GET request function
     * @param {string} path external service path
     * @returns {Promise<Object>} resolves with success response or rejects with an error object
     */
    apiGet(path) {
      const cached = cache.getCache(path);

      if (cached) {
        return cached;
      }

      return new Promise((resolve, reject) => {
        const req = https.request(
          defaultOptions(path),
          res => {
            let receivedData = '';

            res.on('data', data => {
              receivedData += data.toString();
            });

            res.on('end', () => {
              try {
                const data = JSON.parse(receivedData);

                if (data.success === false) {
                  logger({
                    step: 'response',
                    method: 'reject'
                  });
                  reject(data.message);
                }

                logger({
                  step: 'response',
                  method: 'resolve'
                });
                resolve(data);
              } catch (error) {
                logger({
                  step: 'response',
                  method: 'reject'
                });
                reject(error);
              }
            });
          }
        );

        req.on('timeout', () => {
          const error = new Error('REQUEST_TIMEOUT');
          logger({
            error,
            payload: error.message
          });
          reject(error);
        });

        req.on('error', error => {
          logger({
            error,
            payload: error.message
          });
          reject(error);
        });

        req.end();
      });
    }
  };
}

/**
 * Format API response
 * @param {Object} data API response object
 * @param {string?} key key for wrapping result, optional
 * @returns {Object[] | Object} API data array, can be returned as Object
 */
function formatResponse(data, key = null) {
  if (!data || !data.docs) {
    return [];
  }

  const { docs, ...paginationInfo } = data;

  if (!key) {
    return docs;
  }

  return { [key]: docs, paginationInfo };
}

/** @module utils/fetch */
module.exports = {
  initializeFetch,
  formatResponse
};
