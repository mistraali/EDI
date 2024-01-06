function showChart(num) {
    document.getElementById("chart1").style.display = "none";
    document.getElementById("chart2").style.display = "none";
    document.getElementById("chart".concat(num)).style.display = "block";
}