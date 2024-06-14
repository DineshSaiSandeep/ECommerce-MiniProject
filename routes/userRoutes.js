//import express module
const express = require("express");
//create router instance
const router = express.Router();
//import userApi
const userApi = require("../apis/userApis");
//users fetching
router.get("/fetch", userApi.user_all);
//user login Auth
router.post("/auth", userApi.user_auth);
//create user
router.post("/createUser", userApi.create_user);
//export router
module.exports = router;
