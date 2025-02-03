import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceeded,
  isStringValueProvided
} from "@/common/validations";

import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateTypeField = (value: string): FieldValidationResult => {
  if (!isStringValueProvided(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }//this validates the value of the selector option which corresponds to an account name
  return buildValidationSucceeded();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueProvided(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceeded();
};
