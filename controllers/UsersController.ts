import { Response, Request } from "express";
import {
  createUser,
  findAllUsers,
  findOneUser,
} from "../services/UsersServices";

import { HttpResponse } from "./../types/HttpResponse";
let response: HttpResponse = { status: 500 };

export async function RegisterUser(req: Request, res: Response) {
  const { username, password, email } = req.body;

  response = await createUser({
    username,
    password,
    email,
  });
  return res.status(response.status).json(response);
}

export async function FetchUser(req: Request, res: Response) {
  const { id } = req.params;
  response = await findOneUser(id);
  return res.status(response.status).json(response);
}

export async function FetchUsers(req: Request, res: Response) {
  response = await findAllUsers();
  return res.status(response.status).json(response);
}

export function updateUser(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "Unable to update user",
  };
  return res.status(response.status).json(response);
}

export function flagUser(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "NOT_IMPLEMENTED",
  };
  return res.status(response.status).json(response);
}

export function checkUsername(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "NOT_IMPLEMENTED",
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
