import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validation.const";

import {
  validateNameField,
  validateTypeField
} from "./create-account-field.validation";

describe("create-account-field.validation specs", () => {
  describe("validateTypeField", () => {
    it("should return false when type is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateTypeField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when 'type' is filled in", () => {
      // Arrange
      const value = "1";

      // Act
      const result = validateTypeField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateNameField", () => {
    it("should return false when name is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateNameField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when 'name' is filled in", () => {
      // Arrange
      const value = "Savings";

      // Act
      const result = validateNameField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
