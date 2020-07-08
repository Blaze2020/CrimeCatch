google.charts.load('current', {
    packages: ['corechart', 'bar']
  });
  google.charts.setOnLoadCallback(drawBasic);
  
  function drawBasic() {
  
    var data = google.visualization.arrayToDataTable([
      ['Type of Crime', ' Upto Year 2018', ],
      ['Sexual Assault', 10],
      ['Arson', 5.6],
      ['Attempted Murder',4.1],
      ['Rape', 5],
      ['Murder', 3.5]
    ]);
  
    var options = {
      title: 'Crimes with biggest increases',
      titleTextStyle:{fontSize:20},
      hAxis: {
        title: '% increase',
        minValue: 0
      },
      vAxis: {
        title: 'Type of Crime'
      }
    };
  
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  
    chart.draw(data, options);
  }
  