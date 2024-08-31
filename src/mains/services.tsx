import React from 'react'
import { useSelector} from 'react-redux';
import {AllserviceType} from '../Redux/services/reducer'
import { GlobalState } from '../Redux/store';
import Service from '../components/Service';
import {useEffect} from "react"
import gsap from 'gsap';


const services:React.FC = () => {
const allServices = useSelector((state:GlobalState):AllserviceType=>state.services);
const ourServices:JSX.Element[] = allServices.map(({heading, imageAlt, imageSrc, details, linkUrl, videoSrc}, index)=>{
      return (<Service heading={heading} imageSrc={imageSrc} details={details} imageAlt={imageAlt} id={index} linkUrl={linkUrl} videoSrc={videoSrc}  key={index}/>) 
})
useEffect(() => {
  const media= gsap.matchMedia();
  media.add("(min-width: 768px)", ()=>{

      gsap.to(".single-service",{
        y:0,
        stagger:0.2,
        opacity:1,
        duration: 0.3,
        ease: "none",
       scrollTrigger:{
        trigger: "#our-services",
        start: "top 40%",
        // markers:true,

       } 
      }

      )
  })
   
  

  return () => {
    media.revert()
  }
})

  return (
    <section className='bg-white mx-auto'>
      <div  id='our-services' className=' p-5 md:grid grid-cols-2  flex flex-col  items-center gap-5'>
      <div id='services-heading' className="mb-5 sm:w-[60%] md:w-[80%] self-start md:mx-auto py-5">
            <h1 className='text-3xl font-bold text-darkGreen mb-2 font-serif'>Waste Services</h1>
            <p className='indent text-sm p-1 font-medium text-veryDarkGreen'>
          We are <span className='text-[#03ca03]'>Earth Lovers</span> and we are commited to making the earth a safe place for everyone and everything that breathes. And this passion of ours is the driving force behind all the services we offer.
            </p>
        </div> 
        {ourServices}
      </div>

    </section>
  )
}

export default services;
// export type {storeServiceType}