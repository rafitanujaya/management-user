import express from "express";
import cors from "cors";
import { router } from "./routes/index.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const createApp = () => {
    const app = express();

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());

    // Routes
    app.use('/api', router);

    // Middleware
    app.use(errorMiddleware);
    return app;
}

export {
    createApp
}