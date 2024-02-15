import { motion } from "framer-motion";
import { useState } from "react";
import videoBg from "../assets/CanoeTour.mp4";
import Main_Nav from "../components/home_nav";

const Feedback = () => {
  const [ename, setEName] = useState("");
  const [review, setReview] = useState("");

  // const navigate = useNavigate();

  // const onButtonClick = () => {
  //     // You'll update this function later...
  // }

  return (
    <>
      <div className="main">
        <video src={videoBg} autoPlay loop muted />

        <Main_Nav />
        {/* <div className="text_container"> */}
        {/* <h1 className="no_video_text_feed">
            Send us your Valuable Feedback!
          </h1> */}
        {/* </div> */}
        <div>
          <div className="parallax_con">
            <div className="img1_title4">
              <motion.div
                whileHover={{ scale: 1.7, rotate: 360 }}
                // whileTap={{ scale: 1.0, rotate: 360 }}
                className="header_img1"
              >
                Voicings..
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
                At Jublify, we value your feedback as it helps us continually
                improve and tailor our services to meet your needs. Whether you
                had a fantastic birthday celebration or have suggestions for
                enhancements, we want to hear from you. 
                {/* Your thoughts matter,
                and we're committed to ensuring your experience with Jublify
                exceeds expectations. Share your feedback with us today and
                let's make every celebration even more memorable together! */}
              </div>
            </div>
          </div>
          <div className={"mainContainer"}>
            <div className={"titleContainer"}>
              <div>Feedback form</div>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                value={ename}
                type="text"
                placeholder="Enter the Event's Name"
                onChange={(ev) => setEName(ev.target.value)}
                className={"inputBox"}
              />
              {/* <label className="errorLabel">{emailError}</label> */}
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                value={review}
                type="text"
                placeholder="Enter your Feedback here..."
                onChange={(ev) => setReview(ev.target.value)}
                className={"inputBox_Feed"}
              />
              {/* <label className="errorLabel">{emailError}</label> */}
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                className={"inputBox_Button"}
                type="button"
                // onClick={onButtonClick}
                value={"Send Review"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feedback;
