import express, { Router, Request, Response } from "express";

const routesIndex: Router = express.Router();

routesIndex.get("/", async (req: Request, res: Response): Promise<Response> => {
  const response = {
    status: 200,
    message: "Welome to rantsHQ",
    author: "hmmd@ogbeni.com.ng",
  };
  return res.status(response.status).json(response);
});

routesIndex.get("*", async (req: Request, res: Response): Promise<Response> => {
  const response = {
    status: 404,
    message: "Resourses not found",
  };
  return res.status(response.status).json(response);
});

export default routesIndex;
