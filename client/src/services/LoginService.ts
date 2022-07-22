import axiosInstance from '../utils/axios'

export const getToken = async (payload: { username: string; password: string; }) => {
    try {
      console.log('Login service : payload',payload);
      let resData = await axiosInstance.post(`login`,payload);
      console.log('resData',resData);
      localStorage.setItem('token',resData.data.token);
      return true
    } catch (error) {
      return error;
    }
}

export const checkValidToken = () => {
    const token = localStorage.getItem('token');
    console.error('token',token);
    if(token){}
}
  