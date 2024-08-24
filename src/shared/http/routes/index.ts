/* main file to export all routes */
import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
    return response.json({ message: "Hello dear" });
});

export default routes;
