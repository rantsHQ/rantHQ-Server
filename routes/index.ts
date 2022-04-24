import { Router } from "express";

import AuthRoutes from "./AuthRoutes";
import PostsRoutes from "./PostsRoutes";
import UsersRoutes from "./UsersRoutes";

import { NotFound } from "../controllers/MiscController";

const routes: Router = Router();

routes.use("/auth", AuthRoutes);
routes.use("/users", UsersRoutes);
routes.use("/posts", PostsRoutes);
routes.all("/*", NotFound);

export default routes;
