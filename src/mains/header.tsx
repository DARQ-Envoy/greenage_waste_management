import React, { useState } from 'react'
import girlVideo from "/src/assets/waste_images/videos/istockphoto-1164875873-640_adpp_is.mp4"
import motherVideo from "/src/assets/waste_images/videos/istockphoto-889032148-640_adpp_is.mp4"
import ladyVideo from "/src/assets/waste_images/videos/istockphoto-1323692175-640_adpp_is.mp4"
import bGirlVideo from "/src/assets/waste_images/videos/istockphoto-1201411962-640_adpp_is.mp4"
import Button from '../components/Button'

const header:React.FC= () => {
  const allBgImages = [
    motherVideo,
    ladyVideo,
    bGirlVideo,
    girlVideo
  ];
  const index = Math.floor(Math.random()*4);

  const imgs = allBgImages[index]
  const [bgImage] = useState<string>(imgs);
 function setBeforeBorderColour(color: string):string{
  const configuration =  `before:border-t-${color} before:border-l-${color} after:border-l-${color} after:border-b-${color}`
      return configuration
 }
  return (
    <>
        <header className={`relative w-[100vw] lg:min-h-[90vh] min-h-[430px] z-[10]`}>

          <video src={bgImage} className='absolute top-0 left-0 h-full w-full object-cover  z-[-1]' loop muted autoPlay></video>
          {/* navigation */}
          <nav className="flex items-stretch justify-between py-5 sm:px-[10%]  px-[10px] mb-5 font-medium">
            <h1 className={`sm:text-3xl text-2xl tracking-widest  ${bgImage === ladyVideo || bgImage === bGirlVideo?"text-theme": "text-white"} `}>Smart Waste Bin</h1>            
            {/* <Logo/> */}
            <Button text={"Request a pickup"} general classes={`text-theme  border border-theme border-1 rounded-md ${bgImage === ladyVideo || bgImage === motherVideo?"bg-white bg-opacity-80": "bg-transparent"} hover:bg-white hover:bg-opacity-50 md:px-7 px-2 `} />
          </nav>
          {/* Hero section */}
          <div id="hero" className='relative w-full sm:w-[80%] md:w-[50%] md:bg-yellow flex flex-col justify-around pl-[5%]  sm:pl-[10%] py-8'>

            <div id="information" className={`relative max-h-fit bg-red py-5 pl-5  max-w-[100%] ${bgImage === ladyVideo || bgImage === bGirlVideo?setBeforeBorderColour("theme"): setBeforeBorderColour("white")}`}>
              <p className='text-white text-4xl max-w-[90%]
        md:font-semibold'>We can make a cleaner future {" "}
                <span className='text-theme'>
                  together
                </span>
              </p>
              <div id="side-overlay" className='h-[110%] w-1/2 md:w-[60%] bg-black bg-opacity-40 absolute right-0 top-0 z-[-1] border-t-[6px] border-theme '>
              </div>
            </div>

            <div className="links mt-10 flex gap-x-2 font-medium">
              <Button text='What we do' general classes='text-white' />
              <Button text='Get Started' classes='px-7 py-3 text-white border border-1 border-white rounded-md hover:bg-white hover:text-theme hover:bg-opacity-70 transition-colors duration-500 ease hover:border-theme' />
            </div>
          </div>
        </header>
    </>
  )
}

export default header