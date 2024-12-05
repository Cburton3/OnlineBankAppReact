import React from "react";

import {
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
  Credentials,
  CredentialsFormErrors
} from "../login.vm";
import { validateForm } from "../login.validation";
import classes from './login-form.components.module.css';

interface Props {
  onLogin: (credentials: Credentials) => void; //this is the parent, it is defined as a function that accepts an object of type Credentials
  ///The onLogin function is a mechanism for the parent component to specify the behavior that should happen when the login form is submitted
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  ); // careful not to use the obj literal ({fx here})

  const [error, setError] = React.useState<CredentialsFormErrors>(
    createEmptyCredentialsFormErrors()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ChangeEvent desribes events that occur when the value of a form element changes making the 'e' the form element that triggered the change so this is for the input
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value //by using the [] -sq bracket notation- you can create or update object properties. whats inside is used as a key,
      //when the usernaemfield is edited, e.target.name will be username and the property that corresponds to the name value (username) in the credentials object is updated with the new value so If e.target.name is "username" and e.target.value is "JohnDoe", this translates to:
      //username: "JohnDoe" so we not saying the same we placing values/ RE target.value is what is typed in input feild
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //react.FormEvent represents form-related events specifically triggered by form submissions.  typically used with the onSubmit
    e.preventDefault(); // to prevent the page from reloading when the form is submitted.
    const validationResult = validateForm(credentials);

    setError(validationResult.errors)

    if (validationResult.succeeded) {
      onLogin(credentials);
    }
    console.log(credentials);
  }; //when form submitted, fx triggered. credential obj which holds the username and password is handled by parent compoenent  such as validating credentials, sending them to a server, or updating the application state.

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        {/* <label htmlFor="username">Username</label> */}
        <input
          type="text"
          id="username"
          name="user"
          onChange={handleFieldChange}
          placeholder="Username"
          className={error.user ? classes.inputError : ''}
        />
        {error.user && <p className={classes.error}>{error.user}</p>}
        {/* this checks if the error.user property is truthy and if so the second part of the condition (<p>{error.user}</p>) is rendered which renders a <p> element displaying the value of error.user */}
      </div>
      <div>
        {/* <label htmlFor="password">Password</label> */}
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleFieldChange}
          placeholder="Password"
          className={error.password ? classes.inputError : ''}
        />
        {error.password && <p className={classes.error}>{error.password}</p>}
      </div>
      <button type="submit"className={classes.btnSend}>Login</button>
    </form>
  );
};
