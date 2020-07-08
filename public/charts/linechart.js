//includig the core packages for charts
google.charts.load("current", {packages:["corechart"]});
//2.For Line charts
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'No of Homocides',],
      ['2015',  20],
      ['2016',  15],
      ['2017',  30],
      ['2018',  18]
    ]);
  
    var options = {
      title: 'Intentional homicides per 100,000 ',
      titleTextStyle:{fontSize:20},
      curveType: 'function',
      legend: { position: 'bottom' }
    };
  
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  
    chart.draw(data, options);
  }
  
  
  