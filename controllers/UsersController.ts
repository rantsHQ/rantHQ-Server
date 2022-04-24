import { Users } from "./../models/index";
import { Response, Request } from "express";

export function GetUser(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "User not found",
  };
  return res.status(response.status).json(response);
}

export async function CreateUser(req: Request, res: Response) {
  let response: Res = {
    status: 501,
    message: "User not created",
  };

  const { username, password, email } = req.body;
  await Users.create({
    username,
    password,
    email,
  })
    .then((res: any) => {
      response = {
        status: 200,
        message: "Registration Successful",
        data: res.dataValues,
      };
    })
    .catch((e: any) => {
      response = {
        status: 500,
        message: "An error occurred",
        exception: e.errors.map((ex: any) => ex.message),
      };
    });

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

interface Res {
  status: number;
  message: string;
  exception?: any;
  data?: Object;
}
