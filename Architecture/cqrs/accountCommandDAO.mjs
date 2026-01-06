import { ACCOUNT_LIST } from "./database.mjs";

export const accountCommandDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("BDD:", ACCOUNT_LIST);
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex((acc) => acc.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = account;
    }
    console.log("BDD après modification:", ACCOUNT_LIST);
  },
  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find((acc) => acc.id === id);
    return new Account(
      account.id,
      account.lastName,
      account.firstName,
      account.creationDate
    );
  },
};
