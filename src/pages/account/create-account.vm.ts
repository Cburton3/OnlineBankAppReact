export interface AccountVm {
    type: string;
    name: string;
  }

  export const createEmptyAccountVm = (): AccountVm => ({
    type: '',//this is a number string
    name: ''//this is the alias
  });

  export interface CreateAccountError {
    type: string;
    name: string;
  }

  export const createEmptyCreateAccountError = (): CreateAccountError => ({
    type: '',
    name: ''
  })