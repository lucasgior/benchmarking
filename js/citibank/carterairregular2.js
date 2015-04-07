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
            data: [141,161,165,220,243,280,294,325]
        },{
            name: 'Cargo',
            data: [54,55,60,107,33,87,117,165]
        }]
    });
});
