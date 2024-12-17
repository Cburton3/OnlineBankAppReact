import React from "react";
import {
  AccountVm,
  createEmptyTransferError,
  createEmptyTransferVm,
  TransferError,
  TransferVm
} from "../transfer.vm";
import { validateForm } from "../validations";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void; //this specifies the type of fx property. Its means the fx doesnt not return a value
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm()
  );

  const [error, setErrors] = React.useState<TransferError>(
    createEmptyTransferError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //when you click the button
    e.preventDefault();
    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onTransfer(transfer); //contains all user input as the onChange has been updating it field by field
    }
  };

  const handleFieldChange = (
    e: //info on the even(change in (specific) input field)
    React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
    // e.target.name: dynamically updates the property whose name matches the name attribute of the form field triggering the event (looks for input's name where  user types as works for whole form not just this button/input)

    // e.target.value: assigns the new value to the respective property. (what user types)
  };

  return (
    <div>
      <h2>Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select account</label>
          <select
            name="accountId"
            onChange={handleFieldChange}
            // onCHange  is a React event handler that triggers every time a user types into an input field or selects an option in a dropdown
            // It allows you to capture what the user is typing or selecting immediately as it happens.
            //so it listens for changes in input field and calls the handleFieldChange fx
            value={transfer.accountId}
          >
            <option value="">Select an account</option>

            {accountList.map((account) => (
              <option key={account.id} value={account.id}>
                {/* key={account.id} is specific to React and allows it to id each element. its to link with the html elements and gives each a 'key'.

                value={account.id} (HTML) it sets what is submitted when user chooses an option. Ie account.id becomes the value of the select element when the user selects this. Its sets the value to what the user has chosen*/}
                {account.alias}{" "}
                {/* this is the only visible part as its between the tags*/}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Please introduce IBAN:</label>
          <input type="text" name="iban" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Beneficiary:</label>
          <input name="name" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Concept:</label>
          <input name="concept" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Observations</label>
          <input name="notes" onChange={handleFieldChange} />
        </div>
        <div>
          <p>
            In order for the transfer to be made on a date other than today's
            date, please indicate the date of transfer.
          </p>
          <div>
            <label>Transfer date:</label>
            <input
              name="realDateTransfer"
              onChange={handleFieldChange}
              type="date"
            />
          </div>
        </div>
        <div>
          <p>Enter an email address to notify the beneficiary:</p>
          <div>
            <label>Beneficiary's email address:</label>
            <input type="text" name="email" onChange={handleFieldChange} />
          </div>
        </div>
        <button type="submit">MAKE TRANSFER</button>
      </form>
    </div>
  );
};
