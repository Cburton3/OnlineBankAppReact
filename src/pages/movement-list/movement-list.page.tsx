import { AppLayout } from "@/layouts";
import React from "react";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components/movement-list-table.components";
import { AccountVm } from "../account-list/account-list.vm";
import { getMovements } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";
import { getAccountList } from "../account-list/api";
import { mapAccountListFromApiToVm } from "../account-list/account-list.mapper";

// const mockMovementListData: MovementVm[] = [
//   {
//     id: "1",
//     description: "Nómina noviembre",
//     amount: 900,
//     balance: 1490,
//     transaction: "2019-12-09T21:30:00",
//     realTransaction: "2019-12-09T21:30:00",
//     accountId: "1"
//   },
//   {
//     id: "2",
//     description: "Alquiler noviembre",
//     amount: -400,
//     balance: 590,
//     transaction: "2019-12-07T11:30:00",
//     realTransaction: "2019-12-08T20:00:10",
//     accountId: "1"
//   },
//   {
//     id: "3",
//     description: "Gastos móvil",
//     amount: -24,
//     balance: 990,
//     transaction: "2019-12-01T07:01:00",
//     realTransaction: "2019-12-02T12:00:10",
//     accountId: "1"
//   }
// ];

export const MovementListPage: React.FC = () => {
  // const [accountId] = React.useState<AccountVm[]>([]);
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const { id } = useParams<{ id: string }>(); // Extract accountId from URL

  React.useEffect(() => {
    if (id) {
      getMovements(id)
        .then((result) => setMovementList(mapMovementListFromApiToVm(result)))
        .catch((error) => console.log("Error fetching movements:", error));
    }
  }, [id]); //can put accountId here to Re-run effect when accountId changes

  if (!id) {
    return <div className={classes.errorMessage}>Invalid Account ID</div>;
  }

  React.useEffect(() => {
    //we need to use use effect here as we are acccessing shit outside of the component scope
    getAccountList()
      .then((result) => setAccountList(mapAccountListFromApiToVm(result)))
      .catch((error) => console.log("Error fetching account list:", error));
  }, []);

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  const selectedAccount = accountList.find((account) => account.id === id);
  //selectedAccount holds the account object that matches the ID.

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Balance and recent transactions</h1>
          <div className={classes.rightContainer}>
            <p>AVAILABLE BALANCE</p>
            <h2>
              {selectedAccount ? selectedAccount.balance : "Balance not found"}{" "}
              €
            </h2>
          </div>
        </div>

        <div className={classes.subHeader}>
          <h3>
            Alias: {selectedAccount ? selectedAccount.name : "Alias not found"}
          </h3>
          <h3>
            IBAN: {selectedAccount ? selectedAccount.iban : "Iban not found"}
          </h3>
        </div>
        <MovementListTableComponent
          movementList={movementList}
        ></MovementListTableComponent>
      </div>
      {/* You must use the ={...} syntax to pass anything through a component (so a prop)
      {MoveList} is the prop, the other the var
      */}
    </AppLayout>
  );
};

//issues
/**
 
 */
