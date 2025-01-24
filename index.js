const express = require("express");
const path = require("path");
const { dbConnection } = require("./config/db");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/userRoute");

const PORT = process.env.PORT || 3000;

// view Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// dbconnection
dbConnection();

//api  route
app.use("/api", userRoute);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server will be run on http://localhost:${PORT}`);
});
