$(function () {

    $('#cobertura').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ' '
        },

        pane: {
            startAngle: -120,
            endAngle: 120,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#2117A9',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 80,
            max: 300,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 5,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 10,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 3,
                rotation: 'auto'
            },
            title: {
                text: 'Cobertura'
            },
            plotBands: [{
                from: 80,
                to: 100,
                color: '#DF5353' // red
            }, {
                from: 100,
                to: 105,
                color: '#DDDF0D' // yellow
            }, {
                from: 105,
                to: 300,
                color: '#55BF3B' // green
            }]
        },

        series: [{
            name: 'Cobertura',
            data: [247.0],
            tooltip: {
                valueSuffix: ' %'
            }
        }]

    },
        // Add some life
        function (chart) {
            if (!chart.renderer.forExport) {
                setInterval(function () {
                    var point = chart.series[0].points[0],
                        newVal,
                        inc = Math.round((Math.random() - 0.5) * 10);




                }, 3000);
            }
        });
});
