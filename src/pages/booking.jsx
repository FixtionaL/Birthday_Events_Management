import { motion } from "framer-motion";
import React, { useState } from "react";
import videoBg from "../assets/sample_5.mp4";
import Main_Nav from "../components/home_nav";

const Booking = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [capacity, setCapacity] = useState("");

  // const navigate = useNavigate();

  // const onButtonClick = () => {
  //     // You'll update this function later...
  // }

  return (
    <>
      <div className="main">
        <video src={videoBg} autoPlay loop muted />
        <Main_Nav />
        {/* <div className="text_container">
        <h1 className="no_video_text">
            This is the page that will be used to book Birthday events for our Users!
        </h1>
    </div> */}
        <div>
          <div className="parallax_con">
            <div className="img1_title4">
              <motion.div
                whileHover={{ scale: 1.7, rotate: 360 }}
                // whileTap={{ scale: 1.0, rotate: 360 }}
                className="header_img1"
              >
                VenueEase..
              </motion.div>
              <br></br>
              {/* <div className="img1_delay-1500">
              Welcome to Jublify, your one-stop destination for crafting the
              perfect birthday experience. Whether you're planning a grand
              celebration or an intimate gathering, Jublify has you covered. Say
              goodbye to stress and hello to seamless event management with our
              expert team by your side. From concept to confetti, we're here to
              turn your birthday dreams into unforgettable memories.
            </div> */}
            </div>
            <div className="img1_title3">
              <motion.div
                whileHover={{ scale: 1.7, rotate: 360 }}
                // whileTap={{ scale: 1.0, rotate: 360 }}
                className="header2_img1"
              >
                {/* Intuitive.. */}
              </motion.div>
              <br></br>
              <div className="img1_delay-1500-2">
                With Jublify, booking your ideal event venue is as effortless as
                blowing out birthday candles. Our intuitive platform empowers
                you to browse through a curated selection of venues, each
                meticulously chosen to suit your unique preferences. From
                enchanting ballrooms to cozy cafes, we offer a diverse range of
                options to match every style and budget. Simply select your
                desired venue, customize your booking details, and leave the
                rest to us!
              </div>
            </div>
          </div>
          <div className={"mainContainer"}>
            <div className={"titleContainer"}>
              <div>Your Event!</div>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                value={name}
                type="text"
                placeholder="Enter the Organiser's Name"
                onChange={(ev) => setName(ev.target.value)}
                className={"inputBox"}
              />
              {/* <label className="errorLabel">{emailError}</label> */}
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                value={address}
                type="text"
                placeholder="Enter your Address here"
                onChange={(ev) => setAddress(ev.target.value)}
                className={"inputBox"}
              />
              {/* <label className="errorLabel">{emailError}</label> */}
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                value={contact}
                placeholder="Organiser's Contact"
                type="contact"
                onChange={(ev) => setContact(ev.target.value)}
                className={"inputBox"}
              />
              {/* <label className="errorLabel">{passwordError}</label> */}
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                value={capacity}
                placeholder="Enter the possible capacity"
                type="number"
                onChange={(ev) => setCapacity(ev.target.value)}
                className={"inputBox"}
              />
              {/* <label className="errorLabel">{passwordError}</label> */}
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                className={"inputBox_Button"}
                type="button"
                // onClick={onButtonClick}
                value={"Finish"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Booking;
