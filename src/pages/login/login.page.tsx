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
  const navigate = useNavigate();//allos you to set links and link pages
  const {setUserProfile} = useProfileContext() // this access' setUserProfile and updates the userName when the user types their email. 
  // 
  // Its a manually done fx that wraps child elements with profilecContextwith values (username and setusername) allowing all child elements to access these values.

  //The child can display the current user name or call setUserProfile to update it.

  //When setUserProfile is called it updates the userProfile state in the ProfileProvider

  // useProfileContext centralizes and shares the userProfile state across multiple components.
  //This allows any component that subscribes to the ProfileContext to access and update the userProfile, making the state globally accessible so no need to directy put 'userProfile'

  const handleSubmit = (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVmToApi(credentials); //as we need to cross ref with whats on the api we need to make the daa accessible to the api so we from Vm format we make into Api format
    isValidLogin(apiCredentials).then((isValid) => {
      if (isValid) {
        setUserProfile(credentials.user);//this is connected to profile.Context page and is what connects the two and updates the global state. 
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
        {/* The entire onLogin={handleSubmit} is where you are passing a prop.
        onLogin is the name of the prop (key), and handleSubmit is the value being passed to it
        CONC so anything written next to a RC is a prop and this just means 'run handleSubmit */}
        {/* the e.target.value is in this component */}
        <h4 className={classes.inputFooter}>
          You are using a <strong>secure site</strong>
        </h4>
      </div>
    </>
  );
};
