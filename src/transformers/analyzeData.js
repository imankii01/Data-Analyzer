const ss = require('simple-statistics');

function analyzeData(data, field) {
    const values = data.map(item => parseFloat(item[field])).filter(value => !isNaN(value));
    return {
        mean: ss.mean(values),
        median: ss.median(values),
        standardDeviation: ss.standardDeviation(values),
    };
}

module.exports = analyzeData;
