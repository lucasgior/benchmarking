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
            name: 'Galicia',
            data: [20.1, 28.6, 39.9, 50.9, 60.9],
            color: '#FFB710'
        }, {
            name: 'BBVA',
            data: [16.6, 24.1, 29.8, 38.5, 45.0],
            color: '#2E1FCF'
        }, {
            name: 'Santander',
            data: [21.1, 27.7, 35.1, 48.0, 58.8],
            color: '#E11F26'
        }, {
            name: 'Macro',
            data: [15.9, 24.1, 30.4, 37.7, 42.2],
            color: '#1FA1E1'
        }, {
            name: 'ICBC',
            data: [7.7, 10.2, 13.1, 18.4, 22.6],
            color: '#B06120'
        },{
            name: 'HSBC',
            data: [12.1, 17.0, 21.0, 26.1, 31.0],
            color: '#9C9894'
        }, {
            name: 'Credicoop',
            data: [8.9, 13.1, 15.6, 20.4, 23.3],
            color: '#BF7AB3'
        }, {
            name: 'Patagonia',
            data: [7.9, 12.2, 18.0, 22.2, 26.3],
            color: '#1DA033'
        }, {
            name: 'Citibank',
            data: [8.0, 11.0, 10.4, 15.0, 20.3],
            color: '#8BD2DA'
        }, {
            name: 'Itaú',
            data: [3.7, 5.7, 7.8, 10.9, 12.0],
            color: '#97E29F'
        }]
    });
});
