import { ResponseError } from "../error/responseError.js";

const errorMiddleware = async (err, req, res, next) => {
    // console.log(err);

    if(err instanceof ResponseError) {
        res.status(err.status).json({
            errors: err.message
        });
    } else {
        res.status(500).json({
            errors: err.message
        }).end();
    }
}

export {
    errorMiddleware
}