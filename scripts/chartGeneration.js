import { chartOne } from "./chartOne.js";

//Checks and clears previous data.
export function removeCharts(id1,id2){
    var chart1 = document.getElementById(id1);
    if(chart1) {
        document.getElementById(id1).remove();
    }

    var chart2 = document.getElementById(id2);
    if(chart2) {
        document.getElementById(id2).remove();
    }
}

//Groups creation of two charts.
export function createCharts(dataSet) {
    const chart = document.getElementById("charts");
    
    let chart1 = document.createElement("canvas");
    chart1.id = "chart1";
    chart.appendChild(chart1);
    chartOne(dataSet);


    let chart2 = document.createElement("canvas");
    chart2.id = "chart2";
    chart.appendChild(chart2);

}