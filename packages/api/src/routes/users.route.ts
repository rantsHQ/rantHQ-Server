import express, { Router, Request, Response } from "express";

const routesUsers: Router = express.Router();

// GET: /users
routesUsers.get("/", async (req: Request, res: Response): Promise<Response> => {
  const response = {
    status: 501,
    message: "No users found",
  };
  return res.status(response.status).json(response);
});

// GET: /users/{id}
routesUsers.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const response = {
      status: 501,
      message: "User not found",
    };
    return res.status(response.status).json(response);
  }
);

// DELETE: /users/{id}
routesUsers.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const response = {
      status: 501,
      error: true,
      message: "User not deactivated",
    };
    return res.status(response.status).json(response);
  }
);

export default routesUsers;
