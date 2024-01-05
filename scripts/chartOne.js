

//Creates a bar chart for "Actors schema" grouping a number of actors with their Oscars number
export function chartOne(dataSet){
   
  const chart = document.getElementById('chart1');

  //Getting numbers from data set.
  var oscars = {};
  dataSet.forEach((item) => {
    var numOscars = item.Oscars;
    if (oscars[numOscars]) {
      oscars[numOscars]++;
    }
    else {
      oscars[numOscars] = 1;
    }
  }); 

  //Plotting a chart.
  new Chart(chart, {
    type: 'doughnut',
    data: {
      labels: Object.keys(oscars),
      datasets: [{
        label: 'Number of Academy Awards per actor',
        data: Object.values(oscars),
        hoverOffset: 60
      }]
    },
  });

}