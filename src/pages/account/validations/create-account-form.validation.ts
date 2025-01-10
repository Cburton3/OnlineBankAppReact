import { FormValidationResult } from "@/common/validations/validation.model";
import { AccountVm, CreateAccountError } from "../create-account.vm";
import {
  validateTypeField,
  validateNameField
} from "./create-account-field.validation";

export const validateForm = (
  newAccount: AccountVm
): FormValidationResult<CreateAccountError> => {
  const fieldValidationResults = [
    validateTypeField(newAccount.type),
    validateNameField(newAccount.name)
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
        type: fieldValidationResults[0].errorMessage ?? '',
        name: fieldValidationResults[1].errorMessage ?? '',
    }
  }
};
