import { Response, Request } from "express";

export function fetchSinglePost(req: Request, res: Response) {
  const response = {
    status: 501,
    error: true,
    message: "Post not found",
  };
  return res.status(response.status).json(response);
}

export function fetchAllPosts(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "No posts found",
  };
  return res.status(response.status).json(response);
}

export function deletePost(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "Post not deleted",
  };
  return res.status(response.status).json(response);
}
