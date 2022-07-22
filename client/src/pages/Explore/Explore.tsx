import React, { useEffect, useState } from 'react'
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid';
import { fetchPosts } from '../../services/PostService';

const Explore = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect( () => {
    getPosts();
  }, [])

  const getPosts = async () => {
    const postsFromResponse: any = await fetchPosts();
    setPosts([postsFromResponse.data.posts]);
  };

  return (
    <div className='grid grid-cols-3 gap-4'>
       <ImagesGrid posts={posts} />
    </div>
  )

}

export default Explore