import { accountService } from "./accountService.mjs";

// Adding some accounts
console.log("Adding accounts...");
const account1 = accountService.addAccount("Doe", "John");
const account2 = accountService.addAccount("Smith", "Jane");
accountService.addAccount("Brown", "Charlie");
// Retrieving and displaying the account list
console.log("Account List:");
console.log(accountService.getAccountList());

// Updating an account
console.log(`Updating account with ID ${account2.id}...`);
accountService.saveAccount(account2.id, "Johnson", "Janet");

// Afficher la liste après modification
const updatedList = accountService.getAccountList();
console.log("Updated Account List:", updatedList);
