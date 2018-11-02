// A ContactForm component that, when filled out and a submit button
// is pressed, adds a new contact to storage. It should import the
// ContactCollection component.

//import the form to get access to element ID's
import DatabaseInteraction from "./contactCollection";
import createForm from "./formBuilder";
import profileBuilder from "./contact";

//access the form class methods and create a new form
const form = document.createElement("form");

form.appendChild(createForm().makeFieldset("First name", "text", "firstName"));
form.appendChild(createForm().makeFieldset("Last name", "text", "lastName"));
form.appendChild(createForm().makeFieldset("Phone number", "phone", "phone"));
form.appendChild(createForm().makeFieldset("Address", "text", "address"));
form.appendChild(createForm().makeButton("savePerson", "Save to database"));

//add event listener to button
form.childNodes[4].addEventListener("click", (e) => {
  //don't submit form data
  e.preventDefault();
  //identify input elements in form
  const fname = document.getElementById("firstName");
  const lname = document.getElementById("lastName");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");

  //post input element values to database and then append entry as a new
  //section element that is in the article element (contained in #infoContainer)
  DatabaseInteraction().saveInfoToDatabase(fname.value, lname.value, phone.value, address.value).then(objData => {
    const fname = objData.firstname;
    const lname = objData.lastname;
    const phone = objData.phone;
    const address = objData.address;

    const article = document.getElementById("people")

    article.appendChild(profileBuilder(fname, lname, phone, address));
  });

  //empty inputs in form
  fname.value = "";
  lname.value = "";
  phone.value = "";
  address.value = "";
});

//send completed form with event listener to main.js
export default form