import React, { useState } from 'react'

const BlogForm = ({onCreate}) => {

    const [formData , setFormData] = useState({title:"",content:"",author:""});

    const handlesubmit = (e) => {
        e.preventDefault();
        onCreate(formData);
        setFormData({title:"",content:"",author:""});
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="">
          Title
          <input
            type="text"
            placeholder="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </label>

        <br />
        <label htmlFor="">
          Content
          <textarea
            placeholder="Content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
        </label>

        <br />

        <label htmlFor="">
          Author
          <input
            type="text"
            placeholder="author"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />
        </label>
        <br />
        <button>Create blog</button>
      </form>
    </div>
  );
}

export default BlogForm
