import Image from 'next/image'
import React from 'react'
import { HiStatusOnline } from "react-icons/hi";
import { IoTimer } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightToBracket } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] border h-full px-3 py-4 mt-7 rounded-md w-[75%] border-l-8 border-l-orange-500 flex gap-3">
        <div className="w-[50%]">
          <Image
            src="/box.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
            className="rounded-lg"
          />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold text-gray-600">Microsoft Fabric and AI Learning Hackathon </h1>

          <div className="flex items-end justify-around">
            <div className="flex gap-2 mt-5 font-semibold  max-w-[75%] flex-wrap justify-evenly">
              <p className="border rounded-full bg-orange-600 text-white px-4 py-1 text-center text-sm flex items-center gap-2 "><IoTimer className="text-lg" />
                About 1 Month Left</p>

              <p className="flex items-center gap-2 text-gray-800 "><CiLocationOn className="text-xl" />
                Noida</p>
              <p className="flex items-center gap-2 text-gray-600"><HiStatusOnline />  Online</p>
              <p className="flex items-center gap-2 text-gray-800 ">$ 100000 in prizes</p>
              <p className="flex items-center gap-2 text-gray-800 "><BsPeople className="text-xl" />  210 participants</p>

            </div>

            <div className="flex flex-col gap-1">
              <button>
                <div className="border flex items-center gap-2 px-5 py-2 bg-black rounded-xl text-white">
                  Apply <FaArrowRightToBracket  className="text-lg" />

                </div>
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default page