import { chartOne } from "./chartOne.js";
import { chartTwo } from "./chartTwo.js";
import { chartThree } from "./chartThree.js";

//Checks and clears previous data.
export function removeCharts(id1,id2,id3){
    var chart1 = document.getElementById(id1);
    if(chart1) {
        document.getElementById(id1).remove();
    }

    var chart2 = document.getElementById(id2);
    if(chart2) {
        document.getElementById(id2).remove();
    }

    var chart3 = document.getElementById(id3);
    if(chart3) {
        document.getElementById(id3).remove();
    }
}

//Groups creation of two charts.
export function createCharts(dataSet) {
    const chart = document.getElementById("charts");
    
    let chart1 = document.createElement("canvas");
    chart1.id = "chart1";
    chart.appendChild(chart1);
    chartOne(dataSet);
    chart1.style.display = "none";


    let chart2 = document.createElement("canvas");
    chart2.id = "chart2";
    chart.appendChild(chart2);
    chartTwo(dataSet);
    chart2.style.display = "none";

    let chart3 = document.createElement("canvas");
    chart3.id = "chart3";
    chart.appendChild(chart3);
    chartThree(dataSet);
    chart3.style.display = "none";
}