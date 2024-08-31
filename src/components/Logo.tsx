import React from 'react'
import Recycle from "../assets/waste_images/noun-recycle-5978110.svg"

const Logo: React.FC = () => {
  return (
    <div className="relative ">

         <h1 className="text-white text-3xl tracking-widest bg-green-00">Green
            <span className='h-[12px] bg-red-00 inline-block translate-y-[45%] overflow-hidden'><span className='-translate-y-[67%] inline-block'>A</span></span>ge</h1> 
                   <img src={Recycle} alt="Recycle icon" className='absolute top-[13%] right-[26.25%] h-[23px] w-[23px] bg-wh'/>
            </div>
  )
}

export default Logo