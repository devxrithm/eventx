import React from 'react'
import Eventbox from "./eventbox"
import Searchbar from "../../../components/searchbar"
import Eventpage from "./eventpage/page"

const page = () => {
  return (

    <>
      <div className="md:mx-5 mx-2 mt-5 flex justify-center">
        <Searchbar />
      </div>

      <div className='flex mx-2'>
        <div className="main mt-5 sticky top-1">
          <Eventpage />
        </div>

        <div className='border-l '>
          <Eventbox img="/box.jpg" />
          <Eventbox img="/box2.jpg" />
          <Eventbox img="/box3.jpg" />
          <Eventbox img="/box4.jpg" />
          <Eventbox img="/box5.jpg" />
          <Eventbox img="/box6.jpg" />
          <Eventbox img="/box.jpg" />
          <Eventbox img="/box2.jpg" />
          <Eventbox img="/box3.jpg" />
          <Eventbox img="/box4.jpg" />
          <Eventbox img="/box5.jpg" />
          <Eventbox img="/box6.jpg" />
        </div>




      </div>

    </>
  )
}

export default page