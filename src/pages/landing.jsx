// import * as React from "react";
import { motion } from "framer-motion";
import videoBg from "../assets/sample.mp4";
import Landing_Nav from "../components/landing_nav";

// import Main_Nav from "../components/home_nav";npm

const Landing = () => {
  return (
    <>
      <div className="main">
        <video src={videoBg} autoPlay loop muted />
        <Landing_Nav />
        <div className="title">
          <motion.div
            className="header"
            whileHover={{ scale: 1.7, rotate: 360 }}
            whileTap={{ scale: 1.0, rotate: 360 }}
          >
            Jubilify!
          </motion.div>
          <br></br>
          <div className="delay">
            Your premier destination for expert event management and hassle-free
            booking. Let us turn your special moments into unforgettable
            memories.
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
