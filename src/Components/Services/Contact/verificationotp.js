import React, { useState } from "react";
import { auth } from "../../../firebase";
import {  signInWithPhoneNumber } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verificationotp = ({ onVerified }) => {
  const [phone, setPhone] = useState("+91");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (phone.length < 13) {
      // considering the initial '+91' prefix
      toast.error("Please enter a valid mobile number");
      return;
    }
    setHasFilled(true);
    setLoading(true);
    // generateRecaptcha();
    // let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setLoading(false);
        toast.success("SMS sent successfully");
        toast.success("Enter OTP which we send to the mobile number");
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error.message);
        setLoading(false);
        toast.error("Failed to send SMS, please try again");
      });
  };

  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // Verify OTP
      let confirmationResult = window.confirmationResult;
      setLoading(true);
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          let user = result.user;
          console.log(user);
          toast.success("User signed in successfully");
          onVerified(true);
          setLoading(false);
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error);
          toast.error("Incorrect OTP, please try again");
          onVerified(false);
          setLoading(false);
        });
    }
  };

  return (
    <div  style={{width:"%"}}>
      {!hasFilled ? (
        <form >
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            style={{ width: "51%", borderRadius: "10px 0px 0px 10px" }}
            className="p-3"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            pattern="[1-9]{1}[0-9]{9}"
            maxLength="13"
            minLength="13"
          />
          <button
            type="submit"
            className="btn btn-success py-3 mb-2 mt-1"
            style={{ borderRadius: "0px 10px 10px 0px" ,width:"24%"}}
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? "Sending.." : "Send "}
          </button>
        </form>
      ) : (
        <div>
          <input
            type="text"
            className="p-3 rounded-3"
            style={{ width: "75%" }}
            placeholder="Please enter your OTP"
            value={otp}
            onChange={verifyOtp}
          />
          {/* <button
            style={{ borderRadius: "0px 10px 10px 0px" ,width:"30%"}}
            className="btn btn-success p-3 mb-2 mt-1"
          >
            {loading ? "Send." : " OTP"}
          </button> */}
        </div>
      )}
      <div id="recaptcha"></div>
      <ToastContainer />
    </div>
  );
};

export default Verificationotp;


