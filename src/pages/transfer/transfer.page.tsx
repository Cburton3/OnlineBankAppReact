import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import classes from './transfer.page.module.css';
import { getAccountList, saveTransfer } from "./api";
import { mapAccountFromApiToVm, mapTransferFromVmToApi } from "./transfer.mapper";

// const accountListMock: AccountVm[] = [
//   { id: "1", alias: "Cuenta principal", iban: "ES91 2100 0418 4502 0005 1332" },
//   { id: "2", alias: "Cuenta ahorro", iban: "ES91 2100 0418 4502 0005 1332" },
//   { id: "3", alias: "Cuenta nómina", iban: "ES91 2100 0418 4502 0005 1332" }
// ];

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  //as the mock data is passed from the setAccountList and setAccoutList updates accountList, the mockdata becomes the account list. Get it? good!

  React.useEffect(() => {//used cos the mock is outside the component
    getAccountList().then((accountListApi) => {//accountListApi would be the 'data'
      const accountListVm = accountListApi.map(mapAccountFromApiToVm);//put in Vm style for UI
      setAccountList(accountListVm)//updates accountList
    });
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    const transfer = mapTransferFromVmToApi(transferInfo);
    saveTransfer(transfer).then(result => {
      if(result) {
        alert('Transfer successful')
        //could put a nagivate here to go back to main accounts
      } else {
        alert('transfer unsuccessful')
      }
    })
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>National Transfers</h1>
      <TransferFormComponent 
      accountList={accountList}
      onTransfer={handleTransfer}
      ></TransferFormComponent>
      </div>
    </AppLayout>
  );
};
