import { Link } from "react-router-dom";

const User = ({user}) => {
    const{id,name,email,phone}=user;
    const userStyle ={
        border: '2px solid yellow',
        borderRadius : '20px',
        marginBottom:'20px' 
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>
                {phone}
            </h4>
            <Link to={`/user/${id}`}>show more</Link>
        </div>
    );
};

export default User;