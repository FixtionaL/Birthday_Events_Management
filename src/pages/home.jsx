// import React from 'react'
import { motion } from "framer-motion";
import videoBg from "../assets/sample_2.mp4";
import Main_Nav from "../components/home_nav";

const Home = () => {
  return (
    <>
      <div className="main">
        <Main_Nav />
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        {/* <div className="content"> */}
        {/* <div className="land_nav"> */}
        {/* </div> */}
        <div className="parallax_con">
          <div className="img1_title">
            <motion.div
              whileHover={{ scale: 1.7, rotate: 360 }}
              // whileTap={{ scale: 1.0, rotate: 360 }}
              className="header_img1"
            >
              Experiential..
            </motion.div>
            <br></br>
            <div className="img1_delay-1500">
              Welcome to Jublify, your one-stop destination for crafting the
              perfect birthday experience. Whether you're planning a grand
              celebration or an intimate gathering, Jublify has you covered. Say
              goodbye to stress and hello to seamless event management with our
              expert team by your side. From concept to confetti, we're here to
              turn your birthday dreams into unforgettable memories.
            </div>
          </div>
          <div className="img1_title2">
            <motion.div
              whileHover={{ scale: 1.7, rotate: 360 }}
              // whileTap={{ scale: 1.0, rotate: 360 }}
              className="header2_img1"
            >
              Intuitive..
            </motion.div>
            <br></br>
            <div className="img1_delay-1500-2">
              At Jublify, we specialize in transforming your birthday visions
              into reality. With our intuitive platform and dedicated team,
              planning the perfect celebration has never been easier. From
              booking venues to coordinating entertainment, we handle every
              detail so you can focus on creating cherished moments with loved
              ones. Say hello to stress-free birthday planning and let Jublify
              make your special day truly unforgettable.
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Home;
