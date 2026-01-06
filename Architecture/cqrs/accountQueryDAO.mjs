import { ACCOUNT_SUMMARY_LIST } from "./queryDatabase.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    return ACCOUNT_SUMMARY_LIST;
  },
  retrieveAccount(id) {
    const account = ACCOUNT_SUMMARY_LIST.find((account) => account.id === id);
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
