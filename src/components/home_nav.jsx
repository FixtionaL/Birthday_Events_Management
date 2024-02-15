// import React from "react";
import { Link } from "react-router-dom";
// import logo from '../assets/inklogo-removebg-preview.png'
const Main_Nav = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="others">
        {" "}
        Jubilify!
      </Link>
      {/* <Link to="/about" className="others">
        {" "}
        About
      </Link> */}
      <Link to="/booking" className="others">
        {" "}
        Booking
      </Link>
      <Link to="/feedback" className="others">
        {" "}
        Feedback
      </Link>
      <Link to="/profile" className="others">
        {" "}
        Profile
      </Link>
      <Link to="/" className="others">
        {" "}
        Log Out!
      </Link>
    </div>
  );
};

export default Main_Nav;
