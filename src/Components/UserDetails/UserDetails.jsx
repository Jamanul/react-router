import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const {name,email}=user;
  console.log(user)
  return (
    <div>
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default UserDetails;
