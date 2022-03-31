import express, { Router, Request, Response } from "express";
import { NotImplemented } from "../controllers/MiscController";
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
 * @param {string} page.query - Pagination
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
 *   "username": "",
 *   "email": "",
 *   "password": ""
 * }
 */
UsersRoutes.post("/", CreateUser);

/**
 * GET /users/{username}/check
 * @tags Users
 * @summary Confirm Username Availability
 * @param {string} username.path.required
 */
UsersRoutes.get("/:username/check", NotImplemented);

/**
 * GET /users/{id}
 * @tags Users
 * @summary Fetch details of a user
 * @param {string} id.path.required
 * @return {User} - 200 - success response
 */
UsersRoutes.get("/:id", GetUser);

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
UsersRoutes.patch("/", NotImplemented);

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
UsersRoutes.delete("/:id", DeleteUser);

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
UsersRoutes.post("/:id/flag", NotImplemented);

export default UsersRoutes;
