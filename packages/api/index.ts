import express, { Application } from "express";

import routesIndex from "./src/routes/index.route";

const app: Application = express();
const port = 2700;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/", routesIndex);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error}`);
}
