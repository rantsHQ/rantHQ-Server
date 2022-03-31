import { Response, Request } from "express";

export function GetUser(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "User not found",
  };
  return res.status(response.status).json(response);
}

export function CreateUser(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "User not created",
  };
  return res.status(response.status).json(response);
}

export function GetUsers(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "No users found",
  };
  return res.status(response.status).json(response);
}

export function DeleteUser(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "User not deactivated",
  };
  return res.status(response.status).json(response);
}
