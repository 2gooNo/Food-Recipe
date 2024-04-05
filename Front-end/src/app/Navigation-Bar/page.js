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

  function ProfilePicture() {
    router.push("/Profile");
  }
  function Category() {
    router.push("/categories");
  }
  function Favorites() {
    router.push("/favorites");
  }

  return (
    <div className="navigation">
      <div className="logoRecipeContainer">
        <div className="logo"></div>
        <div>Recipes</div>
      </div>
      {isLoggedIn ? (
        <div>
          <h3 onClick={() => ProfilePicture()}>profile picture </h3>
          <button onClick={() => LogOut()}>Log Out</button>
          <h3 onClick={() => Category()}>category</h3>
          <h3 onClick={() => Favorites()}>favorites</h3>
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
