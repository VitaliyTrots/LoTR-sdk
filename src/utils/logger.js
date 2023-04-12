/**
 * Initialize logger
 * @param {Boolean} enabled is logging requested
 * @returns {function} logger function
 */
function initializeLogger(enabled) {
  let logger = () => null;

  if (!enabled) {
    return logger;
  }

  const events = {
    request: 'request',
    response: 'response'
  };

  const title = 'LoTR SDK Logger';

  function getHeader() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${title}, ${date} ${time}:`;
  }

  logger = data => {
    const { step, method, error, payload } = data;
    let message = '';

    if (error) {
      message = `${getHeader()} ERROR: ${error.message}\nPayload:\n${JSON.stringify(payload)}`;
    } else {
      switch (step) {
        case events.request:
          message = `${getHeader()} ${method} has been called. Waiting for API response...`;
          break;
        case events.response:
          message = `${getHeader()} ${method === 'resolve' ? 'Data has been successfully retrieved' : 'API call has failed'}`;
          break;
        default:
      }
    }
    console.log(message);
  };

  console.log(`${getHeader()} logger has been successfully launched`);
  return logger;
}

/** @module utils/logger */
module.exports = { initializeLogger };
