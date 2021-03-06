// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.

import profileBuilder from "./contact";
import DatabaseInteraction from "./contactCollection";

function generateList() {

  let article = document.createElement("article");
  article.id = "people"

  DatabaseInteraction().loadDatabaseInfo().then(data =>
    data.forEach(obj => {
    let fn = obj.firstname;
    let ln = obj.lastname;
    let ph = obj.phone;
    let ad = obj.address;
    article.appendChild(profileBuilder(fn, ln, ph, ad));
    }));

  return article;
}

export default generateList;
