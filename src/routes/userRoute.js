import { Router } from "express";
import { createUserController, getListUsersController, deleteUserByIdController } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post('/', createUserController);
userRouter.get('/', getListUsersController);
// userRouter.delete('/:userId', deleteUserByIdController);

export {
    userRouter
}