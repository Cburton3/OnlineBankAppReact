import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceeded,
  isStringValueProvided
} from "@/common/validations";

import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateTypeField = (value: string): FieldValidationResult => {
  if (!isStringValueProvided(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceeded();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueProvided(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceeded();
};
