import { AccountVm } from "./create-account.vm";
import { AccountApi } from "./api/create-account.api-model";

export const mapCreateAccountFromVmToApi = (
  newAccount: AccountVm
): AccountApi => ({
  type: newAccount.type,
  name: newAccount.name
});
