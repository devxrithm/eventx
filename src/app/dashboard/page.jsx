import React from 'react'
import { MdOutlineEmojiEvents } from "react-icons/md";



const page = () => {

  return (
    <>
      <div className="min-h-[32rem] flex justify-center items-center gap-10">

        <div className="border p-5 flex flex-col items-center rounded-lg">
          <MdOutlineEmojiEvents className='text-8xl text-teal-900' />
          <h1 className='text-3xl font-bold text-teal-900 text-center'>EXPLORE <br /> EVENTS</h1>
        </div>

        <div className="border p-5 flex flex-col items-center rounded-lg">
          <MdOutlineEmojiEvents className='text-6xl text-teal-900' />
          <h1 className='text-3xl font-bold text-teal-900 text-center'>EXPLORE <br /> EVENTS</h1>
        </div>


        <div className="border p-5 flex flex-col items-center rounded-lg">
          <MdOutlineEmojiEvents className='text-6xl text-teal-900' />
          <h1 className='text-3xl font-bold text-teal-900 text-center'>EXPLORE <br /> EVENTS</h1>
        </div>

      </div>
    </>
  )
}

export default page;
