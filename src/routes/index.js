import { Router } from "express";
import { userRouter } from "./userRoute.js";


const router = Router()

// Health Route
router.get('/health', (req, res) => res.json({message: "OK", data: {}}))

// User Route
router.use('/users', userRouter)

export {
    router
}