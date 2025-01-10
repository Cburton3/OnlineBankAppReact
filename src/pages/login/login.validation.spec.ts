import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validation.const";
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
    expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
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
    expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
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
    expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
    expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
  });
});
