/**
 * Form query string
 * @param {string} initialPath
 * @param {Object} params
 * @returns {string}
 */
function queryBuilder(initialPath, params = {}) {
  if (Object.entries(params).length === 0) {
    return initialPath;
  }

  const {
    limit,
    page,
    offset,
    sort,
    filters
  } = params;

  const queryArray = [];

  if (limit) {
    queryArray.push(`limit=${limit}`);
  }

  if (page) {
    queryArray.push(`page=${page}`);
  }

  if (offset) {
    queryArray.push(`offset=${offset}`);
  }

  if (sort && sort.length) {
    sort.forEach(([field, value]) => {
      if (Number(value) === 1 || value.toLowerCase() === 'asc') {
        queryArray.push(`sort=${field}:asc`);
      } else {
        queryArray.push(`sort=${field}:desc`);
      }
    });
  }

  if (filters && filters.length) {
    filters.forEach(filter => {
      const [field, operator, value] = filter;
      queryArray.push(`${field}${operator}${Array.isArray(value) ? value.join(',') : value}`);
    });
  }

  return `${initialPath}?${encodeURIComponent(queryArray.join('&'))}`;
}

/** @module utils/queryBuilder */
module.exports = { queryBuilder };
