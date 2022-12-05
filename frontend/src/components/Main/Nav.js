import React from 'react';
import { TbPlant } from 'react-icons/tb'
import { FaHeartbeat } from 'react-icons/fa'
import { RiUserHeartFill } from 'react-icons/ri'
import { GiOfficeChair } from 'react-icons/gi'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { TiSortAlphabetically } from 'react-icons/ti'


const Nav = () => {
  return (
    <div className="bg-[#84A98C] text-center p-3 rounded-xl">
        <ul>
            <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52]"><TiSortAlphabetically/></li>
            <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52]"><TbPlant/></li>
            <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52]"><FaHeartbeat/></li>
            <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52]"><RiUserHeartFill/></li>
            <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52]"><GiOfficeChair/></li>
            <li className="p-3  inline-block bg-white rounded-full"><AiOutlineDollarCircle/></li>
        </ul>
        <p classname="text-[#354F52]">Category: ....</p>
    
    </div>
  );
};

export default Nav;