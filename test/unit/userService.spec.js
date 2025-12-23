import { describe, it, expect, beforeEach } from "@jest/globals";
import {
  createUserService,
  getListUsersService,
  deleteUserByIdService
} from "../../src/services/userService.js";

import { database } from "../../src/database/database.js";
import { ResponseError } from "../../src/error/responseError.js";

describe("User Service (without mock)", () => {
  beforeEach(() => {
    database.length = 0;
  });

  describe("createUserService", () => {
    it("should create user successfully", () => {
      const result = createUserService({
        name: "Rafi",
        age: 22
      });

      expect(result).toHaveProperty("id");
      expect(result.name).toBe("Rafi");
      expect(result.age).toBe(22);

      expect(database.length).toBe(1);
    });

    it("should throw error if payload invalid", () => {
      expect(() =>
        createUserService(null)
      ).toThrow(ResponseError);
    });

    it("should throw error if name missing", () => {
      expect(() =>
        createUserService({ age: 22 })
      ).toThrow("Name and age are required");
    });
  });

  describe("getListUsersService", () => {
    it("should return list of users", () => {
      createUserService({ name: "Rafi", age: 22 });
      createUserService({ name: "Budi", age: 25 });

      const result = getListUsersService();

      expect(result.length).toBe(2);
    });
  });

//   describe("deleteUserByIdService", () => {
//     it("should delete user by id", () => {
//       const user = createUserService({
//         name: "Rafi",
//         age: 22
//       });

//       const deleted = deleteUserByIdService(user.id);

//       expect(deleted.id).toBe(user.id);
//       expect(database.length).toBe(0);
//     });

//     it("should throw error if user not found", () => {
//       expect(() =>
//         deleteUserByIdService("random-id")
//       ).toThrow("User not found");
//     });

//     it("should throw error if userId missing", () => {
//       expect(() =>
//         deleteUserByIdService()
//       ).toThrow(ResponseError);
//     });
//   });
});
