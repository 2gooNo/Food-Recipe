"use client";

import { useRouter } from "next/navigation";
import styles from "./style.css";

export default function NavigationBar() {
  const router = useRouter();

  return (
    <div className="navigation">
      <div className="logoRecipeContainer">
        <div className="logo"></div>  
        <div>Recipes</div>
      </div>
      <div className="userIcon"></div>  
    </div>
  );
}
