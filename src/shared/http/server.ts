import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import AppError from "@shared/errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// Middleware to handle errors
app.use(
    (
        error: Error,
        request: Request,
        response: Response,
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        next: NextFunction,
    ) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: "error",
                message: error.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    },
);

app.listen(3333, () => {
    console.log("Server is running on port 3333 🚀");
});
