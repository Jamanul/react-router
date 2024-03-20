import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts =useLoaderData();
    const userStyle={
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '20px'
    }
    return (
        <div>
            <h2>total post:{posts.length} </h2>
            <div style={userStyle}>
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;