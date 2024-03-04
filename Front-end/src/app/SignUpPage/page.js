"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState({});
  const [isGood, setIsGood] = useState(true);
  const router = useRouter();

  const handleSignUp = async () => {
    const data = await axios
      .post(`http://localhost:8000/signUp`, {
        email: signUpData.email,
        password: signUpData.password,
        userName: signUpData.userName,
      })
      .catch((error) => setIsGood(false));
    if (isGood == true) {
      router.push("../LogInPage");
      sessionStorage.setItem("isLoggedIn", "LoggedIn");
    } else {
      alert("Email is already taken");
    }

    console.log(data);
  };

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <div>
          <input
            type="text"
            id="emailInput"
            name="emailInput"
            value={signUpData.email}
            onChange={(e) =>
              setSignUpData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Mail"
            className="border-[2px] border-white rounded-[40px] w-[500px] h-[40px] outline-none placeholder-[grey]"
          />
          <input
            type="text"
            id="usernameInput"
            name="usernameInput"
            value={signUpData.userName}
            onChange={(e) =>
              setSignUpData((prev) => ({ ...prev, userName: e.target.value }))
            }
            placeholder="Username"
            className="border-[2px] border-white rounded-[40px] w-[500px] h-[40px] outline-none placeholder-[grey]"
          />
          <input
            type="password"
            id="passwordInput"
            name="passwordInput"
            value={signUpData.password}
            onChange={(e) =>
              setSignUpData((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="Password"
            className="border-[2px] border-white rounded-[40px] w-[500px] h-[40px] outline-none placeholder-[grey]"
          />
          <button onClick={handleSignUp}>Sign up</button>
        </div>
      </div>
    </div>
  );
}
