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
            data: [286,377,430,556,559,574,594,645]
        },{
            name: 'Cargo',
            data: [202,100,98,184,224,282,91,207]
        }]
    });
});
