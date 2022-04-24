import { databaseConfig } from "./../config/database.config";
import { PostModel } from "./PostModel";
import { UserModel } from "./UserModel";

const Sequelize = require("sequelize");
export const database = new Sequelize(databaseConfig);

// Load models
export const User = database.define("users", UserModel);
export const Post = database.define("posts", PostModel);

// Automatically create all tables
(async () => {
  await database
    .sync()
    .then(() => {
      console.log(`[DATABASE]: Synchronized successfully`);
    })
    .catch((err: any) => {
      console.error("🚩Unable to connect to the database:", err);
    });
})();
