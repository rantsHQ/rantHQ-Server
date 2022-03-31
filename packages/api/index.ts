import express, { Application } from "express";
import routes from "./src/routes/RoutesEntry";
const expressJSDocSwagger = require("express-jsdoc-swagger");

const options = {
  info: {
    version: "0.0.1",
    title: "RantsHQ",
    license: {
      name: "MIT",
    },
  },
  security: {
    BasicAuth: {
      type: "http",
      scheme: "basic",
    },
  },
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: "./**/*.ts",
  swaggerUIPath: "/docs",
  // Open API JSON Docs endpoint.
  apiDocsPath: "/docs",
};

const app: Application = express();
const port = 2700;

expressJSDocSwagger(app)(options);

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes handler
app.use("/", routes);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error}`);
}
