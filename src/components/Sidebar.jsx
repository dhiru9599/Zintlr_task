import React from "react";
import { GoHome } from "react-icons/go";
import { PiMathOperations } from "react-icons/pi";
import { GrNetwork, GrTransaction } from "react-icons/gr";
import { BsBank } from "react-icons/bs";
import { BsQuestionSquare } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgOptions } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center p-5 h-screen bg-indigo-50">
      <h1 className="text-3xl my-6">Zintlr</h1>

      <ul className="flex flex-col gap-y-4 my-3 mb-5 text-slate-700 text-md font-semibold">
        <li className="flex justify-start items-center gap-2 ">
          <GoHome className="text-3xl mr-2" /> Dashboard
        </li>
        <li className="flex justify-start items-center gap-2 ">
          <PiMathOperations className="text-3xl mr-2" /> Bullion Operations
        </li>
        <li className="flex justify-start items-center gap-2">
          <GrTransaction className="text-3xl mr-2" /> Transactions
        </li>
        <li className="flex justify-start items-center gap-2 ">
          <GrNetwork className="text-3xl mr-2" /> Your Network
        </li>
        <li className="flex justify-start items-center gap-2 ">
          <HiOutlineUserGroup className="text-3xl mr-2" /> Consumers
        </li>
        <li className="flex justify-start items-center gap-2 ">
          <CgOptions className="text-3xl mr-2" /> Other Operations
        </li>
        <li className="flex justify-start items-center gap-2 ">
          <BsBank className="text-3xl mr-2" /> Manage Bank Accounts
        </li>
        <li className="flex justify-start items-center gap-2 ">
          <BsQuestionSquare className="text-3xl mr-2" /> FAQ
        </li>
        <li className="flex justify-start items-center gap-2 ">
          <AiOutlineSetting className="text-3xl mr-2" /> Customize Dashboard
        </li>
      </ul>

      <div>Your Stock</div>
    </div>
  );
};

export default Sidebar;
