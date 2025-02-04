import * as createAccountFieldValidation from "./create-account-field.validation";
import { AccountVm } from "../create-account.vm";
import { vi } from "vitest";
import { validateForm } from "./create-account-form.validation";

describe("create-account-form.validation specs", () => {
  describe("validateForm", () => {
    it("it should return true when all the fields are correct", () => {
      //Arrange
      const createAccount: AccountVm = {
        type: "1",
        name: "Trading"
      };

      vi.spyOn(
        createAccountFieldValidation,
        "validateTypeField"
      ).mockReturnValue({ succeeded: true });
      vi.spyOn(
        createAccountFieldValidation,
        "validateNameField"
      ).mockReturnValue({ succeeded: true });

      //Act
      const result = validateForm(createAccount);

      //Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        name: ""
      });
    });

    it("should return false when validateNameFieldAmount is incorrect", () => {
      //Arrange
      const createAccount: AccountVm = {
        type: "1",
        name: ""
      };
      vi.spyOn(
        createAccountFieldValidation,
        "validateTypeField"
      ).mockReturnValue({ succeeded: true });
      vi.spyOn(
        createAccountFieldValidation,
        "validateNameField"
      ).mockReturnValue({
        succeeded: false,
        errorMessage: "Error"
      });

      //Act
      const result = validateForm(createAccount);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "",
        name: "Error"
      });
    });
  });
});
