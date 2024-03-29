import Image from "next/image";
export default function RecipePage() {
  return (
    <div className="w-full height-full">
      <div className=" flex flex-col items-center">
        {/* header start  */}
        <div className="flex justify-between mt-[30px] w-[1100px]">
          <img src="logo.png" width={140} height={50} />
          <div className="flex justify-center gap-[90px] font-semibold items-center">
            <p>HomePage</p>
            <p>Recipe Page</p>
            <p>Pages</p>
            <p>Buy</p>
          </div>
          <div className="flex gap-[40px]">
            <Image
              src={"search.svg"}
              width={0}
              height={0}
              alt="search"
              className="w-[30px] h-auto"
            />
            <Image
              src={"/profile.svg"}
              width={45}
              height={45}
              alt="profile picture"
            />
          </div>
        </div>
        {/* header end  */}
        <div className="flex ml-[355px]">
          <div className="flex justify-end gap-[40px] mt-[90px] mr-[350px] w-[1100px]">
            <Image
              src={"download.svg"}
              height={0}
              width={0}
              alt="download"
              className="w-[30px] h-[35px]"
            />
            <Image
              src={"save.svg"}
              height={0}
              width={0}
              alt="save"
              className="w-[40px] h-[35px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start w-[1100px] ">
          <h1 className="text-6xl font-bold mt-[50px]">
            Strawberry Cream Cheesecake
          </h1>
          <div className="flex mt-[30px] items-center">
            <Image
              src={"/profile.svg"}
              width={45}
              height={45}
              alt="profile picture 2"
            />
            <p className=" mr-[40px]">Tricia Albert</p>
            <Image
              src={"calendar.svg"}
              width={0}
              height={0}
              alt="calendar"
              className="w-[18px] h-auto"
            />
            <p className=" mr-[40px] ml-[10px]">Yesterday</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[20px] pt-[30px] w-[1100px] border-solid border-t border-gray-250">
          <p className="pb-[40px]">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
          <img
            src="cheeseCake.jpeg"
            height={0}
            width={0}
            alt="Strawberry Cheesecake"
            className="w-[1100px] h-auto rounded-xl"
          />
        </div>
        {/* ingredient + nutrition facts + instructions start  */}
        <div className="flex">
          {/* ingredient + nutrition facts start */}
          <div className="mr-[250px]">
            <div className="mt-[60px]">
              <h1 className="text-3xl font-semibold pb-[30px]">Ingredients</h1>
              <div className="flex flex-col gap-[10px]">
                {/* crust start */}
                <strong>For the crust</strong>
                <div className="flex gap-2 pt-[20px]">
                  <input
                    type="checkbox"
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full relative peer checked:border-orange-500"
                    id="crackers"
                  />
                  <img
                    src="checkMark.svg"
                    className="absolute 
                    w-6 h-6 
                    hidden peer-checked:block
                    pointer-events-none"
                  />
                  <label htmlFor="crackers">400g graham crackers</label>
                </div>
                <div className="flex gap-2 pt-[20px]">
                  <input
                    type="checkbox"
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full relative peer checked:border-orange-500"
                    id="butter"
                  />
                  <label htmlFor="butter">150g unsalted butter, melted</label>
                  <img
                    src="checkMark.svg"
                    className="absolute 
                    w-6 h-6 
                    hidden peer-checked:block
                    pointer-events-none"
                  />
                </div>
              </div>
              {/* cheesecake start */}
              <div className="flex flex-col gap-[10px] mt-[40px]">
                <strong>For the cheesecake</strong>
                <div className="flex items-center gap-2 pt-[20px]">
                  <input
                    type="checkbox"
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full relative peer checked:border-orange-500"
                    id="marshmallows"
                  />

                  <label htmlFor="marshmallows">300g marshmallows</label>
                  <img
                    src="checkMark.svg"
                    className="absolute 
                    w-6 h-6 
                    hidden peer-checked:block
                    pointer-events-none"
                  />
                </div>
                <div className="flex items-center gap-2 pt-[20px]">
                  <input
                    type="checkbox"
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full relative peer checked:border-orange-500"
                    id="melted-butter"
                  />

                  <label htmlFor="melted-butter">
                    175g unsalted butter, melted
                  </label>
                  <img
                    src="checkMark.svg"
                    className="absolute 
                    w-6 h-6 
                    hidden peer-checked:block
                    pointer-events-none"
                  />
                </div>
                <div className="flex items-center gap-2 pt-[20px]">
                  <input
                    type="checkbox"
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full relative peer checked:border-orange-500"
                    id="cream-cheese"
                  />

                  <label htmlFor="cream-cheese">
                    500g Philadelphia cream cheese, softened
                  </label>
                  <img
                    src="checkMark.svg"
                    className="absolute 
                    w-6 h-6 
                    hidden peer-checked:block
                    pointer-events-none"
                  />
                </div>
                <div className="flex items-center gap-2 pt-[20px]">
                  <input
                    type="checkbox"
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full relative peer checked:border-orange-500"
                    id="whipping-cream"
                  />

                  <label className="whipping-cream">
                    250ml thickened/whipping cream, warm
                  </label>
                  <img
                    src="checkMark.svg"
                    className="absolute 
                    w-6 h-6 
                    hidden peer-checked:block
                    pointer-events-none"
                  />
                </div>
                <div className="flex items-center gap-2 pt-[20px]">
                  <input
                    type="checkbox"
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full relative peer checked:border-orange-500"
                    id="gelatin"
                  />

                  <label htmlFor="gelatin">
                    3 tbsp powdered gelatin + 3 tbsp water
                  </label>
                  <img
                    src="checkMark.svg"
                    className="absolute 
                    w-6 h-6 
                    hidden peer-checked:block
                    pointer-events-none"
                  />
                </div>
                <div className="flex items-center gap-2 pt-[20px]">
                  <input
                    type="checkbox"
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full relative peer checked:border-orange-500"
                    id="purple-gel"
                  />

                  <label htmlFor="purple-gel">5 drops purple food gel</label>
                  <img
                    src="checkMark.svg"
                    className="absolute 
                    w-6 h-6 
                    hidden peer-checked:block
                    pointer-events-none"
                  />
                </div>
                <div className="flex items-center gap-2 pt-[20px]">
                  <input
                    type="checkbox"
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full relative peer checked:border-orange-500"
                    id="blue-gel"
                  />
                  <label htmlFor="blue-gel">3 drops blue food gel</label>
                  <img
                    src="checkMark.svg"
                    className="absolute 
                    w-6 h-6 
                    hidden peer-checked:block
                    pointer-events-none"
                  />
                </div>
              </div>
            </div>
            {/* Ingredients end  */}
            {/* nutrition facts start  */}
            <div className="bg-gray-100 rounded-xl p-7 mt-[70px]">
              <h1 className="text-3xl font-semibold pb-[20px]">
                Nutrition Facts
              </h1>
              <div className="flex flex-col gap-[10px]">
                <div className="flex justify-between gap-[200px] border-b-2 border-solid border-gray-200">
                  <p className="text-gray-500">Calories</p>
                  <p>219,9</p>
                </div>
                <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                  <p className="text-gray-500">Total Fat</p>
                  <p>10,7 g</p>
                </div>
                <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                  <p className="text-gray-500">Saturated Fat</p>
                  <p>2,2 g</p>
                </div>
                <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                  <p className="text-gray-500">Cholesterol</p>
                  <p>37,4 mg</p>
                </div>
                <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                  <p className="text-gray-500">Sodium</p>
                  <p>120,3 mg</p>
                </div>
                <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                  <p className="text-gray-500">Potassium</p>
                  <p>32,8 mg</p>
                </div>
                <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                  <p className="text-gray-500">Total Carbohydrate</p>
                  <p>22.3g</p>
                </div>
                <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                  <p className="text-gray-500">Sugars</p>
                  <p>8,4 g</p>
                </div>
                <div className="flex justify-between gap-[40px] border-b-2 border-solid border-b-gray-200">
                  <p className="text-gray-500">Protein</p>
                  <p>7,9 g</p>
                </div>
              </div>
            </div>
            {/* nutrition facts end  */}
          </div>
          {/* ingredient + nutrition facts end  */}
          {/* instructions start  */}
          <div className="w-[500px] flex flex-col gap-[30px] mt-[65px]">
            <h1 className="text-3xl">Instructions</h1>
            <div className="flex gap-[25px]">
              <p className="bg-orange-600 rounded-3xl h-[23px] w-[61px] text-center text-white">
                1
              </p>
              <p>
                To prepare crust add graham crackers to a food processor and
                process until you reach fine crumbs. Add melted butter and pulse
                3-4 times to coat crumbs with butter.
              </p>
            </div>
            <div className="flex gap-[25px]">
              <p className="bg-orange-600 rounded-3xl h-[23px] w-[55px] text-center text-white">
                2
              </p>
              <p>
                Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon
                to firmly press the mixture out across the bottom and sides of
                the tart tin. Chill for 30 min.
              </p>
            </div>
            <div className="flex gap-[25px]">
              <p className="bg-orange-600 rounded-3xl h-[23px] w-[52px] text-center text-white">
                3
              </p>
              <p>
                Begin by adding the marshmallows and melted butter into a
                microwave safe bowl. Microwave for 30 seconds and mix to
                combine. Set aside.
              </p>
            </div>
            <div className="flex gap-[25px]">
              <p className="bg-orange-600 rounded-3xl h-[23px] w-[37px] text-center text-white">
                4
              </p>
              <p>
                Next, add the gelatine and water to a small mixing bowl and mix
                to combine. Microwave for 30 seconds.
              </p>
            </div>
            <div className="flex gap-[25px]">
              <p className="bg-orange-600 rounded-3xl h-[23px] w-[50px] text-center text-white">
                5
              </p>
              <p>
                Add the cream cheese to the marshmallow mixture and use a hand
                mixer or stand mixer fitted with a paddle attachment to mix
                until smooth.
              </p>
            </div>
            <div className="flex gap-[25px]">
              <p className="bg-orange-600 rounded-3xl h-[24px] w-[29px] text-center text-white">
                6
              </p>
              <p>
                Add the warm cream and melted gelatin mixture and mix until well
                combined.
              </p>
            </div>
            <div className="flex gap-[25px]">
              <p className="bg-orange-600 rounded-3xl h-[23px] w-[71px] text-center text-white">
                7
              </p>
              <p>
                Add 1/3 of the mixture to a mixing bowl, add purple food gel and
                mix until well combined. Colour 1/3 of the mixture blue. Split
                the remaining mixture into two mixing bowls, colour one pink and
                leave the other white.
              </p>
            </div>
            <div className="flex gap-[25px]">
              <p className="bg-orange-600 rounded-3xl h-[23px] w-[135px] text-center text-white">
                8
              </p>
              <p>
                Pour half the purple cheesecake mixture into the chill tart
                crust. Add half the blue and then add the remaining purple and
                blue in the tart tin. Use a spoon to drizzle some pink
                cheesecake on top. Use a skewer or the end of a spoon to swirl
                the pink. Add some small dots of the plain cheesecake mixture to
                create stars and then sprinkle some more starts on top before
                chilling for 2 hours.
              </p>
            </div>
            <div className="flex gap-[30px]">
              <p className="bg-orange-600 rounded-3xl h-[23px] w-[22px] text-center text-white">
                9
              </p>
              <p>Slice with a knife to serve.</p>
            </div>
          </div>
          {/* instructions end  */}
        </div>
        {/* ingredient + nutrition facts + instructions end  */}
        {/* suggestion start  */}
        <div className="flex flex-col w-[1100px] mb-[80px]">
          <h1 className="text-4xl font-semibold mb-[40px] mt-[40px]">
            You might also like
          </h1>
          <div className="flex grid grid-cols-4 gap-[15px] gap-y-[40px] font-semibold break-words text-[18px]">
            <div className=" hover:text-orange-500 cursor-pointer">
              <div className="max-w-[250px] overflow-hidden bg-cover">
                <img
                  src="cranberry.jpg"
                  className="h-[190px] transition duration-700 ease-in-out hover:scale-110 "
                />
              </div>
              <h1 className="pt-[10px]">Cranberry Macaroon Ice Cream Cake</h1>
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <div className="max-w-[250px] bg-cover overflow-hidden">
                <img
                  src="noBakeCk.jpg"
                  className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                />
              </div>
              <h1 className="pt-[10px]">No Bake Cheesecake</h1>
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <div className="max-w-[250px] bg-cover overflow-hidden">
                <img
                  src="spongeCake.jpg"
                  className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                />
              </div>
              <h1 className="pt-[10px]">Double Thick Layered Sponge Cake</h1>
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <div className="max-w-[250px] bg-cover overflow-hidden">
                <img
                  src="glazeCake.jpg"
                  className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                />
              </div>
              <h1 className="pt-[10px]">Caramel Glaze Cake</h1>
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <div className="max-w-[250px] bg-cover overflow-hidden">
                <img
                  src="creamCake.jpg"
                  className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                />
              </div>
              <h1 className="pt-[10px]">Strawberry Cream Cake Bites</h1>
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <div className="max-w-[250px] bg-cover overflow-hidden">
                <img
                  src="weddingCake.jpg"
                  className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                />
              </div>
              <h1 className="pt-[10px]">Homemade Mixed Berries Wedding Cake</h1>
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <div className="max-w-[250px] bg-cover overflow-hidden">
                <img
                  src="chocolateCake.jpg"
                  className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                />
              </div>
              <h1 className="pt-[10px]">M&M's Chocolate Cake</h1>
            </div>
            <div className="hover:text-orange-500 cursor-pointer">
              <div className="max-w-[250px] bg-cover overflow-hidden">
                <img
                  src="cinnamonCake.jpg"
                  className="h-[190px] transition duration-700 ease-in-out hover:scale-110"
                />
              </div>
              <h1 className="pt-[10px]">Almond Cinnamon Sponge Cake</h1>
            </div>
          </div>
        </div>
        {/* suggestion end  */}
      </div>
      {/* footer start  */}
      <div className="bg-gray-100 flex flex-col items-center pt-[80px]">
        {/* texts start  */}
        <div className="flex justify-start gap-[200px] pb-[50px] border-b-2 border-solid border-gray-300 w-[1100px] mb-[15px]">
          <div className="flex flex-col w-[370px] w-[1100px] ">
            <img src="logo.png" width={180} height={80} />
            <h1 className="text-gray-500 mt-[25px]">
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment
            </h1>
          </div>
          {/* 3 columns start  */}
          <div className="flex gap-[100px]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-gary-500 text-sm">Tastebite</p>
              <p className="text-gray-500 text-sm">About Us</p>
              <p className="text-gray-500 text-sm">Careers</p>
              <p className="text-gray-500 text-sm">Contact Us</p>
              <p className="text-gray-500 text-sm">Feedback</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p>Legal</p>
              <p className="text-gray-500 text-sm">Terms</p>
              <p className="text-gray-500 text-sm">Conditions</p>
              <p className="text-gray-500 text-sm">Cookies</p>
              <p className="text-gray-500 text-sm">Copyright</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p>Follow</p>
              <p className="text-gray-500 text-sm">Facebook</p>
              <p className="text-gray-500 text-sm">Twitter</p>
              <p className="text-gray-500 text-sm">Instagram</p>
              <p className="text-gray-500 text-sm">Youtube</p>
            </div>
            {/* 3 columns end  */}
          </div>
        </div>
        {/* texts end  */}
        <div className="flex items-center justify-around gap-[670px] pb-[15px]">
          <p className="text-gray-500 text-xs">
            © 2020 Tastebite - All rights reserved
          </p>
          <div className="flex gap-[25px]">
            <Image
              src={"facebook.svg"}
              height={0}
              width={0}
              className="w-[25px] h-auto"
            />{" "}
            <Image
              src={"instagram.svg"}
              height={0}
              width={0}
              className="w-[20px] h-auto"
            />{" "}
            <Image
              src={"twitter.svg"}
              height={0}
              width={0}
              className="w-[25px] h-auto"
            />{" "}
            <Image
              src={"youtube.svg"}
              height={0}
              width={0}
              className="w-[35px] h-auto"
            />
          </div>
        </div>
      </div>
      {/* footer end  */}
    </div>
  );
}
