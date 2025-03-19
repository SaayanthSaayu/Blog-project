import axios from 'axios';

const API_URL = "http://localhost:5555/";


// fetch all blog
export const getBlogs = async () => {
    const response = await axios.get(API_URL);
    return response.data;    
}


// create blog
export const createBlog = async (blogData) => {
    const response = await axios.post(API_URL, blogData);
    return response.data;
}

//update blog
export const updateBlog = async (id,blogData) => {
    const response = await axios.put(`${API_URL}${id}`, blogData);
    return response.data;
}

// delete blog 
export const deleteBlog = async (id) => {
    const response = await axios.delete(`${API_URL}${id}`);
    return response.data;
}


