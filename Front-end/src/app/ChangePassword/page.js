"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Back_End_Url } from "../../../back-url";
import "./ChangePassword.css";

export default function ChangePassword({ email }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChangePassword = async () => {
    try {
      if (password !== confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }

      setIsLoading(true);
      const response = await axios.post(`${Back_End_Url}/updatePasswordByEmail`, {
        email: email,
        password: password,
      });
      setMessage(response.data.message);
      if (response.status === 200) {
        router.push("/Login");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="changePasswordContainer">
      <div className="changePasswordForm"> 
        <h1 className="changePassword">Change Password</h1> 
        <div className="input">
          <input
            type="password"
            id="passwordInput"
            name="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="mb"
            disabled={isLoading}
          />
        </div>
        <div className="input">
          <input
            type="password"
            id="confirmPasswordInput"
            name="confirmPasswordInput"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm New Password"
            className="mb"
            disabled={isLoading}
          />
        </div>
        <p className="message">{message}</p>
        <button onClick={handleChangePassword} className="button1" disabled={isLoading}>
          {isLoading ? "Changing Password..." : "Change Password"}
        </button>
      </div>
    </div>
  );
}
