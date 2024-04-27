exports.getPosts = async(req,res,next) =>  {
    res.send("get all post")
}

exports.getPostsById = async (req,res,next) => {
    res.send("get post")
}

exports.createdPost = async (req,res,next) => {
    res.send("created post")
}