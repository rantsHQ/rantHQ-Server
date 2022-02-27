import express, { Router, Request, Response } from "express";
import {
  deleteUser,
  fetchAllUsers,
  fetchSingleUser,
} from "../controllers/users.controller";

const routesUsers: Router = express.Router();

// GET: /users
routesUsers.get("/", fetchAllUsers);

// GET: /users/{id}
routesUsers.get("/:id", fetchSingleUser);

// DELETE: /users/{id}
routesUsers.delete("/:id", deleteUser);

export default routesUsers;
