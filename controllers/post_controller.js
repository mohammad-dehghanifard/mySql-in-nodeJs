const Post = require("../models/post")

exports.getPosts = async(req,res) =>  {
    const[posts,_] = await  Post.getAll()
    res.status(200).json(posts)
}

exports.getPostsById = async (req,res) => {
    const [post,_] = await Post.getPostById(req.params.id);
    res.status(200).json(
        {
            "success" : true,
            "post": post
        }
    )
}

exports.createdPost = async (req,res) => {
    const post = new Post(req.body.title,req.body.content)
   const result =  await post.save()
    res.json({
        "success" : true,
        "result" : result
    })
}