import { Link } from "react-router-dom";
import './NavBer.css'
const NavBer = () => {
  return (
    <div>
      <h2>my website</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">posts</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default NavBer;
