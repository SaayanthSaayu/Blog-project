const express = require("express");
const routes = express.Router();
const Blog = require("../models/blog");

routes.get("/", async (req, res) => {
  const blogs = await Blog.find().then((data) => res.json(data));
});


routes.post("/", async (req,res) => {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(200).json({msg:"susccs",blog});
})

routes.put("/:id", async (req, res) => {
    const id = req.params.id;
    const blog = await Blog.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(blog);
})

routes.delete("/:id",async(req,res) => {
    try{
        const id = req.params.id;
        await Blog.findByIdAndDelete(id);
        res.status(200).json({msg:"deleted succesfully"})
    }catch(er) {
        res.send("Error deleting ...",er.message)
    }
})
module.exports = routes;