import React from 'react'
import { IoSearch } from "react-icons/io5";

const searchbar = ({ func }) => {
    return (

        <form className='bg-white w-full rounded-2xl shadow-lg'>
            <label className="sr-only">Search</label>
            <div className="rounded-2xl  h-14 px-10 flex items-center gap-3">
                <IoSearch className="text-xl text-black" />

                <input onChange={func} className='w-[100%] focus:outline-none focus:border-transparent' type="text" placeholder='Search Events,Sponsers,Speakers..' />

            </div>
        </form>

    )
}

export default searchbar