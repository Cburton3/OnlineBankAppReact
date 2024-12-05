import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe("pages/login/login.valiation.ts", () => {
  it("should return -validation succeeded- when  both fields are completed", () => {
    //arrange
    const credentials: Credentials = {
      user: "myuser",
      password: "mypassword"
    };

    //act
    const result = validateForm(credentials);

    //assert
    expect(result.succeeded).toBeTruthy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("");
  });

  it("should return -validation failed- when user is empty", () => {
    //arrange
    const credentials: Credentials = {
      user: "",
      password: "mypassword"
    };

    //act
    const result = validateForm(credentials);

    //assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("Please fill in user field");
    expect(result.errors.password).toEqual("");
  });

  it("should return -validation failed- when password is empty", () => {
    //arrange
    const credentials: Credentials = {
      user: "user",
      password: ""
    };

    //act
    const result = validateForm(credentials);

    //assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("Please fill in password field");
  });

  it("should return -validation failed- when both fields are empty", () => {
    //arrange
    const credentials: Credentials = {
      user: "",
      password: ""
    };

    //act
    const result = validateForm(credentials);

    //assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("Please fill in user field");
    expect(result.errors.password).toEqual("Please fill in password field");
  });
});
