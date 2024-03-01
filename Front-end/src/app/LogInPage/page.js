"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./LogInPage.module.css"; 
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
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.title}>Log In</h1>
        <p className={styles.p}>Built with lite forms.</p>
        <div className={styles.border}>bndi</div>
        <div className={styles.box}>
          <input
            type="text"
            id="emailInput"
            name="emailInput"
            value={LogInData.email}
            onChange={(e) =>
              setLogInData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Mail"
            className={styles.inputField}
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
            className={styles.inputField}
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
            className={styles.inputField}
          />
          <button onClick={handleLogIn} className={styles.button}>
            Sign in
          </button>
        </div>
        <div className={styles.whiteBottom}></div>
      </div>
    </div>
  );
}
