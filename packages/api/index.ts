import express, { Application } from "express";
const expressJSDocSwagger = require("express-jsdoc-swagger");

import { NotFound } from "./src/controllers/MiscController";
import PostsRoutes from "./src/routes/PostsRoutes";
import UsersRoutes from "./src/routes/UsersRoutes";

const app: Application = express();
const port = 2700;

const options = {
  info: {
    version: "0.0.1",
    title: "RantsHQ",
  },
  description: "API description",
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
app.use("/posts", PostsRoutes);
app.use("/users", UsersRoutes);
app.all("/*", NotFound);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error}`);
}
