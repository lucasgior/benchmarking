$(function () {
    $('#financ1').highcharts({
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
            name: 'Sect. Privado',
            data: [20065,28238,39499,50270,50763,52461,55229,60734]
        }, {
            name: 'Sect. Público',
            data: [3,1,0,0,0,0,0,0]
        }, {
            name: 'Sect. Financiero',
            data: [80,382,411,632,693,723,594,192]
        }]
    });
});
