import { Response, Request } from "express";

export function GetPost(req: Request, res: Response) {
  const response = {
    status: 501,
    error: true,
    message: "Post not found",
  };
  return res.status(response.status).json(response);
}

export function GetPosts(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "No posts found",
  };
  return res.status(response.status).json(response);
}

export function DeletePost(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "Post not deleted",
  };
  return res.status(response.status).json(response);
}
