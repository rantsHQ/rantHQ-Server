import express, { Router } from "express";
import { NotImplemented } from "../controllers/MiscController";
import { GetPost, GetPosts, DeletePost } from "../controllers/PostsController";

const PostsRoutes: Router = express.Router();

/**
 * A post type
 * @typedef {object} Post
 * @property {integer} id.required
 * @property {integer} parent.required
 * @property {object} user.required
 * @property {string} content.required
 * @property {boolean} expired.required
 * @property {string} createdAt.required
 * @property {array<object>} children.required
 */

/**
 * GET /posts
 * @tags Posts
 * @summary Fetch posts
 * @param {string} page.query
 * @return {array<Post>} 200 - Success response
 */
PostsRoutes.get("/", GetPosts);

/**
 * POST /posts
 * @tags Posts
 * @summary Create new post
 * @return {array<Post>} 200 - Success response
 * @param {object} request.body.required
 * @example request - payload example
 * {
 *   "parent": "",
 *   "content": "",
 *   "expiry": ""
 * }
 */
PostsRoutes.post("/", NotImplemented);

/**
 * GET /posts/{id}
 * @tags Posts
 * @summary Fetch details of a user
 * @param {string} id.path
 * @return {Post} - 200 - success response
 */
PostsRoutes.get("/:id", GetPost);

/**
 * post /posts/{id}/flag
 * @tags Posts
 * @summary Flag a post
 * @return {object} 200 - Success response
 * @param {object} request.body.required
 * @example request - payload example
 * {
 *   "priority": "",
 *   "reason": ""
 * }
 */
PostsRoutes.get("/:id/flag", NotImplemented);

/**
 * DELETE /posts/{id}
 * @tags Posts
 * @summary Delete a post
 * @param {string} id.path.required
 * @return {object} - 200 - success response
 * @example request - payload example
 * {
 *   "priority": "",
 *   "reason": ""
 * }
 */
PostsRoutes.delete("/:id", DeletePost);

export default PostsRoutes;
