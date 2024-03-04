import styles from "./style.css";

export default function HomePage() {
  return (
    <div className="body">
      <img src="Logo.png"></img>
      <div className="navBar">
        <img className="SearchIcon" src="SearchIcon.png"></img>
        <div className="navTexts">
          <button className="navbarText">HomePage ?</button>
          <button className="navbarText">Recipe Page ?</button>
          <button className="navbarText">Pages ?</button>
          <button className="navbarText">Buy</button>
        </div>
        <img className="navMenuIcon" src="MenuIcon.png"></img>
      </div>
      <div className="suggestRecipe">

      </div>
    </div>
  );
}
