
import Footer from "../Footer/Footer";
import NavBer from "../NavBer/NavBer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBer></NavBer>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
