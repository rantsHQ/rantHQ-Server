import express, { Application, json, urlencoded } from "express";

const expressJSDocSwagger = require("express-jsdoc-swagger");
import { swaggerOptions } from "./config/swagger.config";
import routes from "./routes";

const app: Application = express();

// Designate port
const port = 2700;

// Swagger options
expressJSDocSwagger(app)(swaggerOptions);

// Body parsing Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use(routes);

try {
  app.listen(port, (): void => {
    console.log(
      `🚀 Server [re]started successfully`,
      `\n[SERVER]: http://localhost:${port}`,
      `\n[DOCS]:   http://localhost:${port}/docs`
    );

    // Initialize database
    const database = require("./models");
  });
} catch (error) {
  console.error(`🚩Error occurred: ${error}`);
}
