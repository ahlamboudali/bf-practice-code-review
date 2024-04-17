

import { getCommonValues } from './solution3.js';

describe('getCommonValues function', () => {
    test('should return an array containing common elements from both arrays', () => {
        // Test case 1
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [3, 4, 5, 6, 7];
        const expectedResult1 = [3, 4, 5];
        const result1 = getCommonValues(array1, array2);
        expect(result1).toEqual(expectedResult1);

        // Test case 2
        const array3 = ['apple', 'banana', 'orange'];
        const array4 = ['banana', 'kiwi', 'grape'];
        const expectedResult2 = ['banana'];
        const result2 = getCommonValues(array3, array4);
        expect(result2).toEqual(expectedResult2);
    });

    test('should handle arrays with no common elements', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const expectedResult = [];
        const result = getCommonValues(array1, array2);
        expect(result).toEqual(expectedResult);
    });

    test('should handle empty arrays', () => {
        const array1 = [];
        const array2 = [];
        const expectedResult = [];
        const result = getCommonValues(array1, array2);
        expect(result).toEqual(expectedResult);
    });
}); 