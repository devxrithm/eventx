import Image from 'next/image'
import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";


const eventbox = ({ img }) => {
    return (
        <>
            {/* <div className="lg:mx-3 mx-3 mt-5">

                <div className="border-l-4 border-l-black container flex flex-col justify-center bg-white shadow-md border lg:w-[21.5rem] p-3 rounded">

                    <div className="w-full flex justify-center h-[12rem]">
                        <Image
                            src={img}
                            width={280}
                            height={280}
                            alt="Picture of the author"
                            className="rounded-sm"
                        />
                    </div>

                    <div className="flex flex-col mt-2">
                        <div>
                            <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-gray-700">Microsoft Fabric and AI Learning Hackathon </h1>
                           
                        </div>

                        <div className="flex flex-wrap justify-center mt-3 gap-3">

                            <div className="flex gap-1 items-center  ">
                                <IoTimeOutline className='text-xl' />
                                <p className='font-medium text-gray-600 text-sm'>10 days left</p>
                            </div>

                            <div className="flex gap-1 items-center">
                                <IoTimeOutline className='text-xl' />
                                <p className='font-medium text-gray-600 text-sm'>100 registered</p>
                            </div>

                            <div className="flex gap-1 items-center">
                                <FaRegEye className='text-xl' />
                                <p className='font-medium text-gray-600 text-sm'>3000</p>
                            </div>

                            <div className="flex gap-1 items-center border lg:px-5 px-3 py-1 bg-yellow-400 rounded">
                                <GoTrophy className='text-xl' />
                                <p className='font-medium text-gray-600'>$ 10,000+</p>
                            </div>

                            <button>
                                <div className="flex gap-1 items-center border lg:px-12 px-20 py-2 bg-black rounded text-white">
                                    <p className='font-medium text-sm'>Apply</p>
                                    <FaArrowRightToBracket className='text-xl' />
                                </div>
                            </button>


                        </div>


                    </div>

                </div>



            </div> */}

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