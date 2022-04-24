import { HttpResponse } from "../types/HttpResponse";
import { User } from "./../models/index";

const response: HttpResponse = { status: 500 };

export async function findAllUsers() {
  await User.findAll()
    .then((data: any) => {
      response.status = 200;
      response.data = data;
    })
    .catch((e: any) => {
      response.status = 404;
      response.errors =
        e?.errors.map((ex: any) => ex.message) || "An error occurred";
    });

  return response;
}

export async function findOneUsers(id: number | string): Promise<HttpResponse> {
  await User.findAll({ where: { id } }).then((data: any) => {
    response.status = 200;
    response.data = data;
  });

  return response;
}
