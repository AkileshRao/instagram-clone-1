import { IPost } from '../../Interface/Posts';
// interface PostsProps{
//     posts: IPost[];
//  }

export default function ImagesGrid(posts: any) {
    let post = posts.posts[0];
    console.error('post',post);
  return (
    <>
        {
            post && post.map((post: any, id: number) => (
                <div key={id}>
                    <img src={post.media_url} alt="" className=""/>
                </div>
            ))
        }
    </>   
  )
}
