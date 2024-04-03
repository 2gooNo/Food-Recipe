"use client";

import { useState } from "react";
import axios from "axios";
import "./SignUpPage.css";
import LockSvg from "../../../utils/lock-svg";
import MailSvg from "../../../utils/mail-svg";
import AccountSvg from "../../../utils/account-svg";
import { useRouter } from "next/navigation";
import { Back_End_Url } from "../../../back-url";

export default function SignUpPage() {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isGood, setIsGood] = useState(true);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      await axios.post(`${Back_End_Url}/signUp`, {
        userName: signupData.fullName,
        email: signupData.email,
        password: signupData.password,
      });
      router.push("../LogInPage");
    } catch (error) {
      setIsGood(false);
      alert("Sign Up failed");
    }
  };

  return (
    <div className="signupContainer">
      <div className="signupForm">
        <div className="w-[357px]">
          <h1 className="signup">SIGN UP</h1>
        </div>
        <div className="inputContainer">
          <div className="input">
            <div className="image">
              <AccountSvg height={30} width={30} />
            </div>
            <input
              type="text"
              id="fullNameInput"
              name="fullNameInput"
              value={signupData.fullName}
              onChange={(e) =>
                setSignupData((prev) => ({ ...prev, fullName: e.target.value }))
              }
              placeholder="Full Name"
              className="mb"
            />
          </div>
          <div className="input">
            <div className="image">
              <MailSvg height={30} width={30} />
            </div>
            <input
              type="text"
              id="emailInput"
              name="emailInput"
              value={signupData.email}
              onChange={(e) =>
                setSignupData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Email"
              className="mb"
            />
          </div>
          <div className="br"></div>
          <div className="input">
            <div className="image">
              <LockSvg height={30} width={30} />
            </div>
            <input
              type="password"
              id="passwordInput"
              name="passwordInput"
              value={signupData.password}
              onChange={(e) =>
                setSignupData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              placeholder="Password"
              className="mb"
            />
          </div>
        </div>
        <button onClick={handleSignUp} className="button1">
          Sign Up
        </button>
      </div>
    </div>
  );
}
