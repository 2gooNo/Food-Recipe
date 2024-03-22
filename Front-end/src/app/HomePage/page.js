import { useContext } from "react";
import NavigationBar from "../Navigation-Bar/page";
import styles from "./style.css";
// import { contextUsage } from "../../Context/themeProvider";

export default function HomePage() {
  // const {values}= useContext(contextUsage)
  // console.log(values)
  return (
    <div className="body">
      <NavigationBar className="navigationBar" />
      <div className="contentContainer">
        <input placeholder="Search Bar" className="searchBar" />
        <div>{<div></div>}</div>
      </div>
    </div>
  );
}
