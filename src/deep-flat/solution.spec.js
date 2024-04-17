import { solutionName } from './solution.js';

describe('deepFlat', () => {
    it('should flatten a simple nested array', () => {
        const nestedArray = [1, [2, [3, 4], 5], 6];
        const flattenedArray = deepFlat(nestedArray);
        expect(flattenedArray).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should flatten a deeply nested array', () => {
        const nestedArray = [1, [2, [3, [4, [5]]]]];
        const flattenedArray = deepFlat(nestedArray);
        expect(flattenedArray).toEqual([1, 2, 3, 4, 5]);
    });

    it('should flatten an empty array', () => {
        const nestedArray = [];
        const flattenedArray = deepFlat(nestedArray);
        expect(flattenedArray).toEqual([]);
    });

    it('should return the same array if it is already flat', () => {
        const nestedArray = [1, 2, 3, 4, 5];
        const flattenedArray = deepFlat(nestedArray);
        expect(flattenedArray).toEqual([1, 2, 3, 4, 5]);
    });
});