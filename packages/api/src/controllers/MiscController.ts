import { Response, Request } from "express";

export function NotFound(req: Request, res: Response) {
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
