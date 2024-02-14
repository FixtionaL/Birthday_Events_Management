// import React from "react";
import { Link } from "react-router-dom";
// import logo from '../assets/inklogo-removebg-preview.png'
const Landing_Nav = () => {
  return (
    <div className="navbar">
      <Link to="/register" className="others">
        {" "}
        Get Started!
      </Link>
      <Link to="/login" className="others">
        {" "}
        Log In! 
      </Link>
    </div>
  );
};

export default Landing_Nav;
