import express, { Router, Request, Response } from "express";
import { NotImplemented } from "../controllers/MiscController";
import {
  createUser,
  deleteUser,
  findOneUser,
  findAllUsers,
  updateUser,
  checkUsername,
  flagUser,
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
 * POST /users
 * @tags Users
 * @summary Create new user account
 * @return {User} 200 - Success response
 * @param {User} request.body.required
 * @example request - payload example
 * {
 *   "username": "",
 *   "email": "",
 *   "password": ""
 * }
 */
UsersRoutes.post("/", createUser);

/**
 * GET /users
 * @tags Users
 * @summary Fetch all users
 * @param {string} page.query - Pagination
 * @return {array<User>} 200 - Success response
 */
UsersRoutes.get("/", findAllUsers);

/**
 * GET /users/{username}/check
 * @tags Users
 * @summary Confirm Username Availability
 * @param {string} username.path.required
 */
UsersRoutes.get("/:username/check", checkUsername);

/**
 * GET /users/{id}
 * @tags Users
 * @summary Fetch details of a user
 * @param {string} id.path.required
 * @return {User} - 200 - success response
 */
UsersRoutes.get("/:id", findOneUser);

/**
 * PATCH /users/{id}
 * @tags Users
 * @summary Update user account
 * @return {User} 200 - Success response
 * @param {User} request.body.required
 * @example request - payload example
 * {
 *   "email": "",
 *   "firstName": "",
 *   "lastName": "",
 *   "location": ""
 * }
 */
UsersRoutes.patch("/", updateUser);

/**
 * DELETE /users/{id}
 * @tags Users
 * @summary Deactivate a users account
 * @param {string} id.path.required
 * @return {object} - 200 - success response
 * @param {object} request.body.required
 * @example request - payload example
 * {
 *   "reason": "",
 *   "duration": ""
 * }
 */
UsersRoutes.delete("/:id", deleteUser);

/**
 * POST /users/{id}/flag
 * @tags Users
 * @summary Deactivate a users account
 * @param {string} id.path.required
 * @return {object} - 200 - success response
 * @param {object} request.body.required
 * @example request - payload example
 * {
 *   "reason": "",
 *   "priority": ""
 * }
 */
UsersRoutes.post("/:id/flag", flagUser);

export default UsersRoutes;
