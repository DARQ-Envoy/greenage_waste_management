import React, { useState } from 'react'
import { useRef } from 'react'
import arrow from "../assets/waste_images/arrow-icon.svg"
import ServiceVideo from './service-video'
import { serviceType } from '../Redux/services/action_creators'

interface componentServiceType extends serviceType{
  id: number
}


const service: React.FC<componentServiceType> = ({imageSrc, imageAlt, heading, details, videoSrc}) => {
  const serviceParentRef = useRef<HTMLDivElement|null>();
  const [, setRefSet] = useState<boolean>(false);


  
  return (
    <div id='service' className='single-service relative max-w-[400px] w-[100%] max-h-fit border-[1px] border-themeLight  rounded-[15px] z-[1]  bg-gray-100 bg-opacity-70 hover:bg-opacity-0 transition-all duration-500 py-2 pt-4 md:translate-y-[100%] md:opacity-[0] mx-auto'
    ref={(ref)=>{
      serviceParentRef.current = ref;
      setRefSet((prev)=>!prev)
    }}
    onMouseEnter={()=>{

      if(serviceParentRef.current){
        const allChildren = serviceParentRef.current.children
        const video = allChildren[0] as HTMLVideoElement;
        video.play()
      }
    }}
    onMouseLeave={()=>{
      if(serviceParentRef.current){
        const allChildren = serviceParentRef.current.children
        const video = allChildren[0] as HTMLVideoElement;
        video.pause()
      }
    }}
    >
     {/* <div> */}
 <ServiceVideo video={videoSrc}/>
      <div id='service-content' className='flex items-center justify-start gap-1 transition-all duration-500'
      
      >

        <img src={imageSrc} alt={imageAlt} className='h-[50px] w-[50px] object-contain inline-block mx-5 bg-[url("./assets/waste_images/noun-splatter-4376216.svg")] bg-no-repeat bg-[center_left_-0.6rem]  bg-[length:150%_150%]' />
        <div className='text-theme w-[70%] '>
      
            <h2 className=' font-bold mb-2 text-darkGreen'>{heading}</h2>
            <p className='font-medium mb-2 indent-1 text-veryDarkGreen text-sm'>{details}</p>
      
        </div>
        
    </div>
    <a href="#" className='p-2 rounded-full border-2 border-darkGreen block mt- mr-2 ml-auto max-w-fit bg-gray-100 bg-opacity-70'>
            <img src={arrow} alt="Arrow icon" className='' />
            </a>
    </div>

  )
}
// bg-[left_top_-0.8rem]
// export type {};
export default service