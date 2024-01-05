import "./tableGeneration.js"
import {createCharts, removeCharts} from "./chartGeneration.js"

//Fetching and processing.
async function postData(){
    //Replace fetch() argument if you want to change data generator.
    const response = await fetch("https://my.api.mockaroo.com/edi.json?key=e4624000");
    const dataSet = await response.json();
    
    //Uncomment to send data to console.
    //console.log(dataSet);

    removeTable("tableData");
    createTable(dataSet);
    removeCharts("chart1","chart2");
    createCharts(dataSet);
}

document.getElementById('downloadButton').addEventListener('click', postData);