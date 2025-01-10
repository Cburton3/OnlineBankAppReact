import { FormValidationResult } from "@/common/validations/validation.model";
import {
  CredentialsFormErrors,
  Credentials
} from "./login.vm";
import {
  validatePasswordField,
  validateUserField
} from "./login-field.validation";

// interface ValidationResult {
//   succeeded: boolean;
//   errors: CredentialsFormErrors;
// }

export const validateForm = (
  credentials: Credentials
): FormValidationResult<CredentialsFormErrors> => {
  const fieldValidationResults = [
    validateUserField(credentials.user),
    validatePasswordField(credentials.password)
  ];
  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      user: fieldValidationResults[0].errorMessage ?? "",
      password: fieldValidationResults[1].errorMessage ?? ""
    }
  };
};

// export const validateForm = (credentials: Credentials) : ValidationResult => {

// let validationResult: ValidationResult = {
//     succeeded: true,
//     errors: createEmptyCredentialsFormErrors(),
// };

// if(!credentials.user.trim()) { //trim removes leading and trailing whitespace from a string ,also ! is the NOT
//     validationResult.errors = {
//         ...validationResult.errors,
//         user: 'Please fill in user field'
//     };

//     validationResult.succeeded = false
// }

// if(!credentials.password.trim()) {
//     validationResult.errors = {
//         ...validationResult.errors,
//         password: 'Please fill in password field'
//     };
//     //12:30 login validation
//     validationResult.succeeded = false;
// }

// return validationResult
// };
