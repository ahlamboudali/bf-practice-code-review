/** .........
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} An array containing elements that are in
  the first array but not in the second array.
 */


 export const getUniqueValues = (arr1, arr2) => {
   // Create a set from the second array for faster lookup
   let set = new Set(arr2);
   // Filter elements from the first array that are not in the set
   let uniqueValues = arr1.filter(value => !set.has(value));
   return uniqueValues;
}
