const Post = require("../models/post")

exports.getPosts = async(req,res,next) =>  {
    res.send("get all post")
}

exports.getPostsById = async (req,res,next) => {
    res.send("get post")
}

exports.createdPost = async (req,res,next) => {
    const post = new Post(req.body.title,req.body.content)
   const result =  await post.save()
    res.json({
        "success" : true,
        "result" : result
    })
}