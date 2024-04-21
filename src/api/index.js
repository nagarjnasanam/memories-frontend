import axios from 'axios'
const url = 'http://localhost:5000/posts'
export const fetPosts = async ()=> await axios.get(url)
export const createPost = async(newPost)=> await axios.post(url,newPost)