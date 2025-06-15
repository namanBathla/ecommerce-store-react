import { NavLink } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <div className="flex gap-2 w-full">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/profile/user1">User</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/cart">Cart</NavLink>
    </div>

  )
}

export default Navbar