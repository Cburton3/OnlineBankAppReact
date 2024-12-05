import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as apiModel from './api'; // this syntax is to import all exports from a module and give them a namespace (in this case, apiModel)
//CONC it imports everything from a specific folder and gives it a name. Can then use the name to access resources in that folder 'apiModel.getData()'
import * as viewModel from './login.vm'

describe('login.mapper specs', () => {
    it('Should return a credential with the same properties', () => {
        //Arrange
        const vmCredentials: viewModel.Credentials = {
            user: 'myuser',
            password: 'mypassword',
        };

        const expectedApiCredentials: apiModel.Credentials ={
            user: 'myuser',
            password: 'mypassword',
        };

        //Act
        const result: apiModel.Credentials = mapCredentialsFromVmToApi(vmCredentials);
        

        //Assert
        expect(result).toEqual(expectedApiCredentials);
    });
});