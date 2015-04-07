$(function () {
    $('#carteratotal').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Millones de pesos'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ''
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        
        series: [{
            name: 'Hipotecario',
            data: [5.8, 7.3, 9.8, 13.1, 16.9],
            color: '#F1BD44'
        }, {
            name: 'Ciudad',
            data: [10.6, 14.9, 19.9, 25.8, 29.3],
            color: '#2D1DDD'
        }, {
            name: 'Provincia',
            data: [13.3, 22.7, 30.8, 48.8, 65.8],
            color: '#378833'
        }, {
            name: 'Naciòn',
            data: [59.9, 85.1, 111.8, 143.6, 166.5],
            color: '#797775'
        }]
    });
});
