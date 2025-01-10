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
  const navigate = useNavigate() //hook can only be in the top most part of the FC

  // const [accountType, setAccount]

  const handleCreateAccount = (newAccountInfo: AccountVm) => {
      //useNavigate((generatePath(appRoutes.accountList)));//doesnt work cos useNavigate is ahook not a fx so you cant call it with arguments directly therefore need to first call useNavigate to get a fx then use that fx to navigate a path
      //generate path is only for dynamic params
     
    const accountToSave = mapCreateAccountFromVmToApi(newAccountInfo);
    createNewAccount(accountToSave).then(result => {
      if(result) {
        alert('Account created successfully')
        navigate(appRoutes.accountList);
      } else {
        alert('Unable to create account')
        navigate(appRoutes.accountList)
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
          >
          </CreateAccountComponent>
           {/* re chidlren go inside the tags */}
           {/* children are what go here, inbetween the tags */}
           {/* kept getting an error here as  React automatically includes an empty children array when no children are passed */}
        
      </div>
    </AppLayout>
  );
};
