const parseCSV = require('./parsers/parseCSV');
const cleanData = require('./transformers/cleanData');
const analyzeData = require('./transformers/analyzeData');
const plotData = require('./visualizers/plotData');

async function processData(filePath, options) {
    const rawData = await parseCSV(filePath);
    const cleanedData = cleanData(rawData, options.cleanOptions);
    const stats = analyzeData(cleanedData, options.analysisField);
    const chart = await plotData(
        cleanedData.map(item => item[options.labelField]),
        cleanedData.map(item => parseFloat(item[options.valueField])),
        options.chartType
    );

    return { stats, chart };
}

module.exports = { processData };
