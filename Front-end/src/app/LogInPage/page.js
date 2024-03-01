"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function LogInPage() {
  const [LogInData, setLogInData] = useState({});
  const [isGood, setIsGood] = useState(true);
  const router = useRouter();

  const handleLogIn = async () => {
    const data = await axios
      .post(`http://localhost:8000/logIn`, {
        email: LogInData.email,
        password: LogInData.password,
        userName: LogInData.userName,
      })
      .catch((error) => setIsGood(false));
    if (isGood == true) {
      router.push("../HomePage");
    } else {
      alert("Email is not found");
    }

    console.log(data);
  };

  return (
    <div>
      <div>
        <h1>Log In</h1>
        <input
          type="text"
          id="emailInput"
          name="emailInput"
          value={LogInData.email}
          onChange={(e) =>
            setLogInData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Mail"
        />
        <input
          type="text"
          id="usernameInput"
          name="usernameInput"
          value={LogInData.userName}
          onChange={(e) =>
            setLogInData((prev) => ({ ...prev, userName: e.target.value }))
          }
          placeholder="Username"
        />
        <input
          type="password"
          id="passwordInput"
          name="passwordInput"
          value={LogInData.password}
          onChange={(e) =>
            setLogInData((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Password"
        />
        <button onClick={handleLogIn}>Sign up</button>
      </div>
    </div>
  );
}
