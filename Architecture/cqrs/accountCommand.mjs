import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { ACCOUNT_SUMMARY_LIST } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName);
    accountCommandDAO.insertAccount(account);

    // Ajouter dans la BDD de query sans creationDate
    const { creationDate, ...accountSummary } = account;
    ACCOUNT_SUMMARY_LIST.push(accountSummary);
    console.log("Query BDD:", ACCOUNT_SUMMARY_LIST);

    // Ajouter dans le cache avec la propriété name
    accountCache[account.id] = {
      id: account.id,
      name: `${account.firstName} ${account.lastName}`,
    };
    console.log("Cache:", accountCache);

    return account;
  },
  saveAccount(id, lastName, firstName) {
    const account = accountCommandDAO.retrieveAccount(id);
    if (account) {
      account.lastName = lastName;
      account.firstName = firstName;
      accountCommandDAO.updateAccount(account);

      // Mettre à jour dans la BDD de query sans creationDate
      const index = ACCOUNT_SUMMARY_LIST.findIndex((acc) => acc.id === id);
      if (index !== -1) {
        const { creationDate, ...accountSummary } = account;
        ACCOUNT_SUMMARY_LIST[index] = accountSummary;
      }
      console.log("Query BDD après modification:", ACCOUNT_SUMMARY_LIST);

      // Mettre à jour dans le cache avec la propriété name
      accountCache[id] = {
        id: account.id,
        name: `${account.firstName} ${account.lastName}`,
      };
      console.log("Cache après modification:", accountCache);
    }
  },
};
