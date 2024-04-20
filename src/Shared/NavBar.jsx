import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { PiCaretDoubleUpBold } from "react-icons/pi";

export const NavBar = () => {
  return (
    <nav>
      <div className="w-full bg-primary h-[60px] fixed top-0 right-0 left-0 ">
        <dir className="w-full px-20 h-full">
          <div className="flexRow justify-between  h-full ">

            <div className="flexRow flex-row gap-1  cursor">
              <PiCaretDoubleUpBold className="text-green-600  text-2xl hover:-translate-y-1 transition-all duration-300 " />
              <h1 className="text-secondary font-bold text-3xl ">DUKaaN</h1>
            </div>

            <div className="flexRow flex-row gap-4">
              <div className="flexRow cursor">
                <RiAccountCircleFill className="text-[24px] text-gray-600 hover:text-secondary" />
              </div>
              <div className="flexRow cursor">
                <FaShoppingCart className="text-[24px] text-gray-600 hover:text-secondary" />
              </div>
            </div>

          </div>
        </dir>
      </div>
    </nav>
  );
};
