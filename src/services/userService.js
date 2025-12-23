import { v4 as uuid } from "uuid";
import { ResponseError } from "../error/responseError.js";
import { createUserRepository, deleteUserByIdRepository, getListUsersRepository } from "../repositories/userRepository.js";

const createUserService = (user) => {
  if (!user || typeof user !== "object") {
    throw new ResponseError(400, "Invalid payload");
  }

  const { name, age } = user;

  if (!name || age === undefined) {
    throw new ResponseError(400, "Name and age are required");
  }

  if (typeof name !== "string") {
    throw new ResponseError(400, "Name must be a string");
  }

  if (typeof age !== "number") {
    throw new ResponseError(400, "Age must be a number");
  }

  if (age <= 0) {
    throw new ResponseError(400, "Age must be greater than 0");
  }
  const id = uuid()
  createUserRepository({id, name, age})

  return {
    id,
    name,
    age
  };

};

const getListUsersService = () => {
    return getListUsersRepository();
};

// const deleteUserByIdService = (userId) => {
//     if (!userId) {
//         throw new ResponseError("User id is required");
//     };

//     return deleteUserByIdRepository(userId);
// };

export {
    createUserService,
    getListUsersService,
    // deleteUserByIdService
}