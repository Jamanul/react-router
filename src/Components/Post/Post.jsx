import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id,title}=post;
    const userStyle ={
        border: '2px solid yellow',
        borderRadius : '20px',
        marginBottom:'20px' 
    }
    return (
        <div style={userStyle}>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>show details</Link>
        </div>
    );
};

export default Post;