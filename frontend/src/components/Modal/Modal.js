import React from 'react'
import "./Modal.css"
import { TbPlant } from 'react-icons/tb'
import { FaHeartbeat } from 'react-icons/fa'
import { RiUserHeartFill } from 'react-icons/ri'
import { GiOfficeChair } from 'react-icons/gi'
import { AiOutlineDollarCircle } from 'react-icons/ai'



function Modal({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className='modalContainer'>
                <div className='title'>
                    <h1 className='font-bold m-4'>Bucket anlegen:</h1>
                </div>
                <div className='body'>

                    <form className="felx-auto content-center flex-col">
                        <ul>
                            <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#84A98C]"><TbPlant /></li>
                            <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#84A98C]"><FaHeartbeat /></li>
                            <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#84A98C]"><RiUserHeartFill /></li>
                            <li className="p-3 mr-2 inline-block bg-white rounded-full text-[#354F52] hover:bg-[#84A98C]"><GiOfficeChair /></li>
                            <li className="p-3  inline-block bg-white rounded-full hover:bg-[#84A98C]"><AiOutlineDollarCircle /></li>
                        </ul>
                        <p className='m-2'>Category: </p>
                        <label className='flex m-2 p-2 flex-col'>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <label className='flex m-2 p-2 flex-col'>
                            Description:
                            <input type="text" name="description" />
                        </label>
                    </form>


                </div>
                <div className='footer'>
                    <br />
                    <button className="m-2 p-2 font-bold bg-red-500" onClick={() => closeModal(false)}>Cancel</button>
                    <button className="m-2 p-2 font-bold bg-[#84A98C]">Create</button>
                </div>
            </div>
        </div>
    )
}

export default Modal