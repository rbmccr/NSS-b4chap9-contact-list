// A ContactCollection component that loads existing contacts
// from storage, and saves new ones. Each new contact should
// have an auto-generated identifier.

class accessDatabase {

  //accepts form inputs and posts person object to database
  saveInfoToDatabase(first_name, last_name, phone_num, address_info) {

    const person = {
      firstname: first_name,
      lastname: last_name,
      phone: phone_num,
      address: address_info
    }

    return fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    })
    .then(jsonData => jsonData.json())
  }

  //accesses database and returns an array of objects
  loadDatabaseInfo() {
    return fetch("http://localhost:8088/contacts").then(response => response.json())
  }

}

const DatabaseInteraction = (first_name, last_name, phone_num, address_info) => new accessDatabase(first_name, last_name, phone_num, address_info);

//exports both GET and POST methods
export default DatabaseInteraction;