import { Response, Request } from "express";

export function fetchSingleUser(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "User not found",
  };
  return res.status(response.status).json(response);
}

export function fetchAllUsers(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "No users found",
  };
  return res.status(response.status).json(response);
}

export function deleteUser(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "User not deactivated",
  };
  return res.status(response.status).json(response);
}
