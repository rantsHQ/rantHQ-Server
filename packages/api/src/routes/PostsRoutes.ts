import express, { Router } from "express";
import {
  deletePost,
  fetchAllPosts,
  fetchSinglePost,
} from "../controllers/PostsController";

const routesPosts: Router = express.Router();

// GET: /posts
routesPosts.get("/", fetchAllPosts);

// GET: /posts/{id}
routesPosts.get("/:id", fetchSinglePost);

// DELETE: /posts/{id}
routesPosts.delete("/:id", deletePost);

export default routesPosts;
