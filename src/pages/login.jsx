import React, { useState } from "react";
// import Landing_Nav_2 from "../components/land_nav_2";
// import '../App.css';
import { useNavigate } from "react-router-dom";
import videoBg from "../assets/sample.mp4";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const Navigate = useNavigate();


  const handleChange = () => {
    Navigate("/home");
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch("/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (response.ok) {
  //       // Login successful, navigate to home page
  //       navigate("/home");
  //     } else {
  //       // Login failed, display error message
  //       const errorData = await response.json();
  //       setError(errorData.message);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setError("An error occurred. Please try again.");
  //   }
  // };

  return (
    <>
      {/* <Landing_Nav_2/> */}
      <div className="main">
        <video src={videoBg} autoPlay loop muted />

        <div className={"mainContainer"}>
          <div className={"titleContainer"}>
            <div>Login...</div>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={email}
              type="email"
              placeholder="Enter your email here"
              onChange={(ev) => setEmail(ev.target.value)}
              className={"inputBox"}
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <br />
          <div className={"inputContainer"}>
            <input
              value={password}
              placeholder="Enter your password here"
              type="password"
              onChange={(ev) => setPassword(ev.target.value)}
              className={"inputBox"}
            />
            <label className="errorLabel">{passwordError}</label>
          </div>
          <br />
          <div className={"inputContainer"}>
            {/* <Link to="/home"> */}
            <input
              className={"inputBox_Button"}
              onClick={handleChange}
              type="button"
              value={"Hop in!"}
            />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
