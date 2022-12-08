import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { CgAdd } from 'react-icons/cg/'
import Modal from '../Modal/Modal.js'
import { useState } from "react";


const Navigation = () => {


  // react hook
  const [openModal, setOpenModal] = useState(false);


  return (
    <div className="bg-[#84A98C] text-center p-3 rounded-xl">
      <ul>
        <li className="p-3 mr-4 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#CAD2C5] openModalBtn" onClick={() => { setOpenModal(true) }}><CgAdd /></li>
        <li className="p-3 mr-4 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#CAD2C5]"><AiOutlineSearch /></li>
        <li className="p-3 mr-4 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#CAD2C5]"><AiFillEdit /></li>
        <li className="p-3 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#CAD2C5]"><RiDeleteBin5Line /></li>
      </ul>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
};

export default Navigation;