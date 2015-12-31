var SHA256 = require('./index');

/**
 * Hash a string or an array of words.
 * @static
 * @param {bitArray|String} data the data to hash.
 * @return {bitArray} The hash value, an array of 16 big-endian words.
 */

module.exports = function (data) {
  return (new SHA256()).update(data).finalize();
};
