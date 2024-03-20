import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title}=post;
    const navigate = useNavigate();
    const userStyle ={
        border: '2px solid yellow',
        borderRadius : '20px',
        marginBottom:'20px' 
    }
    const handleShowDetails = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={userStyle}>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>show details</Link>
            <button onClick={ handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;