import React from "react";

import {
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
  Credentials,
  CredentialsFormErrors
} from "../login.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.components.module.css";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );

  const [error, setError] = React.useState<CredentialsFormErrors>(
    createEmptyCredentialsFormErrors()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(credentials);

    setError(validationResult.errors);

    if (validationResult.succeeded) {
      onLogin(credentials);
    }
    console.log(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <input
          type="text"
          id="username"
          name="user"
          onChange={handleFieldChange}
          placeholder="Username"
          className={error.user ? classes.inputError : ""}
        />
        {error.user && <p className={classes.error}>{error.user}</p>}
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleFieldChange}
          placeholder="Password"
          className={error.password ? classes.inputError : ""}
        />
        {error.password && <p className={classes.error}>{error.password}</p>}
      </div>
      <button type="submit" className={classes.btnSend}>
        Login
      </button>
    </form>
  );
};
