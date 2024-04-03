"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./LogInPage.css";
import LockSvg from "../../../utils/lock-svg";
import MailSvg from "../../../utils/mail-svg";
import { Back_End_Url } from "../../../back-url";
// import { Back_End_Url } from "../../../back-url";

export default function LogInPage() {
  const [loginData, setLoginData] = useState({});
  const [token, setToken] = useState("");
  const router = useRouter();


  const handleLogIn = async () => {
    const data = await axios
      .post(`${Back_End_Url}/logIn`, {
        email: loginData.email,
        password: loginData.password,
        userName: loginData.userName,
      })
      .catch((error) => alert("error"));
    window.localStorage.setItem("token", data.data.token);

    router.push("/");
  };


  const SignUpPage = async () => {
    router.push("/SignUpPage");
  };
  const forgotpassword = async () => {
    router.push("/RecoverPassword");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogIn();
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <div className="w-[357px]">
          <h1 className="login">LOGIN</h1>
        </div>
        <div className="inputContainer">
          <div className="input">
            <div className="image">
              <MailSvg height={25} width={25} />
            </div>
            <input
              type="text"
              id="emailInput"
              name="emailInput"
              value={loginData.email}
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Email"
              className="mb"
            />
          </div>
          <div className="br"></div>
          <div className="input">
            <div className="image">
              <LockSvg height={25} width={25} />
            </div>
            <input
              type="password"
              id="passwordInput"
              name="passwordInput"
              value={loginData.password}
              onChange={(e) =>
                setLoginData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              placeholder="Password"
              className="mb"
              onKeyPress={handleKeyPress}
            />
          </div>
          <p className="noaccount" onClick={SignUpPage}>
            Don't have an account?
          </p>
          <p className="forgotpassword" onClick={forgotpassword}>
            Forgot Password?
          </p>
        </div>
        <button onClick={handleLogIn} className="button1">
          Log In
        </button>
      </div>
    </div>
  );
}
