import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg font-medium">
        <Link to="/">Home</Link>
        <Link to="/basket">{<Cart />}</Link>
      </div>
      <h1 className="text-3xl text-center mt-2 py-2">Ecommerce STORE</h1>
    </>
  );
};

export default Navbar;
