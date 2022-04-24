import express, { Router } from "express";
import {
  FetchPost,
  FetchPosts,
  CreateNewPost,
  ArchivePost,
  FlagPost,
} from "../controllers/PostsController";

const PostsRoutes: Router = express.Router();

/**
 * A post type
 * @typedef {object} Post
 * @property {integer} id.required
 * @property {integer} parent.required
 * @property {integer} author.required
 * @property {string} content.required
 * @property {boolean} expired.required
 * @property {string} createdAt.required
 */

/**
 * POST /posts
 * @tags Posts
 * @summary Create new post
 * @param {object} request.body.required
 * @example request - payload example
 * {
 *   "author": "",
 *   "parent": "",
 *   "content": ""
 * }
 */
PostsRoutes.post("/", CreateNewPost);

/**
 * GET /posts
 * @tags Posts
 * @summary Fetch posts
 * @param {string} page.query
 */
PostsRoutes.get("/", FetchPosts);

/**
 * GET /posts/{id}
 * @tags Posts
 * @summary Fetch details of a post
 * @param {string} id.path
 */
PostsRoutes.get("/:id", FetchPost);

/**
 * PUT /posts/{id}/{flag}
 * @tags Posts
 * @summary Flag a post
 * @param {string} id.path.required
 * @param {string} flag.path.required
 */
PostsRoutes.put("/:id/:flag", FlagPost);

/**
 * DELETE /posts/{id}
 * @tags Posts
 * @summary Archive a post
 * @param {string} id.path.required
 */
PostsRoutes.delete("/:id", ArchivePost);

export default PostsRoutes;
