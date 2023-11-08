import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { AiOutlineBell } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="flex justify-between mx-auto px-3 ml-4 mt-5 ">
      <form className="flex items-center gap-1 bg-indigo-50 rounded-full pl-6 ">
        <input
          className="bg-indigo-50 focus:outline-none"
          type="text"
          name="search"
          id="search"
          placeholder="Search (E.g. Rewards)"
        />
        <button className="bg-white text-3xl rounded-full p-1 m-2">
          <BiSearchAlt />
        </button>
      </form>

      <div className="flex gap-3 items-center">
        <div className="flex gap-3 text-3xl">
          <TbMoneybag />
          <LuWallet />
          <AiOutlineBell />
        </div>

        <div>Current Price Chart</div>

        <div className="flex items-center gap-1 bg-indigo-50 rounded-xl  mr-3 p-2">
          <RxAvatar className="text-4xl text-stone-700" />
          <IoIosArrowDown className="text-xl text-stone-700" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
