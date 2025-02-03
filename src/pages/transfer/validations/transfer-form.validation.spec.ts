import { TransferVm } from "../transfer.vm";
import { vi } from "vitest";
import * as transferFieldValidation from "./transfer-field.validation";
import { validateForm } from "./transfer-form.validation";
// use spyOn when you are testing a fx that has many otehr fx's inside and you just want to mock them to test the main one.

describe("transfer-form.validation specs", () => {//for notes see line 80
  describe("validateForm", () => {
    it("it should return true when all the fields are correct", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "John Doe",
        amount: 1,
        concept: "Test",
        notes: "",
        dateTransfer: "",
        realDateTransfer: undefined,
        email: ""
      };

      vi.spyOn(transferFieldValidation, "validateIBANField").mockReturnValue({
        succeeded: true
      });
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true
      });
      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true
        }
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true
      });
      vi.spyOn(
        transferFieldValidation,
        "validateRealDateTransferField"
      ).mockReturnValue({ succeeded: true 
        
      });
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true
      });

      //Act
      const result = validateForm(transfer);

      //Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "",
        amount: "",
        concept: "",
        notes: "",
        realDateTransfer: "",
        email: "",
        dateTransfer: ""
      });
    });

    it("should return false when validateNameField is incorrect", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "",
        amount: 1,
        concept: "Test",
        notes: "",
        dateTransfer: "",
        email: ""
      };
      vi.spyOn(transferFieldValidation, "validateIBANField").mockReturnValue({//we wrap the fx/method so that vitest spyOn can monitor it
        //the string validateIBANField has to be exactly the same as the fx we are wrapping.
        //needs to be a string as thats what spyOn uses to find the property of transferFieldValidation and all spyOn to track the fx without calling it.
        // we replace its return value with mockReturnValue
        //if no mock, spyOn still tracks calls but runs the original function
        succeeded: true
      });
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error"
      });
      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true
        }
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true
      });
      vi.spyOn(
        transferFieldValidation,
        "validateRealDateTransferField"
      ).mockReturnValue({ succeeded: true });

      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true
      }); //we mock the individual fxs as they are part of 'validateForm fx and this page is dedicated to testing just this function. We test each fx indiv in validateFieldspec.

      // Act
      const result = validateForm(transfer);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "Error",
        amount: "",
        concept: "",
        notes: "",
        realDateTransfer: "",
        email: "",
        dateTransfer: ""
      });
    });
  });
});
