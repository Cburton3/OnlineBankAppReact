import { FormValidationResult, TransferVm } from "../transfer.vm";
import {
  validateAccountIdField,
  validateNameField,
  validateAmountField,
  validateConceptField,
  validateNotesField,
  validateRealDateTransferField,
  validateEmailField,
  validateIBANField
} from "./transfer-field.validation";

export const validateForm = (transfer: TransferVm): FormValidationResult => {
  const fieldValidationResults = [
    validateAccountIdField(transfer.accountId),
    validateIBANField(transfer.iban),
    validateNameField(transfer.name),
    validateAmountField(transfer.amount),
    validateConceptField(transfer.concept),
    validateNotesField(transfer.notes),
    validateRealDateTransferField(transfer.realDateTransfer),
    validateEmailField(transfer.email)
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded), //f stands for 'field'. could be anything
    errors: {
      accountId: fieldValidationResults[0].errorMessage ?? "", //?? provides a default value when the left-hand side expression is null or undefined. The default value being '' if its anything else (like false, 0, it will take fieldValidationResults[0].errorMessage)
      iban: fieldValidationResults[1].errorMessage ?? "",
      name: fieldValidationResults[2].errorMessage ?? "",
      amount: fieldValidationResults[3].errorMessage ?? "",
      concept: fieldValidationResults[4].errorMessage ?? "",
      notes: fieldValidationResults[5].errorMessage ?? "",
      realDateTransfer: fieldValidationResults[6].errorMessage ?? "",
      email: fieldValidationResults[7].errorMessage ?? "",
      dateTransfer: "", //empty cos (look above) no fx in the fieldValidationResults array
    }
  };
};
