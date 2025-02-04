import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceeded,
  isStringValueProvided
} from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateUserField = (value: string): FieldValidationResult => {
  if (!isStringValueProvided(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceeded();
};

export const validatePasswordField = (value: string): FieldValidationResult => {
  if (!isStringValueProvided(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceeded();
};
