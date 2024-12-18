import Axios from "axios";
import {Account,} from './transfer.api-model';

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`; //account-list is the endpoint and refers to the part of the URL that Id's the specific resource.They are the paths that are often after the .com but do not include query params (anythign after a ?)

Axios.get<Account[]>(urlAccount).then(({data}) => data);