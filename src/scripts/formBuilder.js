const form = document.createElement("form");

function makeFieldset(lbl_txt, inpt_type, inpt_id) {
  const fset = document.createElement("fieldset");
  const lbl = document.createElement("label");
  const inpt = document.createElement("input");

  lbl.textContent = lbl_txt;
  lbl.setAttribute("for", inpt_id)
  inpt.setAttribute("type", inpt_type);
  inpt.setAttribute("id", inpt_id);
  fset.appendChild(lbl);
  fset.appendChild(inpt);
  form.appendChild(fset);
}

//firstname
makeFieldset("First name", "text", "firstName");

//lastname
makeFieldset("Last name", "text", "lastName");

//phone
makeFieldset("Phone number", "phone", "phone");

//address
makeFieldset("Address", "text", "address");

//button
const btn = document.createElement("button");
btn.id = "savePerson";
btn.textContent = "Save to Database"
form.appendChild(btn);

//build form
export default form