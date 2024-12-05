import Axios from "axios";
import {Account, Movement } from './movement-list.api-model'

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string) : Promise<Movement[]> => Axios.get<Movement[]>(urlMovements, { params: {accountId}}).then(
    ({data}) => data 
);