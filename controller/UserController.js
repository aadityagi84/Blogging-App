const bcrypt = require("bcrypt");
const { pool } = require("../config/db");
const { validationResult } = require("express-validator");

const signUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array()[0].msg });
    }

    // Input validation
    if (!name) {
      return res.status(400).send({ msg: "Name is required" });
    }
    if (!email) {
      return res.status(400).send({ msg: "Email is required" });
    }
    if (!password) {
      return res.status(400).send({ msg: "Password is required" });
    }

    // Check if email already exists
    pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, rows) => {
        if (err) {
          console.error("Error checking email:", err);
          return res
            .status(500)
            .send({ msg: "Error checking email", error: err });
        }

        // If email already exists, send a response indicating it's taken
        if (rows.length > 0) {
          return res.status(400).send({ msg: "Email already in use" });
        }

        // Hash the password for security
        const hashedPassword = await bcrypt.hash(password, 10);

        // Proceed with user insertion
        pool.query(
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
          [name, email, hashedPassword],
          (err, result) => {
            if (err) {
              console.error("Error inserting user:", err);
              return res
                .status(500)
                .send({ msg: "Error creating user", error: err });
            }
            res.status(201).send({
              msg: "User created successfully",
              userId: result.insertId,
            });
            return;
          }
        );
      }
    );
  } catch (error) {
    console.error("Error in sign-up controller:", error);
    res.status(500).send({ msg: "Server error", error });
  }
};

const signInController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signUpController };
