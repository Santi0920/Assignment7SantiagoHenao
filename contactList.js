const contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
];


function displayContactList() {
    contactList.forEach((contact, index) => {
        console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    });
}

function addNewContact() {
    const newContact = {
        name: "Maisie Haley",
        phone: "0913 531 3030",
        email: "risus.quisque@urna.ca"
    };
    contactList.push(newContact);
    alert(`The new contact added was: ${newContact.name} with email ${newContact.email} and phone ${newContact.phone}`)
    console.log("-- Updated Contact List --");
    const button = document.getElementById("addButton");
    button.disabled = true;
    button.style.backgroundColor = "gray";
    displayContactList();
}

function displayFirstAndLastContacts() {
    if (contactList.length > 0) {
        console.log("First Contact:", contactList[0]);
        console.log("Last Contact:", contactList[contactList.length - 1]);
    } else {
        console.log("The contact list is empty.");
    }
}



console.log("-- First Contact List --");
displayContactList()