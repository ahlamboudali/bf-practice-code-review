/** .........
 * Flattens a nested array into a single array with no nesting.

 *
 * @@param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */


const deepFlat = (array = []) => {
    return array.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(deepFlat(val)) : acc.concat(val);
    }, []);
};
