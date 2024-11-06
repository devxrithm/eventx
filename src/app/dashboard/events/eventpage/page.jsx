import React from 'react'
import Image from 'next/image'
import { IoTimeOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
const page = () => {
  return (
    <>
      <div className="flex flex-col gap-3 sticky top-5 min-h-[67rem]">
        <div className=" shadow-lg bg-white rounded-lg px-5 py-5 border w-[98%] border-l-8 border-l-teal-500 ">
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 items-center justify-center">
              <div className='border p-2 rounded-md'>
                <Image
                  src="/box.jpg"
                  width={150}
                  height={150}
                  alt="Picture of the author"
                  className="border border-black rounded-lg"
                />
              </div>
              <div>
                <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-gray-700">
                  Microsoft Fabric and AI Learning Event
                </h1>
                <h2 className="lg:text-md md:text-lg text-sm font-semibold text-gray-700">
                  IIMT COLLEGE OF ENGINEERING
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <CiLocationOn className='text-3xl' />
                <p className='font-medium text-gray-600 text-md'>IIMT COLLEGE OF ENGINEERING - Greater Noida, Uttar Pradesh, India</p>
              </div>
              <div className="flex gap-2 items-center">
                <SlCalender className='text-xl' />
                <p className='font-medium text-gray-600 text-md'>23 October 2024 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg px-5 py-3 border w-[97%] shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">FREE</h1>
            <div className="border px-12 py-2 rounded-md bg-black text-white shadow-lg">
              Register
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg px-5 py-5 border w-[97%] shadow-md">
          <div className="flex gap-5 items-center">
            <div className="flex gap-3 items-center">
              <MdOutlinePeopleAlt className='text-4xl border p-2 rounded-md shadow' />
              <p className='font-medium text-gray-600 text-md'>10,000+ Registered</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaRegEye className='text-4xl border p-2 rounded-md shadow' />
              <p className='font-medium text-gray-600 text-md'>10,000 + Impression</p>
            </div>
            <div className="flex gap-3 items-center  ">
              <IoTimeOutline className='text-4xl border p-2 rounded-md shadow' />
              <p className='font-medium text-gray-600 text-md'>10 days left</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg px-5 py-5 border w-[97%] shadow-md">
          <div className='flex flex-col gap-5'>
            <h1 className="text-lg font-semibold">
              All that you need to know about Machine Learning in Core: Workshop
            </h1>
            <h2 className="text-md">
              ML to Its Core: An Introduction to Machine Learning Through Interactive Learning
              Introduction Machine Learning (ML), a branch of Artificial Intelligence (AI), enables systems to learn from data without explicit programming. It leverages algorithms to analyze large datasets, uncover patterns, and make predictions, driving data-based decision-making. ML models process both historical and real-time data, uncovering insights often beyond human reach.
            </h2>
            <h2 className="text-md">
              <span className="font-semibold">Remarks:</span> Learning ML can be challenging, but with patience and practice, it becomes enjoyable. If stuck, seek guidance from peers and mentors. These steps will help build practical ML skills, ready for real-world application.
            </h2>
            <h2 className="text-md">
              <span className="font-semibold">Disclaimer: </span> This Is not a free opportunity. ATMoS'24 has partnered with a third-party payments portal through which you will have to register. If you are interested please contact the mentioned or else register here and we will contact you.
            </h2>
          </div>
        </div>
        <div className="bg-white rounded-lg px-5 py-5 border w-[97%] shadow-md">
          <div className="flex gap-5 items-center">
            <div className="flex gap-3 items-center">
              <SlCalender className='text-4xl border p-2 rounded-md shadow' />
              <div>
                <p className='font-medium text-gray-600 text-md'>Registration Deadlines</p>
                <p className='font-medium text-gray-600 text-md'>23 October 2024, 11:00 pm </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg px-5 py-5 border w-[97%] shadow-md">
          <div className="flex gap-5 items-center">
            <div className="flex gap-3 ">
              <CiPhone className='text-5xl border p-2 rounded-md shadow' />
              <div >
                <p className='font-medium text-gray-600 text-md'>Contact Details</p>
                <p className='font-medium text-gray-600 text-md'>+91 850XXX8547</p>
                <p className='font-medium text-gray-600 text-md'>example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default page