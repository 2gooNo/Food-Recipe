"use client";

export function Contacts() {
  return (
    <div className="bg-[#f9f9f9] flex flex-col justify-center items-center pt-[104px]">
      <div className="flex flex-row w-[screen] gap-[80vh] border-b-[1px] border-[grey] pb-[92px]">
        <div className="flex flex-col justify-center items-center w-[40vh] gap-[22px]">
          <img className="mr-[240px] w-[200px]" src="Taste.png" />
          <h3 className="a">
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment"
          </h3>
        </div>
        <div className="flex w-[40vh] gap-[20px]">
          <div className="Contact_List">
            <h2>Tastebite</h2>
            <p className="a">About us</p>
            <p className="a">Careers</p>
            <p className="a">Contact us</p>
            <p className="a">Feedback</p>
          </div>
          <div className="Contact_List">
            <h3>Legal</h3>
            <p className="a">Terms</p>
            <p className="a">Conditions</p>
            <p className="a">Cookies</p>
            <p className="a">Copyright</p>
          </div>
          <div className="Contact_List">
            <h3>Follow</h3>
            <p className="a">Facebook</p>
            <p className="a">Twitter</p>
            <p className="a">Instagram</p>
            <p className="a">Youtube</p>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center flex-row gap-[1240px] mt-[32px] mb-[53px]">
        <div className="a">© 2020 Tastebite - All rights reserved</div>
        <div className="flex gap-[20px] justify-center items-center">
          <img className="picture_contacts1" src="facebook.png" />
          <img className="picture_contacts1" src="Instagram.png" />
          <img className="picture_contacts1" src="Twitter.png" />
          <img className="picture_contacts1" src="Youtube.png" />
        </div>
      </div>
    </div>
  );
}
