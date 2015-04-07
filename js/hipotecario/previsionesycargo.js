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
            data: [170,158,196,248,264,294,316,343]
        },{
            name: 'Cargo',
            data: [83,59,102,159,57,118,180,254]
        }]
    });
});
