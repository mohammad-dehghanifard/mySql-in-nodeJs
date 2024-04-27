const express = require("express")
const controller = require("../controllers/post_controller")
const route = express.Router()

route.get("/getPost",controller.getPosts)
route.get("/getPost/:id",controller.getPostsById)
route.post("/createdPost",controller.createdPost)

module.exports = route;