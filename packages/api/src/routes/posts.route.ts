import express, { Router, Request, Response } from "express";

const routesPosts: Router = express.Router();

// GET: /posts
routesPosts.get("/", async (req: Request, res: Response): Promise<Response> => {
  const response = {
    status: 501,
    message: "No posts found",
  };
  return res.status(response.status).json(response);
});

// GET: /posts/{id}
routesPosts.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const response = {
      status: 501,
      message: "Post not found",
    };
    return res.status(response.status).json(response);
  }
);

// DELETE: /posts/{id}
routesPosts.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const response = {
      status: 501,
      message: "Post deleted successfully",
    };
    return res.status(response.status).json(response);
  }
);

export default routesPosts;
