const parseCSV = require('../src/parsers/parseCSV');
const path = require('path');

test('parseCSV should parse CSV file correctly', async () => {
    const data = await parseCSV(path.join(__dirname, 'sample.csv'));
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBeGreaterThan(0);
});
