import { getUniqueValues } from './solution2.js';

describe('getUniqueValues function', () => {
    test('should return unique elements from array1 not present in array2', () => {
        let array1 = [1, 2, 3, 4, 5];
        let array2 = [3, 4, 5, 6, 7];
        let expectedResult = [1, 2];
        let result = getUniqueValues(array1, array2);
        expect(result).toEqual(expectedResult);
    });

    test('should return all elements from array1 if array2 is empty', () => {
        let array1 = [1, 2, 3, 4, 5];
        let array2 = [];
        let expectedResult = [1, 2, 3, 4, 5];
        let result = getUniqueValues(array1, array2);
        expect(result).toEqual(expectedResult);
    });

    test('should return an empty array if array1 and array2 have the same elements', () => {
        let array1 = [1, 2, 3, 4, 5];
        let array2 = [1, 2, 3, 4, 5];
        let expectedResult = [];
        let result = getUniqueValues(array1, array2);
        expect(result).toEqual(expectedResult);
    });
});