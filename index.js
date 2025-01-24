const express = require("express");
const path = require("path");
const { dbConnection } = require("./config/db");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// middleware
// Allow requests from your frontend (React app)
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Allow cookies or authorization headers (if needed)
  })
);

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
