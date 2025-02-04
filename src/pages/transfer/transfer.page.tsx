import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import classes from "./transfer.page.module.css";
import { getAccountList, saveTransfer } from "./api";
import {
  mapAccountFromApiToVm,
  mapTransferFromVmToApi
} from "./transfer.mapper";
import { useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "@/core/router";

// const accountListMock: AccountVm[] = [
//   { id: "1", alias: "Cuenta principal", iban: "ES91 2100 0418 4502 0005 1332" },
//   { id: "2", alias: "Cuenta ahorro", iban: "ES91 2100 0418 4502 0005 1332" },
//   { id: "3", alias: "Cuenta nómina", iban: "ES91 2100 0418 4502 0005 1332" }
// ];

export const TransferPage: React.FC = () => {
  const navigate = useNavigate();
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    getAccountList().then((accountListApi) => {
      const accountListVm = accountListApi.map(mapAccountFromApiToVm);
      setAccountList(accountListVm);
    });
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    const transfer = mapTransferFromVmToApi(transferInfo);
    saveTransfer(transfer).then((result) => {
      if (result) {
        alert("Transfer successful");
        navigate(appRoutes.accountList);
      } else {
        alert("transfer unsuccessful");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>National Transfers</h1>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
          defaultAccountId={id}
        ></TransferFormComponent>
      </div>
    </AppLayout>
  );
};

//How does the option value get calc to display whats there anyway?
