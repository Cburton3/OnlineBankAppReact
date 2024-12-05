import { AppLayout } from "@/layouts";
import React from "react";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components/movement-list-table.components";
import { AccountVm } from "../account-list/account-list.vm";

const mockMovementListData: MovementVm[] = [
  {
    id: "1",
    description: "Nómina noviembre",
    amount: 900,
    balance: 1490,
    transaction: "2019-12-09T21:30:00",
    realTransaction: "2019-12-09T21:30:00",
    accountId: "1"
  },
  {
    id: "2",
    description: "Alquiler noviembre",
    amount: -400,
    balance: 590,
    transaction: "2019-12-07T11:30:00",
    realTransaction: "2019-12-08T20:00:10",
    accountId: "1"
  },
  {
    id: "3",
    description: "Gastos móvil",
    amount: -24,
    balance: 990,
    transaction: "2019-12-01T07:01:00",
    realTransaction: "2019-12-02T12:00:10",
    accountId: "1"
  }
];

export const MovementListPage: React.FC = () => {
  const [accountList] = React.useState<AccountVm[]>([]);
  const [movementList] = React.useState<MovementVm[]>(mockMovementListData);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Balance and recent transactions</h1>
          <div className={classes.rightContainer}>
            <p>AVAILABLE BALANCE</p>
            <h2>1490 €</h2>
          </div>
        </div>
        {/* {pathname.startsWith(routesPrefixes.accountList) ? classes.selected
          : ''
        } */}
        <div className={classes.subHeader}>
          <h3>Alias:
             {`${movementList.description}`} 
            
            Gastos mes [placeholder]</h3>
          <h3>IBAN {`${accountList.iban}`}</h3>
        </div>
        <MovementListTableComponent movementList={movementList}></MovementListTableComponent>
      </div>
      {/* You must use the ={...} syntax to pass anything through a component (so a prop)
      {MoveList} is the prop, the other the var
      */}
    </AppLayout>
  );
};
