import Axios from "axios";
import { Movement } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`; //normally back end well pot the endpoints in the readme
//base urls are often set up in the .env files

export const getMovements = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, {
    params: accountId ? { accountId } : {}
    // if exists the set to '1' if not then empty
  }).then(({ data }) => data); //extracts data property from response obj and returns only the data from this obj  instead of the entire Axios response object.

// params defines the query parameters to be appended to the URL eg   params: { accountId: "1" } this adds accountId=1 to the URL.

//Axios supports a params field in its configuration object