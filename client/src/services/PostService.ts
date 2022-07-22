import axiosInstance from '../utils/axios'

export const fetchPosts = async () => {
  try {
    console.log('Post service');
    return await axiosInstance.get(`posts`);
  } catch (error) {
    return error;
  }
}



