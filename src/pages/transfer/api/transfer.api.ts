import Axios from "axios";
import {Account, Transfer} from './transfer.api-model';

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`; //account-list is the endpoint and refers to the part of the URL that Id's the specific resource.They are the paths that are often after the .com but do not include query params (anythign after a ?)

export const getAccountList = (): Promise<Account[]> => 
    Axios.get<Account[]>(urlAccount).then(({data}) => data);//devuelvo los datos

const urlTransfer = `${import.meta.env.VITE_BASE_API_URL}/transfer`;

export const saveTransfer = (transfer: Transfer): Promise<boolean> => 
    Axios.post<boolean>(urlTransfer, transfer).then(({data}) => data);