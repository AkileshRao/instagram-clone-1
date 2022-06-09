import React, { useEffect } from 'react'
import { fetchPosts } from '../../services/PostService';

const Explore = () => {

  useEffect(() => {
    fetchPosts().then((res)=>{
      console.error('res',res);
    }).catch(error => console.log(error));
  }, [])

  return (
    <div>Explore</div>
  )

}

export default Explore