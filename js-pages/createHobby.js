
/*const getData = () =>{
    fetch('http://localhost:8080/hobbies').then(r => res.json()).then(hobbies => {
        createHobbyTable()

        for (const hobbies of hobbies) {
            let hobbyIndex = hobbies.indexOf(hobby) + 1
            appendHobbies(hobbies, hobbyIndex)
        }
    }
*/


export function showHobbies(){
    //let table = document.querySelector();
    let table = document.getElementById("hobby-table")
    generateTableHeader(table);
    generateTableRows(table);
}

function generateTableHeader(table) {
    let thead = table.createTHead();
    let row = table.insertRow();

    let th = document.createElement("th");
    let text = document.createTextNode("Hobby");
    th.appendChild(text);
    row.appendChild(th);
}

function insertHobbyRow(table, hobby) {
    let row = table.insertRow();
    let cell = row.insertCell();
    let text = document.createTextNode(hobby);
    cell.appendChild(text);
}

function generateTableRows(table, data) {
    //for (let element of data) {
        insertHobbyRow(table, "Painting")
        insertHobbyRow(table,"Photography")
        insertHobbyRow(table,"Running")
        insertHobbyRow(table,"Eating")
        insertHobbyRow(table,"Ice skating")
        insertHobbyRow(table,"Sleeping")

    //}
}
export function searchHobbyHandler(){
  //document.getElementById("btn-search-hobby").onclick = function () {searchHobby()
  //}
    document.getElementById("hobby-search").oninput = function () {searchHobby()}
}

export function searchHobby(){
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("hobby-search");
        filter = input.value.toUpperCase();
        table = document.getElementById("hobby-table");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                //Her sker sammenligningen
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
}
