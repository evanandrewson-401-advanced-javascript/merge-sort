const mergeSort = require('../merge-sort');

describe('Merge sort', () => {
  it('sorts an array', () => {
    const array = [5, 6, 1, 2, 3, 4]
    expect(mergeSort(array)).toEqual([1, 2, 3, 4, 5, 6]);
  });
})