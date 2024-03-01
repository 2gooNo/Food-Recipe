"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./SignUpPage.module.css";

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState({});
  const [isGood, setIsGood] = useState(true);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:8000/signUp", {
        email: signUpData.email,
        password: signUpData.password,
        userName: signUpData.userName,
      });
      console.log(response.data);
      router.push("../LogInPage");
    } catch (error) {
      setIsGood(false);
      alert("Email is already taken");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.p}>Built with lite forms.</p>
        <div className={styles.border}>bndi</div>
        <div className={styles.box}>
          <input
            type="text"
            id="emailInput"
            name="emailInput"
            value={signUpData.email || ""}
            onChange={(e) =>
              setSignUpData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Mail"
            className={styles.inputField}
          />
          <input
            type="text"
            id="usernameInput"
            name="usernameInput"
            value={signUpData.userName || ""}
            onChange={(e) =>
              setSignUpData((prev) => ({ ...prev, userName: e.target.value }))
            }
            placeholder="Username"
            className={styles.inputField}
          />
          <input
            type="password"
            id="passwordInput"
            name="passwordInput"
            value={signUpData.password || ""}
            onChange={(e) =>
              setSignUpData((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="Password"
            className={styles.inputField}
          />
          <button onClick={handleSignUp} className={styles.button}>Sign up</button>
        </div>
        <div className={styles.whiteBottom}></div>
      </div>
    </div>
  );
}
