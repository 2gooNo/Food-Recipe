"use client";

import { useRouter } from "next/navigation";
import styles from "./style.css";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const LoggedItem = sessionStorage.getItem("isLoggedIn");
    if (LoggedItem !== null) {
      setIsLoggedIn(!isLoggedIn);
    }
  }, []);
  function LogOut() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.reload(false);
  }

  return (
    <div className="navigation">
      <div className="logoRecipeContainer">
        <div className="logo"></div>
        <div>Recipes</div>
      </div>
      {isLoggedIn ? (
        <div>
          <h3>profile picture </h3>
          <button onClick={() => LogOut()}>Log Out</button>
        </div>
      ) : (
        <div>
          <button onClick={() => router.push("/LogInPage")}>Log in </button>
          <button onClick={() => router.push("/SignUpPage")}>Sign Up</button>
        </div>
      )}
    </div>
  );
}
