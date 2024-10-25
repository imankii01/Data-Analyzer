const _ = require('lodash');

function cleanData(data, options = {}) {
    let cleanedData = data;

    if (options.removeDuplicates) {
        cleanedData = _.uniqWith(cleanedData, _.isEqual);
    }
    
    if (options.fillMissing !== undefined) {
        cleanedData = cleanedData.map(item =>
            _.mapValues(item, val => (val === null || val === undefined) ? options.fillMissing : val)
        );
    }

    return cleanedData;
}

module.exports = cleanData;
