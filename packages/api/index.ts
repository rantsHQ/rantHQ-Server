import express from "express";
import { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  const response = {
    status: 200,
    message: "Welome to rantsHQ",
    author:'hmmd@ogbeni.com.ng'
  };
  return res.status(response.status).json(response);
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error}`);
}
