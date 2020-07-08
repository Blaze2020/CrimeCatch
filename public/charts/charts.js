//includig the core packages for charts
google.charts.load("current", {packages:["corechart"]});
//1.For pie chart
google.charts.setOnLoadCallback(drawChart);







//1.For pie chart
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Types of Crime', 'Percentage'],
          ['Aggrevated Assult',11],
          ['Rape',3],
          ['Murder',1],
          ['Robbery/Brgluary', 5],
          ['Larency Theft',7]
        ]);

        var options = {
          title: 'Types Of Crime Committed',
          titleTextStyle:{fontSize:20},
          is3D: true,
          chartArea:{left:100,top:100}
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }


//linecharts
