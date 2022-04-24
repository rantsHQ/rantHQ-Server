import express, { Router } from "express";
import {
  DestroySessions,
  LoginUser,
  VerifyAccount,
} from "../controllers/AuthController";

const AuthRoutes: Router = express.Router();

/**
 * A AuthData type
 * @typedef {object} AuthData
 * @property {integer} id
 * @property {string} userName.required
 * @property {string} firstName.required
 * @property {string} lastName.required
 * @property {string} photo
 * @property {boolean} active
 * @property {string} lastLogin.required
 * @property {string} token.required
 */

/**
 * POST /auth
 * @tags Auth
 * @summary Login
 * @return {AuthData} - 200 - success response
 * @param {object} request.body.required
 * @example request - payload example
 * {
 *   "username": "",
 *   "password": ""
 * }
 */
AuthRoutes.post("/", LoginUser);

/**
 * PUT /auth
 * @tags Auth
 * @summary Verify an account
 * @return {AuthData} - 200 - success response
 * @param {object} request.body.required
 * @example request - payload example
 * {
 *   "token": ""
 * }
 */
AuthRoutes.put("/verify", VerifyAccount);

/**
 * DELETE /auth
 * @tags Auth
 * @summary Logout from all devices
 */
AuthRoutes.delete("/", DestroySessions);

export default AuthRoutes;
