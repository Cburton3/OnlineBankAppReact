import validator from "validator";//page 13  1/2

export const isValidIban = (iban: string): boolean => validator.isIBAN(iban);//this is a set of validations that coming from an external source

export const isPositiveNumber = (amount : number) : boolean => amount > 0;

export const isDateAfterToday = (date : Date) : boolean => date > new Date();//gives current date

export const isEmailWellFormed = (email: string): boolean => validator.isEmail(email);

export const isStringValueProvided = (field : string) : boolean => field !== '';

export const isValueNotNullOrUndefined = <T>(value: T): boolean => value !== undefined && value !== null; //the T is just a placeholder for 'any' generic type that is determiend when the fx is used. its better and more specific than using 'any'