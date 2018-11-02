// A Contact component that displays a person's name, phone number, and address.

function profileBuilder(firstname, lastname, phone, address) {
  const section = document.createElement("section");
  section.className = "person";
  section.innerHTML = `Name: ${firstname} ${lastname} <br /> Phone: ${phone} <br /> Address: ${address}`
  return section
}

//exports method to create individual section elements for each person in the contacts database
export default profileBuilder