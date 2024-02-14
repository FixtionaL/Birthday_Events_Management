import React, { useState } from "react";
import Main_Nav from '../components/home_nav';
import videoBg from "../assets/sample_5.mp4";

const Booking = () => {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [contact , setContact] = useState("")
    const [capacity, setCapacity] = useState("")
    
  
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
  )
};
export default Booking