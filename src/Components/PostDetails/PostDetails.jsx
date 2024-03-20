import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    return (
        <div>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
        </div>
    );
};

export default PostDetails;