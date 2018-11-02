// In main.js, import the ContactList component and the
// ContactForm component.

// import retrieveData from "./contactList"
import article from "./contactList";
import form from "./formBuilder"

const formContainer = document.getElementById("formContainer");
formContainer.appendChild(form);

const infoContainer = document.getElementById("infoContainer")
article.id = "outputContacts"
infoContainer.appendChild(article)