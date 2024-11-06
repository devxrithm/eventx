import Image from 'next/image'
import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";


const eventbox = ({ img }) => {
    return (
        <>
         

            <div className="w-[26rem] lg:mx-3 mx-3 mt-5 border rounded-md flex gap-2 p-3 bg-white shadow-md">
                <div className="rounded-lg ">
                    <Image
                        src={img}
                        width={80}
                        height={80}
                        alt="Picture of the author"
                        className="border border-black rounded-lg"
                    />
                </div>

                <div className="flex flex-col gap-3">

                    <div>
                        <h1 className="lg:text-lg md:text-2xl text-xl font-semibold text-gray-700">
                            Ekatva Festival 2024
                        </h1>
                        <h2 className="lg:text-sm md:text-2xl text-sm font-semibold text-gray-700">
                            Microsoft Fabric and AI Learning event
                        </h2>
                    </div>

                    <div className="flex gap-5 justify-between">

                        <div className='flex gap-5'>
                            <div className="flex gap-1 items-center  ">
                                <IoTimeOutline className='text-xl' />
                                <p className='font-medium text-gray-600 text-sm'>10 days left</p>
                            </div>

                            <div className="flex gap-1 items-center">
                                <FaRegEye className='text-xl' />
                                <p className='font-medium text-gray-600 text-sm'>3000</p>
                            </div>
                        </div>


                        <button className='flex flex-col items-end'>
                            <div className="flex gap-1 items-center border lg:px-3 px-20 py-2 justify-center w-[100%] bg-black rounded text-white">
                                <p className='font-medium text-sm '>Register</p>
                                <FaArrowRightToBracket className='text-xl' />
                            </div>
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default eventbox