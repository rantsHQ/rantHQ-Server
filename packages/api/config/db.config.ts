const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  // The `host` parameter is required for other databases
  // host: 'localhost'
  dialect: "sqlite",
  storage: "./database.sqlite",
});

// Test db connection
sequelize
  .authenticate()
  .then(() => {
    console.log("💿︎Connection has been established successfully.");
  })
  .catch((err: any) => {
    console.error("🚩Unable to connect to the database:", err);
  });
