import { Post } from "../models/index";

import { HttpResponse } from "../types/HttpResponse";
let response: HttpResponse = { status: 500 };

export async function createPost(payload: PostPayload): Promise<HttpResponse> {
  const { author, parent, content } = payload;
  await Post.create({
    author,
    parent,
    content,
  })
    .then((res: any) => {
      response = {
        status: 201,
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

export async function findAllPosts() {
  await Post.findAll()
    .then((data: any) => {
      response = {
        status: 200,
        data: data,
      };
    })
    .catch((e: any) => {
      response = {
        status: 500,
        errors: e?.errors.map((ex: any) => ex.message),
      };
    });

  return response;
}

export async function findOnePost(id: number | string): Promise<HttpResponse> {
  await Post.findAll({ where: { id } }).then((data: any) => {
    response = {
      status: 200,
      data: data,
    };
  });

  return response;
}

export async function updatePostFlag({
  id,
  flag,
}: PostFlag): Promise<HttpResponse> {
  await Post.update({ flag }, { where: { id } }).then((data: any) => {
    response = {
      status: 200,
      message: "Flag updated",
    };
  });

  return response;
}

export async function updatePostStatus({
  id,
  status,
}: PostStatus): Promise<HttpResponse> {
  await Post.update({ status }, { where: { id } }).then((data: any) => {
    response = {
      status: 200,
      message: "Status updated",
    };
  });

  return response;
}

interface PostPayload {
  author: string;
  parent: string;
  content: string;
}

interface PostFlag {
  id: number | string;
  flag: string;
}

interface PostStatus {
  id: number | string;
  status: string;
}
