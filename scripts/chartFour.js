//Generates chart of Oscars awards grouping by nationality
export function chartFour(dataSet){
   
  const chart = document.getElementById('chart4');

  //Getting numbers of oscars from table
  var OscarsByNationality = {};
  dataSet.forEach((item) => {
    var nationality = item.Nationality;
    var numOscars = item.Oscars;

    if (OscarsByNationality[nationality]) {
      OscarsByNationality[nationality] += numOscars;
    }
    else {
      OscarsByNationality[nationality] = numOscars;
    }
  }); 

  //Generating chart.
  new Chart(chart, {
    type: 'doughnut',
    data: {
      labels: Object.keys(OscarsByNationality),
      datasets: [{
        label: 'Number of Oscars',
        data: Object.values(OscarsByNationality),
        hoverOffset: 60
      }]
    },
    options: {
      plugins: {
          legend: false,
          title: {
              display: true,
              text: 'Number of Oscars by Nationality',
              padding: 10,
              font: {
                size: 30,
              }
          }
          
      }
  }
  });

}