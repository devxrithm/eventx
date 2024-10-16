import React from 'react'
import Speaker from "./speaker"

const page = () => {
  return (
    <>
      <div className="flex flex-wrap gap-8 mx-5 my-5 justify-center">
        <Speaker
          img="/img1.jfif"
          name="John Doe"
          position="SDE at Google"
        />
        <Speaker
          img="/lily.jfif"
          name="Lily"
          position="SDE at Adobe"
        />
        <Speaker
          img="/david.jfif"
          name="David"
          position="Advocate at ETH"
        />
        <Speaker
          img="/PHILIP.jfif"
          name="PHILIP"
          position="Product Manager at Google "
        />
        <Speaker
          img="/jordan.jfif"
          name="Jorgan"
          position="Consultant"
        />
        <Speaker
          img="/trish.jfif"
          name="Trish"
          position="CTO at Dot"
        />
        <Speaker
          img="/peter.jfif"
          name="Peter"
          position="CEO at Square"
        />
      </div>
    </>
  )
}

export default page