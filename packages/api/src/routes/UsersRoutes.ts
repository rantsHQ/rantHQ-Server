import express, { Router, Request, Response } from "express";
import {
  CreateUser,
  DeleteUser,
  GetUser,
  GetUsers,
} from "../controllers/UsersController";

const UsersRoutes: Router = express.Router();

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
 * @summary Fetch all users
 * @return {array<User>} 200 - Success response
 */
UsersRoutes.get("/", GetUsers);

/**
 * POST /users
 * @tags Users
 * @summary Create new user account
 * @return {User} 200 - Success response
 * @param {User} request.body.required
 * @example request - payload example
 * {
 *   "username": "MBuhari",
 *   "email": "example@email.com",
 *   "firstName": "Muhammadu",
 *   "lastName": "Buhari"
 * }
 */
UsersRoutes.get("/", CreateUser);

/**
 * GET /users/{id}
 * @tags Users
 * @summary Fetch details of a user
 * @param {string} id.path.required  - Id or userName of the user
 * @return {User} - 200 - success response
 */
UsersRoutes.get("/:id", GetUser);

/**
 * DELETE /users/{id}
 * @tags Users
 * @summary Deactivate a users account
 * @param {string} id.path.required  - Id or userName of the user
 * @return {object} - 200 - success response
 * @param {object} request.body.required
 * @example request - payload example
 * {
 *   "id": "",
 *   "reason": "",
 *   "duration": ""
 * }
 */
UsersRoutes.delete("/:id", DeleteUser);

export default UsersRoutes;
