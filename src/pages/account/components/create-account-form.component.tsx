import React from "react";
import classes from "./create-account.component.module.css";
import { AccountVm, CreateAccountError, createEmptyAccountVm, createEmptyCreateAccountError } from "../create-account.vm";
import { validateForm } from "../validations/create-account-form.validation";

interface Props {
  onAccountCreation: (accountInfo: AccountVm) => void;
  defaultAccountCreation?: string;
  children?: React.ReactNode;
}

export const CreateAccountComponent: React.FC<Props> = (props) => {
  const { onAccountCreation } = props;

  const [newAccount, setNewAccount] = React.useState<AccountVm>(
    createEmptyAccountVm()
  );

  const [errors, setErrors] = React.useState<CreateAccountError>(
    createEmptyCreateAccountError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(newAccount);
    setErrors(formValidationResult.errors)
    onAccountCreation(newAccount);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewAccount({...newAccount, [e.target.name]: e.target.value});//this updates the type and name
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Account Type:</label>
            <select
              name="type"
              onChange={handleFieldChange}
              // value={transfer.accountId}
              className={classes.medium}
            >
              <option value="">Select an account</option>
              <option value="1">Current Account</option>
              <option value="2">Saving Account</option>
              <option value="3">Trading Account</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              type="text"
              name="name"
              onChange={handleFieldChange}
              className={classes.medium}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button type="submit" className={classes.button}>
          Save
        </button>
      </form>
    </div>
  );
};
