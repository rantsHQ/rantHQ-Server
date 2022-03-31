import express, { Router } from "express";
import {
  deletePost,
  fetchAllPosts,
  fetchSinglePost,
} from "../controllers/PostsController";

const routesPosts: Router = express.Router();

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
routesPosts.get("/", fetchAllPosts);

/**
 * GET /posts/{id}
 * @tags Posts
 * @summary Fetch details of a user
 * @param {string} id.path - Post id
 * @return {Post} - 200 - success response
 */
routesPosts.get("/:id", fetchSinglePost);

/**
 * DELETE /posts/{id}
 * @tags Posts
 * @summary Deactivate a user
 * @param {string} id.path.required - Post id
 * @return {Post} - 200 - success response
 */
routesPosts.delete("/:id", deletePost);

export default routesPosts;
