const Blog = require("../models/modleBlog")

module.exports = {
  post: async(req,res) => {
    try{
      const newPost = new Blog({
        author: req.body.author,
        title: req.body.title,
        body: req.body.body,
        date: req.body.date,
        comments: req.body.comments || [],
      });
      await newPost.save()
      return res.status(201).json({message: "Post created"})
    } catch (error){
      return res.status(404).json({message: error.message})
    }
    
  },
  get: async(req,res) => {
    try {
      const blogs = await Blog.find()
      res.json(blogs)
    } catch(error){
      console.log(error)
      res.status(500).json({message: "Error getting messages"})
    }
  },
  addAComment: async (req, res) => {
  const { id } = req.params
  const { author, text } = req.body

  try {
    const blog = await Blog.findById(id)

    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" })
    }

    blog.comments.push({ author, text })
    await blog.save()

    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
}