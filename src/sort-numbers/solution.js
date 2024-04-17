/**
 * Sorts an array of numbers from smallest to largest.
 *
 * @param {number[]} [arrayOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new sorted array.
 */
const sortNumbers = (arrayOfNumbers = []) => {
    // Make a copy of the input array
    const newArray = [...arrayOfNumbers];
    
    // Sort the copied array
    newArray.sort((a, b) => a - b);
    
    // Return the sorted array
    return newArray;
};
