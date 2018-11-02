// In main.js, import the ContactList component and the
// ContactForm component.

// import retrieveData from "./contactList"
import generateList from "./contactList";
import form from "./contactForm"

const formContainer = document.getElementById("formContainer");
formContainer.appendChild(form);

const infoContainer = document.getElementById("infoContainer")
infoContainer.appendChild(generateList());