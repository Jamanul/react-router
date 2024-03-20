import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users= useLoaderData();
    const userStyle={
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '20px'
    }
    return (
        <div>
            <h2>Users: {users.length}</h2>
            <h2>this is the users</h2>

            <div style={userStyle}>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;