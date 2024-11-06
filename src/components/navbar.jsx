import React from 'react'
import { AiOutlineNotification } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiMessageSquare } from "react-icons/fi";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
const navbar = () => {
    return (
        <div className='h-fit py-4 px-4 lg:px-5 lg:py-3 flex justify-between items-center shadow-md'>
            <div className="font-bold text-xl lg:text-2xl">
                EventCrux
            </div>

            <div className="flex gap-3 items-center">
                <AiOutlineNotification className="text-2xl lg:text-2xl md:text-2xl " />
                <FiMessageSquare className="text-2xl lg:text-2xl md:text-2xl " />

                {/* <CgProfile className="text-2xl lg:text-2xl md:text-2xl " /> */}

                <div className="hidden md:block lg:block font-semibold text-gray-700">
                    <h1 className='text-gray-800 leading-3'><header className="flex justify-between">
                        <UserButton showName />
                    </header></h1>
                    {/* <span className='text-[12px] leading-3'>itsukcode07@gmail.com</span> */}
                </div>
            </div>
        </div>
    )
}

export default navbar