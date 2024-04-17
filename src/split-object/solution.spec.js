// Import the splitObj function
const splitObj = obj('./splitObj');


describe('splitObj', () => {
    it('should split an object into separate objects for each key/value pair', () => {
        const inputObject = { name: 'john', age: 30, city: 'brussels' };
        // Expected output (array of objects)
        const expectedOutput = [
            { name: 'john' },
            { age: 30 },
            { city: 'brussels' }
        ];

        const result = splitObj(inputObject);
        expect(result).toEqual(expectedOutput);
    });

    // Test case for an empty object
    it('should return an empty array if the input object is empty', () => {
        // Input object (empty)
        const inputObject = {};
    
        const expectedOutput = [];
        const result = splitObj(inputObject);
        expect(result).toEqual(expectedOutput);
    });
});