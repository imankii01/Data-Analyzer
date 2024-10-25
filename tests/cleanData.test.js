const cleanData = require('../src/transformers/cleanData');

test('cleanData should remove duplicates', () => {
    const inputData = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Alice', age: 30 }
    ];
    const expectedOutput = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 }
    ];
    const result = cleanData(inputData, { removeDuplicates: true });
    expect(result).toEqual(expectedOutput);
});

test('cleanData should fill missing values', () => {
    const inputData = [
        { name: 'Alice', age: null },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: undefined }
    ];
    const expectedOutput = [
        { name: 'Alice', age: 0 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 0 }
    ];
    const result = cleanData(inputData, { fillMissing: 0 });
    expect(result).toEqual(expectedOutput);
});
