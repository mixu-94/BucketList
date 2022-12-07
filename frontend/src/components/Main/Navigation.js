import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CgAdd } from "react-icons/cg/";

const Navigation = () => {
  return (
    <div className="bg-[#84A98C] text-center p-3 rounded-xl sticky bottom-0 z-index-10">
      <ul>
        <li className="p-3 mr-4 inline-block bg-white rounded-full text-[#354F52]">
          <CgAdd />
        </li>
        <li className="p-3 mr-4 inline-block bg-white rounded-full text-[#354F52]">
          <AiOutlineSearch />
        </li>
        <li className="p-3 mr-4 inline-block bg-white rounded-full text-[#354F52]">
          <AiFillEdit />
        </li>
        <li className="p-3 inline-block bg-white rounded-full text-[#354F52]">
          <RiDeleteBin5Line />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
