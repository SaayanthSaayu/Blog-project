import React from 'react'

const BlogItem = ({blog , onEdit , onDelete}) => {
  return (
    <li>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <small>By {blog.author}</small>
      <br />
      <div className="button-group">
        <button onClick={() => onEdit(blog)}>Edit</button>
        <button onClick={() => onDelete(blog._id)}>Delete</button>
      </div>
    </li>
  );
}

export default BlogItem;
