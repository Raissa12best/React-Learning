import { Link, NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    
    <div>  <nav className="navbar">
     
      <div className="logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
          alt="React Logo" 
        />
        <h2>MyApp</h2>
      </div>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
   
    </nav>
    <Outlet/>
    </div>

    
  );
}