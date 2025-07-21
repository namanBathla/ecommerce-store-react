import { NavLink } from "react-router-dom";
import '../index.css';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [itemCount, setItemCount] = useState(0)
  return (
    <div className="bg-slate-900 h-16 w-full text-white flex gap-4 px-8 py-4 justify-between items-center">
      <div className="logo">
        <NavLink to="/" className="font-bold">ECOM</NavLink>
      </div>
      <div className="nav flex gap-8">
        <NavLink 
        className={({ isActive }) =>`${isActive ? "bg-slate-700 text-white" : "text-gray-300 hover:bg-slate-600"}`} 
        to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
      <div className="flex gap-4">
        <NavLink to="/profile" className="text-lg"><FaUser /></NavLink>
        <NavLink to="/cart" className="flex text-lg">
          <FaShoppingCart />
          <span className="absolute ml-5">{itemCount}</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
