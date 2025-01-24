const express = require("express");
const route = express.Router();
const { signUpController } = require("../controller/UserController");
const { signupValidator } = require("../helper/userValidator");

route.post("/signup", signupValidator, signUpController);

module.exports = route;
