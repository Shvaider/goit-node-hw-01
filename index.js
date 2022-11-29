const { Command } = require("commander");
const program = new Command();
const { v4: uuidv4 } = require("uuid");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();


async function invokeAction({ action, id, name, email, phone }) {
  const contactsList = await listContacts();
  switch (action) {
    case "list":
      try{
        console.table(contactsList);
      } catch (error) {
        console.log(error.message);
      }
      break;

    case "get":
      try {
        const contactById = await getContactById(id);
        console.table(contactById);
      } catch (error) {
        console.log(error.message);
      }   
      break;

    case "add":
      try {
        const addedContact = await await addContact(name, email, phone);
        console.table(addedContact);
      } catch (error) {
        console.log(error.message);
      }
      break;

    case "remove":
      try {
        const removedContacts = await await removeContact(id);
        console.table(removedContacts);
      } catch  (error) {
        console.log(error.message);
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
