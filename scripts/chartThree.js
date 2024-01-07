// Creates a bar chart for "Actors schema" grouping a number of actors with their Awards by Gender
export function chartThree(dataSet) {
    const chart = document.getElementById('chart3');

    // Getting numbers from the data set.
    var awardsByGender = {};
    dataSet.forEach((item) => {
        var gender = item.Gender && item.Gender.toLowerCase(); // Convert to lowercase for case-insensitive comparison
        var numAwards = item.All_Awards || 0; // Assuming 'All_Awards' contains the total number of awards

        if (gender !== undefined) {
            if (awardsByGender[gender]) {
                awardsByGender[gender] += numAwards;
            } else {
                awardsByGender[gender] = numAwards;
            }
        }
    });

    // Plotting a bar chart.
    new Chart(chart, {
        type: 'bar',
        data: {
            labels: Object.keys(awardsByGender),
            datasets: [{
                label: 'Number of Awards',
                data: Object.values(awardsByGender),
                backgroundColor: 'rgba(16, 122, 171, 1)'
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Number of Awards by Gender',
                    padding: 10,
                    font: {
                        size: 30
                    }
                }
            }
        }
    });
}
