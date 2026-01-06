import { ACCOUNT_LIST } from "./database.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    return ACCOUNT_LIST.map((account) => {
      const { creationDate, ...accountWithoutCreationDate } = account;
      return accountWithoutCreationDate;
    });
  },
  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find((account) => account.id === id);
    if (account) {
      const { lastName, firstName, ...rest } = account;
      return {
        ...rest,
        name: `${firstName} ${lastName}`,
      };
    }
    return null;
  },
};
