import { NavLink } from "react-router-dom";
import '../index.css';
function Navbar() {
  return (
    <div className="bg-slate-900 h-16 w-full text-white flex gap-4 p-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile/user1">User</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
}

export default Navbar;
