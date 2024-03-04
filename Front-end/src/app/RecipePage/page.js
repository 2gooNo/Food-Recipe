import Image from "next/image";
export default function RecipePage() {
  return (
    <div>
      <div className="flex justify-evenly mt-[30px]">
        <img src="logo.png" width={140} height={50}></img>
        <div className="flex justify-center gap-[100px] font-semibold items-center">
          <p>HomePage</p>
          <p>Recipe Page</p>
          <p>Pages</p>
          <p>Buy</p>
        </div>
        <div className="flex gap-[40px]">
          <Image src={"search.svg"} width={30} height={30} alt="search" />
          <Image
            src={"/profile.svg"}
            width={45}
            height={45}
            alt="profile picture"
          />
        </div>
      </div>
      <div className="flex gap-[40px] justify-end mt-[120px] mr-[350px]">
        <Image src={"download.svg"} height={20} width={30} alt="download" />
        <Image src={"save.svg"} height={45} width={45} alt="save" />
      </div>
      <div>
        <h1 className="text-6xl font-bold">Strawberry Cream Cheese</h1>
      </div>
    </div>
  );
}
