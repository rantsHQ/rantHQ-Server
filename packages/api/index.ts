import express, { Application } from "express";
const expressJSDocSwagger = require("express-jsdoc-swagger");

import { NotFound } from "./src/controllers/MiscController";
import AuthRoutes from "./src/routes/AuthRoutes";
import PostsRoutes from "./src/routes/PostsRoutes";
import UsersRoutes from "./src/routes/UsersRoutes";

const app: Application = express();
const port = 2700;

const options = {
  info: {
    version: "0.0.1",
    title: "rantsHQ",
    description: "API description for rantsHQ",
  },
  security: {
    BasicAuth: {
      type: "http",
      scheme: "bearer",
    },
  },
  baseDir: __dirname,
  filesPattern: "./**/*.ts",
  swaggerUIPath: "/docs",
};

// Swagger Doc
expressJSDocSwagger(app)(options);

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", AuthRoutes);
app.use("/users", UsersRoutes);
app.use("/posts", PostsRoutes);
app.all("/*", NotFound);

try {
  app.listen(port, (): void => {
    console.log(
      `🚀 Server [re]started successfully`,
      `\n[SERVER]: http://localhost:${port}`,
      `\n[DOCS]:   http://localhost:${port}/docs`
    );
  });
} catch (error) {
  console.error(`🚩Error occurred: ${error}`);
}
