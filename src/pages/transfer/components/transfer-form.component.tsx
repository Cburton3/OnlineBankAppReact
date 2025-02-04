import React from "react";
import {
  AccountVm,
  createEmptyTransferError,
  createEmptyTransferVm,
  TransferError,
  TransferVm
} from "../transfer.vm";
import { validateForm } from "../validations";
import classes from "./transfer-form.component.module.css";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId?: string;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer, defaultAccountId } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm()
  );

  const [errors, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  React.useEffect(() => {
    if (defaultAccountId) {
      setTransfer((prevTransfer) => ({
        ...prevTransfer,
        accountId: defaultAccountId
      }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onTransfer(transfer);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Select account</label>
            <select
              name="accountId"
              onChange={handleFieldChange}
              value={transfer.accountId}
              className={`${classes.large} ${classes.accountSelect}`}
            >
              <option value="">Select an account</option>

              {accountList.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>
          <div>
            <label>Please introduce IBAN:</label>
            <input
              type="text"
              name="iban"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.iban}</p>
          </div>
          <div>
            <label>Beneficiary:</label>
            <input
              name="name"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              onChange={handleFieldChange}
              className={classes.small}
            />
            <p className={classes.error}>{errors.amount}</p>
          </div>
          <div>
            <label>Concept:</label>
            <input
              name="concept"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.concept}</p>
          </div>
          <div>
            <label>Observations</label>
            <input
              name="notes"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.notes}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>
              In order for the transfer to be made on a date other than today's,
              please indicate the desired date of transfer.
            </p>
            <div>
              <label>Transfer date:</label>
              <input
                name="realDateTransfer"
                onChange={handleFieldChange}
                type="date"
              />
              <p className={classes.error}>{errors.realDateTransfer}</p>
            </div>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <p>Enter an email address to notify the beneficiary:</p>
            <div>
              <label>Beneficiary's email address:</label>
              <input
                type="text"
                name="email"
                onChange={handleFieldChange}
                className={classes.large}
              />
              <p className={classes.error}>{errors.email}</p>
            </div>
          </div>
        </div>
        <button type="submit" className={classes.button}>
          MAKE TRANSFER
        </button>
      </form>
    </div>
  );
};
