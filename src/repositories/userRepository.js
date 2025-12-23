import { database } from "../database/database.js";
import { ResponseError } from "../error/responseError.js";

const createUserRepository = (user) => {
    database.push(user)
};

const getListUsersRepository = () => {
    return database
};

// const deleteUserByIdRepository = (userId) => {
//     const index = database.findIndex((user) => user.id === userId);
//     if (index === -1) {
//         throw new ResponseError(404, "User not found");
//     }

//     const deletedUser = database[index];

//     database.splice(index, 1)

//     return deletedUser
// };

export {
    createUserRepository,
    getListUsersRepository,
    // deleteUserByIdRepository
}