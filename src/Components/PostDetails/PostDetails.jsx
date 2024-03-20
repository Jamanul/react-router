import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate =useNavigate();
    const params=useParams();
    const {postId}=params;
    console.log(params)
    console.log(postId)
    const handleGoBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2></h2>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;