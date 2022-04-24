import { User } from "./../models/index";

import { HttpResponse } from "../types/HttpResponse";
let response: HttpResponse = { status: 500 };

export async function createUser(payload: UserPayload): Promise<HttpResponse> {
  const { username, password, email } = payload;
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

  return response;
}

export async function findAllUsers() {
  await User.findAll()
    .then((data: any) => {
      response = {
        status: 201,
        data: data,
      };
    })
    .catch((e: any) => {
      response = {
        status: 500,
        errors: e?.errors.map((ex: any) => ex.message) || ["An error occurred"],
      };
    });

  return response;
}

export async function findOneUsers(id: number | string): Promise<HttpResponse> {
  await User.findAll({ where: { id } }).then((data: any) => {
    response = {
      status: 200,
      data: data,
    };
  });

  return response;
}

interface UserPayload {
  username: string;
  password: string;
  email: string;
}
