import { accountService } from "./accountService.mjs";

accountService.addAccount("Doe", "John");
accountService.addAccount("Smith", "Jane"); 
accountService.addAccount("Brown", "Charlie");

console.log(accountService.getAccountList());

