import { Response, Request } from "express";

import { User } from "./../models/index";

export function findOneUser(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "User not found",
  };
  return res.status(response.status).json(response);
}

export async function createUser(req: Request, res: Response) {
  let response: Res = {
    status: 501,
    message: "User not created",
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
        message: "An error occurred",
        errors: e.errors.map((ex: any) => ex.message),
      };
    });

  return res.status(response.status).json(response);
}

export function findAllUsers(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "No users found",
  };
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

interface Res {
  status: number;
  message: string;
  errors?: string[];
  data?: any;
}
