import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { appRoutes } from "@/core/router";
import { Link } from "react-router-dom";

// const mockAccountListData: AccountVm[] = [
//   {
//     id: "1",
//     iban: "ES91 2100 0418 4502 0005 1332",
//     name: "Personal",
//     balance: "1490",
//     lastTransaction: new Date("2019-12-09T21:30:00")
//   },
//   {
//     id: "2",
//     iban: "ES79 2100 0813 6101 2345 6789",
//     name: "Shared",
//     balance: "2480",
//     lastTransaction: new Date("2019-11-21T14:07:38")
//   },
//   {
//     id: "3",
//     iban: "ES66 2100 0418 4012 3456 7891",
//     name: "Savings",
//     balance: "8500",
//     lastTransaction: new Date("2019-11-15T08:29:04")
//   }
// ];

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>My Accounts</h1>
          <button>
            <Link to={appRoutes.createAccount}>Add New Account</Link>
          </button>
        </div>
        <AccountListTableComponent
          accountList={accountList}
        ></AccountListTableComponent>
      </div>
    </AppLayout>
  );
};
