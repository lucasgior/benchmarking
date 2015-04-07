
$(function () {
    $('#financ2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
           categories: ['Dic-10', 'Dic-11', 'Dic-12', 'Dic-13', 'Mar-14', 'Jun-14', 'Sep-14', 'Dic-14']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total de Financiaciones'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'center',
            x: 0,
            verticalAlign: 'down',
            y: -10,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Comercial',
            data: [4857,6712,5926,8887,8923,11343,11713,12590]
        }, {
            name: 'Automática',
            data: [2603,3548,4036,5849,5930,6102,6363,7354]
        }]
    });
});
