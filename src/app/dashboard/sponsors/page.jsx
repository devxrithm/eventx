import React from 'react'
import Sponsor from "./sponsor"


const page = () => {
  return (
    <>
      <div className="flex flex-wrap">

        <Sponsor
          img="/Infosys.jpg"
          name=" INFOSYS Pvt Ltd."
          location="Banglore, Karnatka, India"
          amount="5,00,XXX"
          views="50000"
        />

        <Sponsor
          img="/gfg.jfif"
          name="GeekForGeeks"
          location="Banglore, Karnatka, India"
          amount="1,00,XXX"
          views="20000"
        />

        <Sponsor
          img="/fetchnew.jfif"
          name="Fetch.ai"
          location="Banglore, Karnatka, India"
          amount="1,00,XXX"
          views="20000"
        />

        <Sponsor
          img="/aws.png"
          name="AWS"
          location="Banglore, Karnatka, India"
          amount="1,00,XXX"
          views="20000"
        />

        <Sponsor
          img="/intel.png"
          name="Intel"
          location="Banglore, Karnatka, India"
          amount="1,00,XXX"
          views="20000"
        />

        <Sponsor
          img="/codingninja.png"
          name="Coding Ninja"
          location="Banglore, Karnatka, India"
          amount="1,00,XXX"
          views="20000"
        />


      </div>

    </>
  )
}

export default page