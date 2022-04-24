import { HttpResponse } from "./../types/HttpResponse";
import { Response, Request } from "express";
import { findAllUsers, findOneUsers } from "../services/UsersServices";

import { User } from "./../models/index";

export async function FetchUser(req: Request, res: Response) {
  const { id } = req.params;
  const response: HttpResponse = await findOneUsers(id);
  return res.status(response.status).json(response);
}

export async function createUser(req: Request, res: Response) {
  let response: HttpResponse = {
    status: 501,
  };

  const { username, password, email } = req.body;
  await User.create({
    username,
    password,
    email,
  })
    .then((res: any) => {
      response = {
        status: 201,
        message: "Registration successful",
        data: res.dataValues,
      };
    })
    .catch((e: any) => {
      response = {
        status: 500,
        errors: e.errors.map((ex: any) => ex.message),
      };
    });

  return res.status(response.status).json(response);
}

export async function FetchUsers(req: Request, res: Response) {
  const response: any = await findAllUsers();
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
