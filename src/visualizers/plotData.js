const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

async function plotData(labels, values, type = 'bar') {
    const width = 800;
    const height = 600;
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

    const configuration = {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: 'Data Analysis',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    };

    const image = await chartJSNodeCanvas.renderToBuffer(configuration);
    return image;
}

module.exports = plotData;
