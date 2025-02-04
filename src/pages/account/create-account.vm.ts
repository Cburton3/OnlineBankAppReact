export interface AccountVm {
  type: string;
  name: string;
}

export const createEmptyAccountVm = (): AccountVm => ({
  type: "",
  name: ""
});

export interface CreateAccountError {
  type: string;
  name: string;
}

export const createEmptyCreateAccountError = (): CreateAccountError => ({
  type: "",
  name: ""
});
