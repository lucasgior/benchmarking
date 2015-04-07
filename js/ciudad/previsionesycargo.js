$(function () {
    $('#previsionesycargo').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: ' '
        },
        subtitle: {
            text: ' '
        },
        xAxis: {
            categories: ['Dic-10', 'Dic-11', 'Dic-12', 'Dic-13', 'Mar-14', 'Jun-14', 'Sep-14', 'Dic-14']
        },
        yAxis: {
            title: {
                text: ' '
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Previsiones',
            data: [147,189,270,372,374,409,429,441]
        },{
            name: 'Cargo',
            data: [68,102,143,213,76,147,192,257]
        }]
    });
});
