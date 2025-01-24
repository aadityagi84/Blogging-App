const mysql = require("mysql2");
require("dotenv").config();

const { DB_USER, DB_Host, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_Host,
  user: DB_USER,
  password: DB_PASSWORD,
});

const dbConnection = async () => {
  try {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error in DB connection:", err);
        return;
      }

      // Create Database if it doesn't exist
      connection.query(
        `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``,
        (err) => {
          if (err) {
            console.error("Error in creating database:", err);
            connection.release();
            return;
          }
          console.log("Database created successfully.");

          // Use the newly created database
          connection.query(`USE \`${DB_NAME}\``, (err) => {
            if (err) {
              console.error("Error in selecting database:", err);
              connection.release();
              return;
            }
            console.log("Database selected successfully.");

            // Create the users table if it doesn't exist
            const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL ,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL,
    role INT NOT NULL DEFAULT 2,
    image_url VARCHAR(255) NOT NULL DEFAULT '../public/avtar.avif', 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)

  )`;

            connection.query(createTableQuery, (err) => {
              if (err) {
                console.error("Error in creating table:", err);
              } else {
                console.log("Table created successfully.");
              }
              connection.release();
            });
          });
        }
      );
    });
  } catch (error) {
    console.error("Error in dbConnection:", error);
  }
};

module.exports = { dbConnection, pool };
