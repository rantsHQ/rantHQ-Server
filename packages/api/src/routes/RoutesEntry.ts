import { Router, Request, Response } from "express";
import routesPosts from "./PostsRoutes";
import routesUsers from "./UsersRoute";

const routes: Router = Router();

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

/**
 * ALL *
 * @summary 404 Not found
 * @return {object} 404 - Success response
 */
routes.all("/*", async (req: Request, res: Response): Promise<Response> => {
  const { method, url } = req;
  const response = {
    status: 404,
    request: {
      method,
      url,
    },
    message: "Not found",
  };

  return res.status(response.status).json(response);
});

export default routes;
