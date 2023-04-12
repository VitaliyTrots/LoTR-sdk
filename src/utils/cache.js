/**
 * Initialize cache
 * @param {number} keepAliveTime time the cache should be stored
 * @returns {Object} methods setCache and getCache
 */
function initializeCache(keepAliveTime) {
  if (!keepAliveTime) {
    return {
      setCache: () => null,
      getCache: () => null
    };
  }

  const cache = new Map();

  function setCache(key, value) {
    cache.set(key, value);

    setTimeout(() => {
      cache.delete(key);
    }, keepAliveTime);
  }

  function getCache(key) {
    return cache.get(key);
  }

  return { setCache, getCache };
}

/** @module utils/cache */
module.exports = { initializeCache };
