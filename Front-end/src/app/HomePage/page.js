import NavigationBar from "../Navigation-Bar/page";

export default function HomePage() {
  return (
    <div>
      <NavigationBar />
      <div>
        <input placeholder="Search Bar" />
        <div>Random Recipes</div>
      </div>
    </div>
  );
}
