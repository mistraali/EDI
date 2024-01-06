

//Creates a bar chart for "Actors schema" grouping a number of actors with their Oscars number
export function chartTwo(dataSet){
   
  const chart = document.getElementById('chart2');

  //Getting numbers from data set.
  var oscarsByAge = {};
  dataSet.forEach((item) => {
      var age = item.Age;
      var numOscars = item.Oscars;
  
      if (oscarsByAge[age]) {
          oscarsByAge[age] += numOscars;
      } else {
          oscarsByAge[age] = numOscars;
      }
  });
  
  // Plotting a bar chart.
  new Chart(chart, {
      type: 'bar', 
      data: {
          labels: Object.keys(oscarsByAge),
          datasets: [{
              label: 'Number of Oscars',
              data: Object.values(oscarsByAge),
              backgroundColor: 'rgba(57, 171, 16, 1)'
          }]
      },
      options: {
          plugins: {
              title: {
                  display: true,
                  text: 'Number of Oscars per Age',
                  padding: 10,
                  font: {
                      size: 30
                  }
              }
          }
      }
  });
}