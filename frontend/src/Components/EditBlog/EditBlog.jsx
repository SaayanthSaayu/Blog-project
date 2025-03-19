import React, { useEffect, useState } from 'react'

const EditBlog = ({ blogEdit , onUpdate }) => {

    const [formData , setFormData] = useState(blogEdit || {title:"",content:"",author:""});

    useEffect( ()=> {
        if(blogEdit){
            setFormData(blogEdit);
        }
    },[blogEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    }

  return (
    <>
        {blogEdit ? (
            <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Title
          <input
            type="text"
            
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
            
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />
        </label>
        <br />
        <button>Update blog</button>
      </form>
        ):(
            <p>No blog selected for editing</p>
        )}
    </>
  )
}

export default EditBlog
