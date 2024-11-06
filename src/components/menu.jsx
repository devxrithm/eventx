
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"

import { Button } from "../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"


const menu = () => {
    return (
        <>
            <div className="flex flex-col justify-between h-[80%] lg:h-[93%] md:lg:h-[90%]">
                <ul className="flex-1 text-gray-700 cursor-pointer  mt-5 flex flex-col gap-2 ">

                    <Link href="/dashboard/">
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


                    <Link href="/dashboard/events">
                        <div className='flex items-center lg:gap-5 md:gap-3 hover:bg-green-50 rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                            <GoTrophy className="text-4xl lg:text-2xl md:text-2xl " />
                            <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                                Events
                            </li>
                        </div>
                    </Link>

                    <Link href="/dashboard/sponsors">
                        <div className='flex items-center lg:gap-5 md:gap-3 hover:bg-green-50 rounded-lg p-2 md:p-1 lg:px-3 lg:py-2 justify-center lg:justify-start md:justify-start'>
                            <LuIndianRupee className="text-4xl lg:text-2xl md:text-2xl" />
                            <li className="font-semibold hidden lg:block md:block md:text-sm lg:text-base">
                                Sponsors
                            </li>
                        </div>
                    </Link>

                    <Link href="/dashboard/speakers">
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
                            <Dialog>
                                <DialogTrigger>List your Event</DialogTrigger>
                                <DialogContent className="h-[35rem] flex justify-center items-center w-[50rem]">
                                    <DialogHeader>
                                        {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                                        <DialogDescription className="flex justify-center items-center mt-10">
                                            <Card className="w-[350px]">
                                                <CardHeader>
                                                    <CardTitle>Create project</CardTitle>
                                                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <form>
                                                        <div className="grid w-full items-center gap-4">
                                                            <div className="flex flex-col space-y-1.5">
                                                                <Label htmlFor="name">Name</Label>
                                                                <Input id="name" placeholder="Name of your project" />
                                                            </div>
                                                            <div className="flex flex-col space-y-1.5">
                                                                <Label htmlFor="framework">Framework</Label>
                                                                <Select>
                                                                    <SelectTrigger id="framework">
                                                                        <SelectValue placeholder="Select" />
                                                                    </SelectTrigger>
                                                                    <SelectContent position="popper">
                                                                        <SelectItem value="next">Next.js</SelectItem>
                                                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                                                        <SelectItem value="astro">Astro</SelectItem>
                                                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                            </div>
                                                            <Label htmlFor="picture">Picture</Label>
                                                            <Input id="picture" type="file" />
                                                        </div>
                                                    </form>
                                                </CardContent>
                                                <CardFooter className="flex justify-between">
                                                    <Button variant="outline">Cancel</Button>
                                                    <Button>List</Button>
                                                </CardFooter>
                                            </Card>


                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
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