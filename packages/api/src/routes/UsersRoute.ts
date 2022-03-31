import express, { Router, Request, Response } from "express";
import {
  deleteUser,
  fetchAllUsers,
  fetchSingleUser,
} from "../controllers/UsersController";

const routesUsers: Router = express.Router();

/**
 * A users type
 * @typedef {object} User
 * @property {integer} id
 * @property {string} userName.required
 * @property {string} firstName.required
 * @property {string} lastName.required
 * @property {string} middleName
 * @property {string} gender
 * @property {string} dateOfBirth
 * @property {string} createdAt.required
 */

/**
 * GET /users
 * @tags Users
 * @summary Fetch  all users
 * @return {array<User>} 200 - Success response
 */
routesUsers.get("/", fetchAllUsers);

/**
 * GET /users/{id}
 * @tags Users
 * @summary Fetch details of a user
 * @param {string} id.path  - ID or userName of the user
 * @return {User} - 200 - success response
 */
routesUsers.get("/:id", fetchSingleUser);

/**
 * DELETE /users/{id}
 * @tags Users
 * @summary Fetch details of a user
 * @param {string} id.path  - ID or userName of the user
 * @return {object} - 200 - success response
 */
routesUsers.delete("/:id", deleteUser);

export default routesUsers;
