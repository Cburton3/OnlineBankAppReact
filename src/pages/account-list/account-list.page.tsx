// import { appRoutes } from "@/core/router";
import { AppLayout } from "@/layouts";
import React from "react";
// import { generatePath, Link } from "react-router-dom";
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
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]); //accountList holds initial data (current state). put 'mockAccountListData' inside () also ttake out useeffect for mock and get rid of setAcctounList

  React.useEffect(() => {
    //we need to use use effect here as we are acccessing shit outside of the component scope
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))//the maps makes it readable to our fx and the set accountlist upates the accoutn list with the results
    );
  }, []); //teh empty [] so that exe only once

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>My Accounts</h1>
          <button>
            <Link to={appRoutes.createAccount}>Add New Account</Link></button>
        </div>
        <AccountListTableComponent
          accountList={accountList} //first accountList comes from table component where there is an interface with props
        ></AccountListTableComponent>
        {/* accountList here is the CURRENT state var  declared in parent and is being passe as a prop to the table component
        The parent component (AccountListPage) is passing the accountList state as a prop to the AccountListTableComponent child component. */}
      </div>
    </AppLayout>
  );
};

{
  /*

        <Link to={generatePath(appRoutes.transactions, { id: 1 })}>
          Transactions of account 1
        </Link>
        {/* <Link to={appRoutes.transactions }>Transactions of account 1</Link> //here we have to use generate path inorder to concat the id into the url of the directory }
        <br />
        <Link to={appRoutes.transfer}>Transfer</Link>
        <br />
        <Link to={generatePath(appRoutes.transferFromAcccount, { id: 1 })}>
          Transfers from account 1
        </Link>
      
*/
}
