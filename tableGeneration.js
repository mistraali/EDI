//Checks and clears previous data.
function removeTable(id) {
    var table = document.getElementById(id);
    if(table) {
        document.getElementById(id).remove();
    }
}

//Fetching data and creating an array.
async function postData() {
    //Replace fetch() argument if you want to change data generator.
    const response = await fetch("https://my.api.mockaroo.com/edi.json?key=e4624000");
    const dataSet = await response.json();
    
    //Uncomment to send data to console.
    //console.log(dataSet);

    //Array creation
    let table = document.createElement("table");
    table.id = "tableData"
    let columns = Object.keys(dataSet[0])
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    
    columns.forEach((item) => {
        let th = document.createElement("th");
        th.innerText = item;
        tr.appendChild(th);
        });
    thead.appendChild(tr);
    table.append(tr);
    
    dataSet.forEach((item) => {
        let tr = document.createElement("tr");
        let vals = Object.values(item);
    
        vals.forEach((elem) => {
            let td = document.createElement("td");
            td.innerText = elem;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    //Appending table to document.
    data.appendChild(table)
}