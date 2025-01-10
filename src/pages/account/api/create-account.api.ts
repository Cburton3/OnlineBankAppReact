import Axios from 'axios';
import {Account} from './create-account.api-model';

const urlCreateAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const createNewAccount = (newAccount: Partial<Account>) : Promise<boolean> => 
    Axios.post<boolean>(urlCreateAccount, newAccount).then(({data}) => data)