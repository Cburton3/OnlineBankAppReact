// import { appRoutes } from '@/core/router';
import React from "react";
// import { Link } from 'react-router-dom';
import { Credentials } from "./login.vm";
// import { LoginFormComponent } from './components/login-form.components'; //by exporting * from the index.ts in components when referencing x from a file within that folder, only have to reference the folder (see below)
import { LoginFormComponent } from "./components";
import { useNavigate } from "react-router-dom";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { appRoutes } from "@/core/router";
import classes from "./login.page.module.css";
import { useProfileContext } from "@/core/profile";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const {setUserProfile} = useProfileContext()

  const handleSubmit = (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVmToApi(credentials);
    isValidLogin(apiCredentials).then((isValid) => {
      if (isValid) {
        setUserProfile(credentials.user);
        navigate(appRoutes.accountList);
      } else {
        alert("Username or password incorrect, use: admin@email.com / test");
      }
    });
  };

  return (
    //onLogin here is a prop props are used to configure and customize a component's behavior or data and here onLogin is not a visual or structural component but a behavior
    <>
      <header className={classes.header}>
        <img src="assets/logo_header.svg" alt="" className={classes.logo} />
      </header>
      <div
        className={
          classes.bgImg /* this is the same as bg-img. This is only vitest*/
        }
      ></div>
      <div className={classes.box}>
        <h1>Access</h1>
        <LoginFormComponent onLogin={handleSubmit} />
        <h4 className={classes.inputFooter}>
          You are using a <strong>secure site</strong>
        </h4>
      </div>
    </>
  );
};
