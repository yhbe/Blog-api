const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: String, required: true }
});

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog