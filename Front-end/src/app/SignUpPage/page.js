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
    } else {
      alert("Email is already taken");
    }

    console.log(data);
  };

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <input
          type="text"
          id="emailInput"
          name="emailInput"
          value={signUpData.email}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Mail"
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
        />
        <button onClick={handleSignUp}>Sign up</button>
      </div>
    </div>
  );
}
