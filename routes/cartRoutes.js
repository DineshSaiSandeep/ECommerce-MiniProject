//import express module
const express = require("express");
//create router instance
const router = express.Router();
//import cartApi
const cartApi = require("../apis/cartApis");
//Cart fetching
router.get("/fetch", cartApi.cart_fetch);
//Insert product into cart
router.post("/insert", cartApi.cart_insert);
//Update Cart Product
router.post("/update", cartApi.cart_update);
//Delete Cart Product
router.delete("/delete", cartApi.cart_delete);

//export router
module.exports = router;
