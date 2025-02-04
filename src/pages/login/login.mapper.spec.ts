import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as apiModel from "./api";
import * as viewModel from "./login.vm";

describe("login.mapper specs", () => {
  it("Should return a credential with the same properties", () => {
    //Arrange
    const vmCredentials: viewModel.Credentials = {
      user: "myuser",
      password: "mypassword"
    };

    const expectedApiCredentials: apiModel.Credentials = {
      user: "myuser",
      password: "mypassword"
    };

    //Act
    const result: apiModel.Credentials =
      mapCredentialsFromVmToApi(vmCredentials);

    //Assert
    expect(result).toEqual(expectedApiCredentials);
  });
});
