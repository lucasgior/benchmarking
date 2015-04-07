
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
            data: [2943,4416,6074,7942,8612,8843,8433,8334]
        }, {
            name: 'Automática',
            data: [544,884,1360,2374,2650,2842,2971,3366]
        }]
    });
});
