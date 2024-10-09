import React from 'react'
import { IoSearch } from "react-icons/io5";

const searchbox = ({ func }) => {
    return (

        <form >
            <label className="sr-only">Search</label>
            <div className="rounded-2xl shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]  h-14 px-10 flex items-center gap-3">
                <IoSearch className="text-xl text-orange-600 " />

                <input onChange={func} className='w-[100%] focus:outline-none focus:border-transparent' type="text" placeholder='Search Events,Sponsers,Speakers..' />

            </div>
        </form>

    )
}

export default searchbox