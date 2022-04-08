import{renderTemplate, setActive, showPage} from "./utils.js"
import{showHobbies, searchHobbyHandler} from "./js-pages/createHobby.js"
import{getAllPeople} from "./js-pages/seePeoplePage.js"
import{addPersonElement} from "./js-pages/addPerson.js"
import{searchPeopleFunction} from "./js-pages/peoplePage.js"
import{setDawa} from "./Dawa/script.js"

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
      //Here you can execute JavaScript for the selected page
      case "page-home": {
        break
      }
      case "page-people": {
        getAllPeople()
        setDawa()
        addPersonElement()
        searchPeopleFunction()

       break
      }
      case "page-hobby": {
        showHobbies()
        searchHobbyHandler()
        break
      }
    }
  }

document.getElementById("menu").onclick = renderMenuItems;
showPage("page-home") //Set the default page to render