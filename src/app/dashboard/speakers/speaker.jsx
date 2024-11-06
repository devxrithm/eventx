import React from 'react'
import Image from 'next/image'
import { IoCallSharp } from "react-icons/io5";



const speaker = ({ img, name, position, amount, views }) => {
    return (
        <>
            <div className="border flex flex-col gap-3 w-[20rem] justify-center items-center bg-white rounded-md p-3 shadow-md">
                <div className="">
                    <Image
                        src={img}
                        width={230}
                        height={230}
                        alt="Picture of the author"
                        className="rounded-lg shadow-md"
                    />
                </div>

                <div className="container text-center ">
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <h2 className='text-xl font-semibold'>{position}</h2>
                </div>

                <div className="border bg-teal-950 text-white px-10 py-2 rounded-md font-semibold flex items-center gap-3">
                  Connect
                </div>

            </div>
        </>
    )
}

export default speaker