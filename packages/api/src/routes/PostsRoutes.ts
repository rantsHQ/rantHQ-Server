import express, { Router } from "express";
import { GetPost, GetPosts, DeletePost } from "../controllers/PostsController";

const PostsRoutes: Router = express.Router();

/**
 * A post type
 * @typedef {object} Post
 * @property {integer} id.required
 * @property {integer} user.required
 * @property {string} content.required
 * @property {string} createdAt.required
 */

/**
 * GET /posts
 * @tags Posts
 * @summary Fetch all posts
 * @return {array<Post>} 200 - Success response
 */
PostsRoutes.get("/", GetPosts);

/**
 * GET /posts/{id}
 * @tags Posts
 * @summary Fetch details of a user
 * @param {string} id.path - Post id
 * @return {Post} - 200 - success response
 */
PostsRoutes.get("/:id", GetPost);

/**
 * DELETE /posts/{id}
 * @tags Posts
 * @summary Deactivate a user
 * @param {string} id.path.required - Post id
 * @return {Post} - 200 - success response
 */
PostsRoutes.delete("/:id", DeletePost);

export default PostsRoutes;
