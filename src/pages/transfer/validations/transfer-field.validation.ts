import {
  isDateAfterToday,
  isEmailWellFormed,
  isPositiveNumber,
  isStringValueFilledOut,
  isValidIban,
  isValueNotNullOrUndefined
} from "@/common/validations";
import { FieldValidationResult } from "../transfer.vm";
import {
  INVALID_AMOUNT_MESSAGE,
  INVALID_EMAIL_MESSAGE,
  INVALID_IBAN_MESSAGE,
  INVALID_REAL_DATE_TRANSFER_MESSAGE,
  REQUIRED_FIELD_MESSAGE
} from "@/common/validations/validation.const";

const buildValidationFailedResponse = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage: errorMessage
});

const buildValidationSucceeded = () => ({
  succeeded: true
});

export const validateIBANField = (value: string): FieldValidationResult => {
  if (!isStringValueFilledOut(value)) {
    return buildValidationFailedResponse(REQUIRED_FIELD_MESSAGE);
  }

  if (!isValidIban(value)) {
    return buildValidationFailedResponse(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSucceeded();
};

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueFilledOut(value)) {
    return buildValidationFailedResponse(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSucceeded();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueFilledOut(value)) {
    return buildValidationFailedResponse(REQUIRED_FIELD_MESSAGE);
  }
  return buildValidationSucceeded();
};

export const validateAmountField = (value: number): FieldValidationResult => {
  if (!isPositiveNumber(value)) {
    return buildValidationFailedResponse(INVALID_AMOUNT_MESSAGE);
  }
  return buildValidationSucceeded();
};

export const validateConceptField = (value: string): FieldValidationResult => {
  if (!isStringValueFilledOut(value)) {
    return buildValidationFailedResponse(REQUIRED_FIELD_MESSAGE);
  }
  return buildValidationSucceeded();
};

export const validateNotesField = (_: string): FieldValidationResult =>
  buildValidationSucceeded(); //_ to indicate that the parameter is intentionally ignored or unused.
// The function has a parameter for type or signature consistency, but the parameter itself is not relevant for the implementation.

export const validateRealDateTransferField = (
  value?: Date
): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSucceeded();
  }
  if (value && !isDateAfterToday(value)) {
    //issue here is that fx can only handles dates, not dates or undefined. Need to ensure a valid date before passing to fx so we check if its not null or undefined simply by putting if (value) and in this case && as fist it checks if value exists then it runs the fx
    return buildValidationFailedResponse(INVALID_REAL_DATE_TRANSFER_MESSAGE);
  }
  return buildValidationSucceeded();
};

export const validateEmailField = (value: string): FieldValidationResult => {
  if (!isStringValueFilledOut(value)) {
    return buildValidationSucceeded();
  }

  if (!isEmailWellFormed(value)) {
    return buildValidationFailedResponse(INVALID_EMAIL_MESSAGE);
  }
  return buildValidationSucceeded();
};
