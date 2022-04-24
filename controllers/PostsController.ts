import { Response, Request } from "express";
import {
  findOnePost,
  findAllPosts,
  createPost,
  updatePostStatus,
  updatePostFlag,
} from "../services/PostsServices";

import { HttpResponse } from "./../types/HttpResponse";
let response: HttpResponse = { status: 500 };

export async function CreateNewPost(req: Request, res: Response) {
  let { author, parent, content } = req.body;

  response = await createPost({
    author,
    parent,
    content,
  });
  return res.status(response.status).json(response);
}

export async function FetchPost(req: Request, res: Response) {
  const { id } = req.params;
  response = await findOnePost(id);
  return res.status(response.status).json(response);
}

export async function FetchPosts(req: Request, res: Response) {
  response = await findAllPosts();
  return res.status(response.status).json(response);
}

export async function FlagPost(req: Request, res: Response) {
  const { id, flag } = req.params;
  await updatePostFlag({ id, flag }).then(async () => {
    response = await findOnePost(id);
    if (!response.data.length) {
      response = { status: 404, message: "Post not found" };
    }
  });

  return res.status(response.status).json(response);
}

export async function ArchivePost(req: Request, res: Response) {
  const { id } = req.params;
  await updatePostStatus({ id, status: "archived" }).then(async () => {
    response = await findOnePost(id);
    if (!response.data.length) {
      response = { status: 404, message: "Post not found" };
    }
  });
  return res.status(response.status).json(response);
}
