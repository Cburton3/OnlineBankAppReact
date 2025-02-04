import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./create-account.page.module.css";
import { CreateAccountComponent } from "./components/create-account-form.component";
import { AccountVm } from "./create-account.vm";
import { createNewAccount } from "./api/create-account.api";
import { mapCreateAccountFromVmToApi } from "./create-account.mapper";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const CreateAccountPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateAccount = (newAccountInfo: AccountVm) => {
    const accountToSave = mapCreateAccountFromVmToApi(newAccountInfo);
    createNewAccount(accountToSave).then((result) => {
      if (result) {
        alert("Account created successfully");
        navigate(appRoutes.accountList);
      } else {
        alert("Unable to create account");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Bank Account</h1>
        </div>
        <CreateAccountComponent
          onAccountCreation={handleCreateAccount}
        ></CreateAccountComponent>
      </div>
    </AppLayout>
  );
};
