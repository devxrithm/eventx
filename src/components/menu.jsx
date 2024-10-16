
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GoTrophy } from "react-icons/go";
import { LuIndianRupee } from "react-icons/lu";
import { LuMic2 } from "react-icons/lu";
import { MdOutlineComputer } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import Link from 'next/link';
import { FaRegHandshake } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";



const menu = () => {
    return (
        <>
            <div className="flex flex-col justify-between h-[80%] lg:h-[93%] md:lg:h-[90%]">
                <ul className="flex-1 text-gray-700 cursor-pointer  mt-5 flex flex-col gap-2 ">

                    <Link href="/home">
                        <div className='flex items-center lg:gap-5 md:gap-3 hover:bg-green-50 rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                            <IoHomeOutline className="text-4xl lg:text-2xl md:text-2xl " />
                            <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                                Home
                            </li>
                        </div>
                    </Link>


                    <div className='flex items-center lg:gap-5 md:gap-3 hover:bg-green-50 rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                        <SlCalender className="text-4xl lg:text-2xl md:text-2xl" />
                        <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                            Schedule
                        </li>
                    </div>

                    <span className='text-sm hidden md:block text-gray-600 font-semibold mt-2'>Category</span>


                    <Link href="/events">
                        <div className='flex items-center lg:gap-5 md:gap-3 hover:bg-green-50 rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                            <GoTrophy className="text-4xl lg:text-2xl md:text-2xl " />
                            <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                                Events
                            </li>
                        </div>
                    </Link>

                    <Link href="/sponsors">
                        <div className='flex items-center lg:gap-5 md:gap-3 hover:bg-green-50 rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                            <LuIndianRupee className="text-4xl lg:text-2xl md:text-2xl" />
                            <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                                Sponsors
                            </li>
                        </div>
                    </Link>

                    <Link href="/speakers">
                        <div className='flex items-center lg:gap-5 md:gap-3 hover:bg-green-50 rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                            <LuMic2 className="text-4xl lg:text-2xl md:text-2xl" />
                            <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                                Speaker
                            </li>
                        </div>
                    </Link>


                    <div className='flex items-center lg:gap-5 md:gap-3 hover:bg-green-50 rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                        <RiTeamLine className="text-4xl lg:text-2xl md:text-2xl" />
                        <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                            Teams
                        </li>
                    </div>

                    <div className='flex items-center lg:gap-5 md:gap-3 hover:bg-green-50 rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                        <FaChartLine className="text-4xl lg:text-2xl md:text-2xl" />
                        <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                            Network
                        </li>
                    </div>

                    <div className='flex items-center lg:gap-5 md:gap-3 hover:bg-green-50 rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                        <FaRegHandshake className="text-4xl lg:text-2xl md:text-2xl" />
                        <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                            Community Partner
                        </li>
                    </div>

                    <div className='border bg-black text-white flex items-center lg:gap-3 md:gap-3  rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                        <FiPlusCircle className="text-4xl lg:text-2xl md:text-2xl" />
                        <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                            List your Event
                        </li>
                    </div>

                </ul>


                <div className="border-t">
                    <div className='flex items-center gap-3 md:gap-3 p-2 md:p-1 lg:p-2 justify-center lg:justify-start md:justify-start'>
                        <FiLogOut className="text-4xl lg:text-2xl md:text-2xl " />
                        <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                            Logout
                        </li>
                    </div>

                </div>
            </div>


            {/* <ul className="flex flex-col mt-4 text-gray-700 gap-2 cursor-pointer mr-2">
                <p className="font-semibold px-4 text-sm text-gray-500">Category</p>
                <li className="flex items-center gap-4 font-semibold mt-3 px-5 py-2 hover:bg-teal-600 rounded-md hover:text-white">
                    <MdEmojiEvents className="text-2xl" />
                    Events
                </li>
                <li className="flex items-center gap-4 font-semibold px-5 py-2 hover:bg-teal-600 rounded-md hover:text-white">
                    <HiMiniBanknotes className="text-2xl" />
                    Sponsor
                </li>
                <li className="flex items-center gap-4 font-semibold px-5 py-2 hover:bg-teal-600 rounded-md hover:text-white">
                    <HiOutlineSpeakerphone className="text-2xl" />
                    Speaker
                </li>
                <li className="flex items-center gap-4 font-semibold px-5 py-2 hover:bg-teal-600 rounded-md hover:text-white">
                    <MdComputer className="text-2xl" />
                    Hackathon
                </li>
            </ul> */}
        </>
    )
}

export default menu