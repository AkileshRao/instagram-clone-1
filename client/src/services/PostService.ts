import axios from "axios";

const baseURL = 'http://localhost:5000/';

export const fetchPosts = async ()=> {
  try {
    const response = await axios.get(`${baseURL}posts`);
    return response.data;
  } catch (error) {
    return error;
  }
}



