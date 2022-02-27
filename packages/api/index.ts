import express, { Application } from "express";
import routes from "./src/routes/index.route";

const app: Application = express();
const port = 2700;

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
