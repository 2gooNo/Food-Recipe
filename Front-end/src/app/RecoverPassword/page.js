"use client";
import { useState } from "react";
import axios from "axios";
import "./RecoverPassword.css";
import MailSvg from "../../../utils/mail-svg";

const sendResetCodeByEmail = async (email, code) => {
  try {
    // Implement sending reset code by email here
  } catch (error) {
    throw new Error("Failed to send reset code by email.");
  }
};

export default function RecoverPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toggle, setToggle] = useState("email");
  const [isLoading, setIsLoading] = useState(false);

  const handleRecoverPassword = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8000/forgot-password", {
        email: email,
      });
      setMessage(response.data.message);
      await sendResetCodeByEmail(email, response.data.resetToken);
      setToggle("code");
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="recoverPasswordContainer">
      {toggle === "email" && (
        <SendEmail
          setEmail={setEmail}
          email={email}
          message={message}
          handleRecoverPassword={handleRecoverPassword}
          isLoading={isLoading}
        />
      )}
      {toggle === "code" && <VerifyCode />}
    </div>
  );
}

const SendEmail = ({ setEmail, email, message, handleRecoverPassword, isLoading }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleRecoverPassword();
    }
  };

  return (
    <div className="recoverPasswordForm">
      <h1 className="recoverPassword">Recover Password</h1>
      <div className="input">
        <div className="image">
          <MailSvg height={25} width={25} />
        </div>
        <input
          type="email"
          id="emailInput"
          name="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb"
          disabled={isLoading}
          onKeyPress={handleKeyPress}
        />
      </div>
      <p className="message">{message}</p>
      <button onClick={handleRecoverPassword} className="button1" disabled={isLoading}>
        {isLoading ? "Sending..." : "Recover Password"}
      </button>
    </div>
  );
};

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyCode = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8000/verify-code", {
        code: code,
      });
      setVerificationMessage(response.data.message);
    } catch (error) {
      setVerificationMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleVerifyCode();
    }
  };

  return (
    <div className="recoverPasswordForm">
      <h1 className="recoverPassword">Verify Code</h1>
      <div className="input">
        <input
          type="text"
          id="codeInput"
          name="codeInput"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Verification Code"
          className="mb"
          disabled={isLoading}
          onKeyPress={handleKeyPress}
        />
      </div>
      <p className="message">{verificationMessage}</p>
      <button onClick={handleVerifyCode} className="button1" disabled={isLoading}>
        {isLoading ? "Verifying..." : "Verify Code"}
      </button>
    </div>
  );
};
