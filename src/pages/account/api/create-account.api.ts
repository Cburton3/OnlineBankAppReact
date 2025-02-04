import Axios from "axios";
import { AccountApi } from "./create-account.api-model";

const urlCreateAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const createNewAccount = (newAccount: AccountApi): Promise<boolean> =>
  Axios.post<boolean>(urlCreateAccount, newAccount).then(({ data }) => data);
