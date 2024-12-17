import { isDateAfterToday, isEmailWellFormed, isPositiveNumber, isStringValueFilledOut, isValidIban, isValueNotNullOrUndefined } from "@/common/validations";
import { FieldValidationResult } from "../transfer.vm";

export const REQUIRED_FIELD_MESSAGE = "Please fill in the required fields";
export const INVALID_IBAN_MESSAGE = "The Iban is not correctly formatted";
export const INVALID_AMOUNT_MESSAGE = 'The amount must be mroe than 0';
export const INVALID_REAL_DATE_TRANSFER_MESSAGE = "The date of execution must be later than the current date of the transfer.";
export const INVALID_EMAIL_MESSAGE = 'The email is not correctly formatted'

const buildValidationFailedResponse = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage: errorMessage
});

const buildValidationSucceeded = () => ({
    succeeded: true,
})

export const validateIBANField = (value: string): FieldValidationResult => {
  if (!isStringValueFilledOut(value)) {
    return buildValidationFailedResponse(REQUIRED_FIELD_MESSAGE);
  }

  if (!isValidIban(value)) {
    return buildValidationFailedResponse(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSucceeded()
};

export const validateAccountIdField = (value: string) : FieldValidationResult => {
  if(!isStringValueFilledOut(value)) {
    return buildValidationFailedResponse(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSucceeded();
}

export const validateNameField = (value : string) : FieldValidationResult => {
  if(!isStringValueFilledOut(value)) {
    return buildValidationFailedResponse(REQUIRED_FIELD_MESSAGE);
  }
  return buildValidationSucceeded();
};

export const validateAmountField = (value: number): FieldValidationResult => {
  if(!isPositiveNumber(value)) {
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

  export const validateNotesField = (_ : string) : FieldValidationResult => buildValidationSucceeded();//_ to indicate that the parameter is intentionally ignored or unused.
  // The function has a parameter for type or signature consistency, but the parameter itself is not relevant for the implementation.
  
  export const validateRealDateTransferField = (value?:Date): FieldValidationResult => {
    if(!isValueNotNullOrUndefined(value)) {
      return buildValidationSucceeded();
    }
    if(value && !isDateAfterToday(value)) { //issue here is that fx can only handles dates, not dates or undefined. Need to ensure a valid date before passing to fx so we check if its not null or undefined simply by putting if (value) and in this case && as fist it checks if value exists then it runs the fx 
      return buildValidationFailedResponse(INVALID_REAL_DATE_TRANSFER_MESSAGE);
    }
    return buildValidationSucceeded();
  }

  export const validateEmailField = (value: string) : FieldValidationResult => {
    if(!isStringValueFilledOut(value)) {
      return buildValidationSucceeded();
    }

    if(!isEmailWellFormed(value)) {
      return buildValidationFailedResponse(INVALID_EMAIL_MESSAGE);
    }
    return buildValidationSucceeded();
  };