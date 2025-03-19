const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  author: String,
});

const Blog = mongoose.model("Blog", blogSchema, "blogs"); 

module.exports = Blog;
