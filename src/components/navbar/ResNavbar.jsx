import React from "react";
import "./resNavbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { BiCategoryAlt, BiBed } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import { MdKeyboardArrowDown, MdFlight } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const ResponsiveNavbar = () => {
  return (
    <>
      <div className="wrapper shadow-lg">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label htmlFor="show-menu" className="menu-icon">
            <GiHamburgerMenu size={30} />
          </label>
          <div className="content">
            <div className="logo">
              <a href="#">رزروفا</a>
            </div>
            <ul className="links shadow-2xl">
              <li>
                <div className="flex items-center">
                  <AiOutlineLogin className="text-[#DE354C] font-bold" />
                  <a href="#">
                    <p className="text-base">ورود | ثبت نام</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <BiBed className="text-[#DE354C] font-bold" />
                  <a href="#">
                    <p className="text-base">اقامت</p>
                  </a>
                </div>
              </li>

              <li>
                <div className="flex items-center">
                  <MdFlight className="text-[#DE354C] font-bold" />
                  <a href="#">
                    <p className="text-base">پروازها</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <MdOutlineWbSunny className="text-[#DE354C] font-bold" />
                  <a href="#">
                    <p className="text-base">جاذبه ها</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <AiOutlineQuestionCircle className="text-[#DE354C] font-bold" />
                  <a href="#">
                    <p className="text-base">سوالی دارید؟</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <label htmlFor="show-search" className="search-icon">
            <BiSearch className="ms-10 text-gray-500" size={30} />
          </label>
          <form action="#" className="search-box">
            <input type="text" placeholder="جستجو" required />
            <button type="submit" className="go-icon">
              <BsArrowReturnLeft size={0} className="text-gray-600" />
            </button>
          </form>
        </nav>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
