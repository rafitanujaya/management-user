import { database } from "../../src/database/database.js";
// import { ResponseError } from "../../src/error/responseError.js";
import { createUserRepository, deleteUserByIdRepository, getListUsersRepository } from "../../src/repositories/userRepository.js";

describe("User Repository", () => {
  beforeEach(() => {
    database.length = 0;
  });

  describe("createUserRepository", () => {
    it("should push user to database", () => {
      const user = {
        name: "Rafi",
        age: 22
      };

      createUserRepository(user);

      expect(database.length).toBe(1);
      expect(database[0]).toEqual(user);
    });
  });

  describe("getListUsersRepository", () => {
    it("should return all users", () => {
      database.push(
        { id: "uuid-1", name: "Rafi", age: 22 },
        { id: "uuid-2", name: "Budi", age: 25 }
      );

      const result = getListUsersRepository();

      expect(result.length).toBe(2);
      expect(result).toEqual(database);
    });
  });

//   describe("deleteUserByIdRepository", () => {
//     it("should delete user by id", () => {
//       database.push(
//         { id: "uuid-1", name: "Rafi", age: 22 },
//         { id: "uuid-2", name: "Budi", age: 25 }
//       );

//       const deleted = deleteUserByIdRepository("uuid-1");

//       expect(deleted).toEqual({
//         id: "uuid-1",
//         name: "Rafi",
//         age: 22
//       });

//       expect(database.length).toBe(1);
//       expect(database[0].id).toBe("uuid-2");
//     });

//     it("should throw ResponseError if user not found", () => {
//       database.push({ id: "uuid-1", name: "Rafi", age: 22 });

//       expect(() =>
//         deleteUserByIdRepository("uuid-99")
//       ).toThrow(ResponseError);

//       expect(() =>
//         deleteUserByIdRepository("uuid-99")
//       ).toThrow("User not found");
//     });
//   });
});
