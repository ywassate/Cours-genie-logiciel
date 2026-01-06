import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

// Adding some accounts (COMMAND)
console.log("Adding accounts...");
const account1 = accountCommand.addAccount("Doe", "John");
const account2 = accountCommand.addAccount("Smith", "Jane");

// Retrieving and displaying the account list (QUERY)
console.log("\nAccount List:");
console.log(accountQuery.getAccountList());

// Updating an account (COMMAND)
console.log(`\nUpdating account with ID ${account2.id}...`);
accountCommand.saveAccount(account2.id, "Johnson", "Janet");

// Afficher la liste après modification (QUERY)
const updatedList = accountQuery.getAccountList();
console.log("Updated Account List:", updatedList);

// Récupérer un compte spécifique (QUERY)
console.log(`\nRetrieving account with ID ${account1.id}...`);
const retrievedAccount = accountQuery.getAccount(account1.id);
console.log("Retrieved Account:", retrievedAccount);
