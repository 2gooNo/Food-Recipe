"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./LogInPage.css";
import LockSvg from "../../../utils/lock-svg";
import MailSvg from "../../../utils/mail-svg";

export default function LogInPage() {
  const [loginData, setLoginData] = useState({});
  const router = useRouter();

  const token = window.localStorage.getItem("token");

  const handleLogIn = async () => {
    const data = await axios
      .post(`http://localhost:8000/logIn`, {
        email: loginData.email,
        password: loginData.password,
        userName: loginData.userName,
      })
      .catch((error) => alert("error"));
    window.localStorage.setItem("token", data.data.token);
  };

  useEffect(() => {
    if (token) {
      router.push("/HomePage");
    }
  }, [token]);
  const SignUpPage = async () => {
    router.push("/SignUpPage");
  };
  const forgotpassword = async () => {
    router.push("/RecoverPassword");
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
