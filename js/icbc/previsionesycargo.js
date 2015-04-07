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
            data: [221,224,337,389,431,486,543,501]
        },{
            name: 'Cargo',
            data: [200,211,305,444,153,267,364,463]
        }]
    });
});
