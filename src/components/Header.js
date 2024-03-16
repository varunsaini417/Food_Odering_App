import React from "react";
import { FaHamburger } from "react-icons/fa";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <>
      <div className="w-full  border-b-2 h-20 relative flex items-center justify-between p-12">
        <div className="flex items-center   w-full justify-between ">
            <div className=" w-24 h-16 ">
                <img src={LOGO_URL} alt="logo" />
            </div>

            <div className="lg:min-h-0 md:min-h-0 flex  items-center md:justify-end  lg:justify-end lg:mr-32 justify-center absolute top-[-400px] md:static md:bg-transparent  lg:static  left-0 w-full  bg-gray-900 lg:bg-transparent  opacity-70 min-h-32  ">
                <ul className="flex flex-col gap-6 py-4  text-white md:text-black md:min-h-0 md:gap-10  lg:text-black lg:gap-10 text-xl md:flex-row lg:flex-row">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>Contact Us</li>
                    <li>
                        <a href="/"> Cart</a>
                    </li>
                </ul>
            </div>
            
            <div className="flex lg:invisible md:invisible">
                <FaHamburger className=" text-3xl"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
