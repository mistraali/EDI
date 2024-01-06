//Checks and clears previous data.
export function removeTable(id){
    var table = document.getElementById(id);
    if(table) {
        document.getElementById(id).remove();
    }
}

//Creating Array
export function createTable(dataSet){
    let table = document.createElement("table");
    table.id = "tableData"
    let columns = Object.keys(dataSet[0])
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    
    columns.forEach((item) => {
        let th = document.createElement("th");
        th.innerText = item.replace('_',' ');
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