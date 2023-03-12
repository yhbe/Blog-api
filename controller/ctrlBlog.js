const Blog = require("../controller/ctrlBlog")

module.exports = {
  post: async(req,res) => {
    try{
      const newPost = new Blog({
        author: req.body.author,
        title: req.body.title,
        body: req.body.body,
        date: req.body.date
      });
      const savedPost = newPost.save()
      return res.status(201).json({message: "Post created"})
    } catch (error){
      return res.status(404).json({message: error.message})
    }
    
  },
  // get: {

  // },
}