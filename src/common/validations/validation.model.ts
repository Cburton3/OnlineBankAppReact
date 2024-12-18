export interface FieldValidationResult {
    succeeded: boolean;
    errorMessage?: string;
  }
  
  export interface FormValidationResult<T> { //whole form
      succeeded: boolean;
      errors: T;//using t to make generic
  }