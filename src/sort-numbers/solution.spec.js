// Import the sortNumbers function
const sortNumbers = sortNumbers('./sortNumbers');

// Describe block for the sortNumbers function
describe('sortNumbers', () => {
    // Test case for sorting an array of numbers
    it('should sort an array of numbers from smallest to largest', () => {
        // Input array
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6];
        
        // Expected output (sorted array)
        const expectedOutput = [1, 1, 2, 3, 4, 5, 6, 9];

        // Call the sortNumbers function
        const sortedArray = sortNumbers(inputArray);
        
        // Check if the output matches the expected output
        expect(sortedArray).toEqual(expectedOutput);
    });

    // Test case for an empty array
    it('should return an empty array if the input array is empty', () => {
        // Input array (empty)
        const inputArray = [];
        
        // Expected output (empty array)
        const expectedOutput = [];

        // Call the sortNumbers function
        const sortedArray = sortNumbers(inputArray);
        
        // Check if the output matches the expected output
        expect(sortedArray).toEqual(expectedOutput);
    });
});