import Axios from "axios";
import { Movement } from './movement-list.api-model'

//RE need 2 apis. one to bring the account and the other for the movement data

//here we pass the id of the account as a param

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string) : Promise<Movement[]> => 
    Axios.get<Movement[]>(urlMovements, { params: {accountId}}).then(
    ({data}) => data 
);

//  export const getMovements = () : Promise<Movement[]> => 
//      Axios.get<Movement[]>(urlMovements).then(
//      (response) => response.data 
// );