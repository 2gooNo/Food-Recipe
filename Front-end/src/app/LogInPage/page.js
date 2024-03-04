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
      sessionStorage.setItem("isLoggedIn", "LoggedIn");
    } else {
      alert("Email is not found");
    }

    console.log(data);
  };
  function GoBack() {
    router.push("/");
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-[30px]">
      <h3
        onClick={() => GoBack()}
        className="GoBack border-b-[2px] border-[black] text-[20px] hover:border-[grey] hover:text-[grey] transition-colors duration-400 ease-in-out delay-200"
      >
        Go Back
      </h3>

      <h1 className="text-[black] text-[23px] border-b-[1px] border-[black]">
        Log In
      </h1>

      <div className="flex flex-col bg-[black] w-[800px] h-[500px] rounded-[38px] gap-[40px] justify-center items-center">
        <div className="flex flex-col items-center gap-[40px] w-[600px] text-[grey]">
          <input
            type="text"
            id="emailInput"
            name="emailInput"
            value={LogInData.email}
            onChange={(e) =>
              setLogInData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Email"
            className="border-[2px] border-white rounded-[40px] w-[500px] h-[40px] outline-none placeholder-[grey]"
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
            className="border-[2px] border-white rounded-[40px] w-[500px] h-[40px] outline-none placeholder-[grey]"
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
            className="border-[2px] border-white rounded-[40px] w-[500px] h-[40px] outline-none placeholder-[grey]"
          />
          <button
            className="text-[white] border-[2px] border-[white] rounded-[15px] p-[5px] w-[100px] hover:bg-[white] hover:text-[black] transition-colors duration-400 ease-in-out delay-200"
            onClick={handleLogIn}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
