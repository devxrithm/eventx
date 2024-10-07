import React from 'react'
import Image from 'next/image'
import { HiHome } from "react-icons/hi";
import { MdEmojiEvents } from "react-icons/md";
import { HiMiniBanknotes } from "react-icons/hi2";
import { HiCalendarDays } from "react-icons/hi2";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdComputer } from "react-icons/md";



const _page = () => {
    return (
        <>

            <div className="flex">
                <div className="border h-[40rem] px-4 py-5 w-64">
                    <div className="logo rounded-xl flex items-center gap-3">
                        <Image
                            src="/startup.jpeg"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                            className="rounded-full"
                        />
                        <p className="font-bold text-gray-600">StartupNation</p>
                    </div>
                    <div className="list mt-10">

                        <ul className="flex flex-col gap-2 text-gray-700">
                            <li className="flex items-center gap-4 font-semibold bg-slate-50 px-5 py-2">
                                <HiHome className="text-2xl" />
                                Home
                            </li>
                            <li className="flex items-center gap-4 font-semibold px-5 py-2">
                                <HiCalendarDays className="text-2xl" />
                                Schedule
                            </li>
                        </ul>


                        <ul className="mt-4 text-gray-700">
                            <p className="font-semibold">Category</p>
                            <li className="flex items-center gap-4 font-semibold mt-3 px-5 py-2">
                                <MdEmojiEvents className="text-2xl" />
                                EVENTS
                            </li>
                            <li className="flex items-center gap-4 font-semibold px-5 py-2">
                                <HiMiniBanknotes className="text-2xl" />
                                SPONSERS
                            </li>
                            <li className="flex items-center gap-4 font-semibold px-5 py-2">
                                <HiOutlineSpeakerphone className="text-2xl" />
                                SPEAKER
                            </li>
                            <li className="flex items-center gap-4 font-semibold px-5 py-2">
                                <MdComputer className="text-2xl" />
                                HACKATHONS
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border">

                    ukcode
                </div>
            </div>
        </>
    )
}

export default _page