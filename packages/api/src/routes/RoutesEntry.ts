import express, { Router, Request, Response } from "express";
import routesPosts from "./PostsRoutes";
import routesUsers from "./UsersRoute";

const routes: Router = express.Router();

// GET: root
routes.get("/", async (req: Request, res: Response): Promise<Response> => {
  const response = {
    status: 200,
    message: "Welome to rantsHQ",
    author: "hmmd@ogbeni.com.ng",
  };
  return res.status(response.status).json(response);
});

// valid routes
routes.use("/posts", routesPosts);
routes.use("/users", routesUsers);

// ALL: 404
routes.all("/*", async (req: Request, res: Response): Promise<Response> => {
  const response = {
    status: 404,
    message: "Resourses not found",
  };
  return res.status(response.status).json(response);
});

export default routes;
