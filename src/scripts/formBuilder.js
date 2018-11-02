class formElement {

  makeFieldset(lbl_txt, inpt_type, inpt_id) {
    const fset = document.createElement("fieldset");
    const lbl = document.createElement("label");
    const inpt = document.createElement("input");

    lbl.textContent = lbl_txt;
    lbl.setAttribute("for", inpt_id);
    inpt.setAttribute("type", inpt_type);
    inpt.setAttribute("id", inpt_id);
    fset.appendChild(lbl);
    fset.appendChild(inpt);
    return fset;
  }

  makeButton() {
    const btn = document.createElement("button");
    btn.id = "savePerson";
    btn.textContent = "Save to Database";
    return btn;
  }

}

const createForm = () => new formElement();

export default createForm;