import { createEmptyCredentialsFormErrors, CredentialsFormErrors } from "./login.vm";

interface ValidationResult {
    succeeded: boolean;
    errors: CredentialsFormErrors;
}

export const validateForm = (credentials: CredentialsFormErrors) : ValidationResult => {
    let validationResult: ValidationResult = {
        succeeded: true,
        errors: createEmptyCredentialsFormErrors(),
    };

    if(!credentials.user.trim()) { //trim removes leading and trailing whitespace from a string ,also ! is the NOT
        validationResult.errors = {
            ...validationResult.errors,
            user: 'Please fill in user field'
        };

        validationResult.succeeded = false
    }

    if(!credentials.password.trim()) {
        validationResult.errors = {
            ...validationResult.errors,
            password: 'Please fill in password field'
        };
        //12:30 login validation
        validationResult.succeeded = false;
    }

    return validationResult
};