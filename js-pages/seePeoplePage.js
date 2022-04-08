import {LOCAL_SERVER_URL} from "../settings.js"
const URL = LOCAL_SERVER_URL+"/person/people"


let allPeople = []

export function getAllPeople(){
  if(allPeople.length > 0){
    makeRows(allPeople)
    return
  } 
  fetch(URL)
  .then(res=>res.json())
  .then(people=>{
    
    makeRows(people)
    allPeople = people
    console.log(people)
  })
  .catch(e=>console.error(e))
}

function makeRows(rows){
  const trows = rows.map(people=> `
  <tr class="rows-with-people">
  <td><button id="btn-edit-person" type="button" class="editButton" >Edit</button><td>
  <td> ${people.id} </td>
  <td> ${people.firstName} </td>
  <td> ${people.lastName} </td>
  <td> ${people.email} </td>
  <td> ${people.phone} </td>
  <td> ${people.street} </td>
  <td> ${people.zipcode} </td>
  <td> ${people.city} </td>
  <td><button id="btn-delete-person" type="button" class="deleteButton">Delete</button><td>
  </tr>
  `).join("\n")
  document.getElementById("people-rows").innerHTML = trows
}

