import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import mysql2 from "mysql2";

dotenv.config();

export const sequelize = new Sequelize(
  "movie-test",
  "askaround",
  "@Sk@r0und@mys@db",
  {
    host: "askaround-stg.mysql.database.azure.com",
    // @ts-ignore
    dialect: "mysql", // Ensure this is set to 'mysql'
    port: 3308,
    dialectModule: mysql2,
    logging: false,
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
