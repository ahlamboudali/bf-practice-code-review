/** .........
 *repeated values are not duplicated in the return value,
  and the order of result values are determined by the first array.
 * 
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} An array containing elements that are present in both arr1 and arr2.
 */

export const getCommonValues = (arr1, arr2) => {
    // Filter elements from the first array that are also in the second array
    const commonValues = arr1.filter(value => arr2.includes(value));
    return commonValues;
 };