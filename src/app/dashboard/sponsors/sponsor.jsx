import React from 'react'
import Image from 'next/image'
import { IoTimeOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";


const sponsor = ({img , name, location, amount, views}) => {
  return (
    <>
      <div className="w-[31.2rem] lg:mx-3 mx-2 mt-5 border rounded-md flex p-4 justify-around gap-6">
        <div className="rounded-lg ">
          <Image
            src={img}
            width={230}
            height={230}
            alt="Picture of the author"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col gap-3">

          <div>
            <h1 className="lg:text-3xl md:text-2xl text-2xl font-bold text-gray-700">
             {name}
            </h1>
            <h2 className="lg:text-sm md:text-2xl text-sm font-semibold text-gray-700">
              {location}
            </h2>
          </div>

          <div className="flex gap-5 justify-between">

            <div className='flex gap-5'>

              <div className="flex gap-1 items-center">
                <FaRegEye className='text-xl' />
                <p className='font-medium text-gray-600 text-sm'>{views}</p>
              </div>



              <div className="flex gap-1 items-center">
                <FaRupeeSign className='text-xl' />
                <p className='font-medium text-gray-600 text-sm'>{amount}</p>
              </div>

              <div className="border bg-yellow-300 px-3 py-1 rounded border-black font-bold">
                GOLD
              </div>
            </div>



          </div>
          <button className='flex flex-col items-end'>
            <div className="flex gap-1 items-center border lg:px-3 px-20 py-2 justify-center w-[100%] bg-black rounded text-white">
              <p className='font-medium text-sm '>Approach</p>
              <FaArrowRightToBracket className='text-xl' />
            </div>
          </button>
        </div>

      </div>
    </>
  )
}

export default sponsor