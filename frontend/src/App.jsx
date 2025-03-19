import { useState,useEffect } from 'react';
import { getBlogs,createBlog,updateBlog,deleteBlog} from "./api";
import BlogList from "./Components/BlogList/BlogList";
import BlogForm from "./Components/BlogForm/BlogForm";
import EditBlog from './Components/EditBlog/EditBlog';

import './App.css';

function App() {
  
  const [blogs , setBlogs] = useState([]);
  const [editBlog , setEditBlog] = useState();

  useEffect( () => {
    fetchBlogs();
  },[]);

  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  const handleCreateBlog = async (newBlog) => {
    const data = await createBlog(newBlog);
    fetchBlogs(data);
  }

  const handleEditBlog = async (blog) => {
    setEditBlog(blog);

  }

  const handleUpdateBlog = async (updatedBlog) => {
    await updateBlog(updatedBlog._id , updatedBlog);
    setEditBlog(null);
    fetchBlogs();
  }

  const handleDeleteBlog = async (blogId) => {
    await deleteBlog(blogId);
    fetchBlogs();
  }

  return (
    <>
      <h1>Add a blog</h1>
      {!editBlog ?(<BlogForm onCreate={handleCreateBlog} />)
      :(<EditBlog blogEdit={editBlog} onUpdate={handleUpdateBlog}/>)}
      
      <h1 style={{textDecoration:"underline"}}>My blogs</h1>
      <BlogList blogs={blogs} onEdit={handleEditBlog} onDelete={handleDeleteBlog} />
    </>
  )
}

export default App
