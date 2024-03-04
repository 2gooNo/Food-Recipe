"use client";

export default function Home() {
  return (
    <div>
      <div className="flex gap-[150px] justify-around items-center pt-[20px]">
        <img className="w-[210px] h-[70px]" src="Taste.png" />
        <div className="text-[20px] flex justify-between align-center flex-row gap-[20px]">
          <div className="outerdiv_category">
            <h3>Homepage</h3>
            <img className="arrow_down" src="down.png" />
          </div>
          <div className="outerdiv_category">
            <h3>Recipe Page</h3>
            <img className="arrow_down" src="down.png" />
          </div>
          <div className="outerdiv_category">
            <h3>Pages</h3>
            <img className="arrow_down" src="down.png" />
          </div>
          <div className="outerdiv_category">
            <h3>Buy</h3>
          </div>
        </div>
        <div className="flex gap-[40px] justify-center items-center">
          <img className="w-[40px] h-[40px]" src="search.webp" />
          <img className="w-[40px] h-[40px]" src="default.png" />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
