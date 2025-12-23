import { createUserService, deleteUserByIdService, getListUsersService } from "../services/userService.js";

const createUserController = (req, res, next) => {
    try {
        const request = req.body;
        const result = createUserService(request);

        res.status(201).json({
            message: "Create User Success",
            data: result
        })

    } catch (error) {
        next(error)
    }
};

const getListUsersController = (req, res, next) => {
    try {
        const result = getListUsersService();

        res.json({
            message: "Success Get All Users",
            data: result
        })
    } catch (error) {
        next(error)
    }
};

// const deleteUserByIdController = (req, res, next) => {
//     try {
//         const {userId} = req.params;
//         const result = deleteUserByIdService(userId);
//         res.json({
//             message: "Success Delete User",
//             data: result
//         })
//     } catch (error) {
//         next(error)
//     }
// };

export {
    createUserController,
    getListUsersController,
    deleteUserByIdController
}