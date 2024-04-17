/** .........
  * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * @param {Object} [obj={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 */

export const obj = {
    name : 'john',
    age : '30',
    city : 'brussels',
};

const splitObj = (obj = {}) => {
    const arr = [];
    for (const key in obj) {
        arr.push ({[key]: obj[key] });
    }
    return arr;
};

console.log(splitObj(obj));