// A ContactForm component that, when filled out and a submit button
// is pressed, adds a new contact to storage. It should import the
// ContactCollection component.

//import the form to get access to element ID's
import DatabaseInteraction from "./contactCollection";
import createForm from "./formBuilder"

//access the form class methods and create a new form
const form = document.createElement("form");

form.appendChild(createForm().makeFieldset("First name", "text", "firstName"));
form.appendChild(createForm().makeFieldset("Last name", "text", "lastName"));
form.appendChild(createForm().makeFieldset("Phone number", "phone", "phone"));
form.appendChild(createForm().makeFieldset("Address", "text", "address"));
form.appendChild(createForm().makeButton());

//add event listener to button
form.childNodes[4].addEventListener("click", (e) => {
  e.preventDefault();
  const first_name = document.getElementById("firstName");
  console.log(first_name.value)
  const first_name = document.getElementById("lastName");
  const first_name = document.getElementById("phone");
  const first_name = document.getElementById("address");
})

export default form