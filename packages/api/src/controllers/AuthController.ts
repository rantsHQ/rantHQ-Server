import { Response, Request } from "express";

export function LoginUser(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "Not Implemented",
  };
  return res.status(response.status).json(response);
}

export function VerifyAccount(req: Request, res: Response) {
  const { method, url } = req;
  const response = {
    status: 404,
    request: {
      method,
      url,
    },
    message: "Not found",
  };
  return res.status(response.status).json(response);
}

export function DestroySessions(req: Request, res: Response) {
  const response = {
    status: 501,
    message: "Not Implemented",
  };
  return res.status(response.status).json(response);
}
