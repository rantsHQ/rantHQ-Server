import { databaseConfig } from "./../config/database.config";

const Sequelize = require("sequelize");
const sequelize = new Sequelize(databaseConfig);

import { UserModel } from "./UserModel";
import { PostModel } from "./PostModel";

// Load models
sequelize.define("user", UserModel);
sequelize.define("post", PostModel);

// Automatically create all tables
(async () => {
  await sequelize
    .sync()
    .then(() => {
      console.log(`[DATABASE]: Synchronized successfully`);
    })
    .catch((err: any) => {
      console.error("🚩Unable to connect to the database:", err);
    });
})();
