import NavigationBar from "../Navigation-Bar/page";
import styles from "./style.css";

export default function HomePage() {
  return (
    <div className="body">
      <NavigationBar className="navigationBar" />
      <div className="contentContainer">
        <input placeholder="Search Bar" className="searchBar" />
        <div>
          {
            
              <div></div>
          }
        </div>
      </div>
    </div>
  );
}
