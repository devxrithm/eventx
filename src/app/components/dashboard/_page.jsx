import React from 'react'
import Image from 'next/image'
import { HiHome } from "react-icons/hi";
import { MdEmojiEvents } from "react-icons/md";
import { HiMiniBanknotes } from "react-icons/hi2";
import { HiCalendarDays } from "react-icons/hi2";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import Searchbox from '../utils/searchbox.jsx/search';
import Eventsboxes from "../utils/events-boxes/page"

const _page = () => {
    return (
        <>

            <div className="flex ">
                <div className="border-r border-gray-200 h-[41rem] py-6 w-[18%] flex flex-col justify-between fixed">

                    <div>
                        <div className="logo rounded-xl flex items-center gap-3 px-4 ">
                            <Image
                                src="/startup.jpeg"
                                width={40}
                                height={40}
                                alt="Picture of the author"
                                className="rounded-full"
                            />
                            <p className="font-bold text-gray-600">StartupNation</p>
                        </div>
                        <div className="mt-8 mx-2">

                            <ul className="flex flex-col gap-2 text-violet-950 cursor-pointer text-[15px]">
                                <li className="flex items-center gap-4 font-semibold hover:bg-slate-50 px-5 py-2 rounded-md">
                                    <HiHome className="text-xl" />
                                    Home
                                </li>
                                <li className="flex items-center gap-4 font-semibold px-5 py-2 hover:bg-slate-50">
                                    <HiCalendarDays className="text-xl" />
                                    Schedule
                                </li>
                            </ul>

                            <ul className="mt-4 text-violet-950 cursor-pointer text-[15px]">
                                <p className="font-semibold px-4 text-sm text-gray-500">Category</p>
                                <li className="flex items-center gap-4 font-semibold mt-3 px-5 py-2 hover:bg-slate-50">
                                    <MdEmojiEvents className="text-xl" />
                                    Events
                                </li>
                                <li className="flex items-center gap-4 font-semibold px-5 py-2 hover:bg-slate-50">
                                    <HiMiniBanknotes className="text-xl" />
                                    Sponsor
                                </li>
                                <li className="flex items-center gap-4 font-semibold px-5 py-2 hover:bg-slate-50">
                                    <HiOutlineSpeakerphone className="text-xl" />
                                    Speaker
                                </li>
                                <li className="flex items-center gap-4 font-semibold px-5 py-2 hover:bg-slate-50">
                                    <MdComputer className="text-xl" />
                                    Hackathon
                                </li>
                            </ul>

                            <ul className="mt-4 text-violet-950 text-[15px]">
                                <p className="font-semibold px-4 text-sm text-gray-500">Category</p>
                                <li className="flex items-center gap-4 font-semibold mt-3 px-5 py-2">
                                    <MdEmojiEvents className="text-xl" />
                                    Events
                                </li>
                                <li className="flex items-center gap-4 font-semibold px-5 py-2">
                                    <HiMiniBanknotes className="text-xl" />
                                    Sponsor
                                </li>
                                <li className="flex items-center gap-4 font-semibold px-5 py-2">
                                    <HiOutlineSpeakerphone className="text-xl" />
                                    Speaker
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className="mt-10">
                        <hr />
                        <div className="flex items-center justify-evenly">

                            <div className="flex items-center gap-2 font-semibold py-2 mt-2">

                                <Image
                                    src="/logo.png"
                                    width={35}
                                    height={35}
                                    alt="Picture of the author"
                                    className="rounded-full border border-black"
                                />
                                <div className="flex flex-col ">
                                    <p className="text-sm font-bold">Ujjwal Katiyar</p>
                                    <p className="text-sm text-gray-700">example@gmail.com</p>
                                </div>
                            </div>

                            <IoIosMore className="text-3xl mt-5  text-orange-700" />
                        </div>
                    </div>
                </div>


                <div className="w-[80%] ml-60">
                    <div className="mt-7 mx-5">
                        <Searchbox />
                        <hr className="mt-5" />

                        <div className="">
                            <Eventsboxes />
                            <Eventsboxes />
                            <Eventsboxes />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default _page