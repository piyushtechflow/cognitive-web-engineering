const contacts = [
  { name: "Rahul", phone: 9234560001, city: "Delhi" },
  { name: "Aakash", phone: 9234560002, city: "Mumbai" },
  { name: "Ankit", phone: 9234560003, city: "Luchnow" },
  { name: "Prabhat", phone: 9234560004, city: "Indore" },
  { name: "Sudheer", phone: 9234560005, city: "Delhi" },
  { name: "Dhruv", phone: 9234560006, city: "Chennai" },
  { name: "Ritesh", phone: 9234560007, city: "Bengaluru" },
];

for (const contact of contacts) {
  const { name, phone, city } = contact;
  console.log(
    `The name of person is ${name} and phone number is ${phone} and location is ${city}.`,
  );
  console.log(contact);
}

const guysOfDelhi = contacts.filter((contact) => contact.city === "Delhi");
console.log(guysOfDelhi);

function findContact() {
  const contactName = prompt(
    "Enter the name of the person you want to search: ",
  );

  const match = contacts.find(
    (contact) => contact.name.toLowerCase() === contactName.toLowerCase(),
  );

  if (match) {
    console.log(
      `The name of person is ${match.name} and phone number is ${match.phone} and location is ${match.city}.`,
    );
    return match;
  } else {
    alert("No contact found!");
  }
}

findContact();
