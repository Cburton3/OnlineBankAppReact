import  Axios  from "axios";
import {Credentials} from './login.api-model';

const url = `${import.meta.env.VITE_BASE_API_URL}/login`
//This accesses an environment variable defined in the app's .env file or configuration.
//VITE_BASE_API_URL = http://localhost:3000/api

export const isValidLogin = async (credentials: Credentials) : Promise<boolean> => 
   Axios.post<boolean>(url, credentials).then(({data}) => data)
//The function accepts a credentials object with properties like username and password
//Sends a POST request to the /login API with the credentials
/* 
the url is the endpoint to which the post request is sent
the data(in this case credentials) is the body of the POST request
*/

//.then callback extracts the data property from the response object, which contains the boolean value returned by the API.
   
