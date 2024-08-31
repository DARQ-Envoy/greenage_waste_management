import React, { useEffect, useRef, useState} from 'react'
// import * as allWasteHeaps from "../Waste_management_app_frontend/assets/waste_images/trash_heaps/"
import img1 from "/src/assets/waste_images/trash_heaps/overflow-bin.jpg"
import img2 from "/src/assets/waste_images/trash_heaps/refuse-dump.jpg"
import img3 from "/src/assets/waste_images/trash_heaps/wailing-dolphin.jpg"
import img4 from "/src/assets/waste_images/trash_heaps/seabed-dump.jpg"
import img5 from "/src/assets/waste_images/trash_heaps/roadside-heap.jpg"
import img6 from "/src/assets/waste_images/trash_heaps/truckandtrash.jpg"




import Button from '../components/Button';
import gsap from "gsap"
import {Typewriter} from "react-simple-typewriter"
import ProblemImage from "../components/problem-image"
// import problemBg from "../assets/waste_images/problem-bg-img.jpg"

const problem: React.FC = () => {
const allImagesCont = useRef<HTMLDivElement|null>();
const problemsParent = useRef<HTMLDivElement|null>();
const [refSet,setRefSet] = useState<boolean>(false)
const allValues = [img1, img2, img3, img4, img5, img6];
const [startTypewriter, setStartTypewriter] = 
useState<boolean>(false);
let index = useRef<number>(-1);

function runTypewriter():JSX.Element{
  const writer =    <Typewriter         
  words={[`
  Poor waste management is polluting our air, water and soil and this is no good for us as this could contaminate our food and water sources, increasing our chances of contacting deadly diseases.       \r\r
  This failure of ours is slowly eating up this beautiful planet and all forms of life on it.      
  But hey,           you can play a part in averting the impending catastrophic consequences of this failure of mankind.     
      The big question though is          would you?
  `]}
  typeSpeed={50}
  cursor
  cursorBlinking
  cursorColor='theme'
/>       
  return writer
} 
useEffect(()=>{
  let animation : gsap.Context;
  // let animation2 : gsap.Context;


        if(allImagesCont.current){
          const allHeapImg:HTMLImageElement[] =Array.from(allImagesCont.current.children) as HTMLImageElement[];


 animation=gsap.context(()=>{
// Please check if this was made properly

 let timeline = gsap.timeline({paused: true, onComplete:()=>{
               animated(getPElement())
           }})
          function getPElement(): HTMLImageElement[]{
            let  indexValue = index.current
              indexValue++
              let presentIndex= indexValue;
              let nextIndex = indexValue + 1;
                if(indexValue == allHeapImg.length - 1){
                  presentIndex = indexValue
                  indexValue = -1
                  nextIndex = indexValue + 1
                }
              index.current = indexValue
                return [allHeapImg[presentIndex], allHeapImg[nextIndex]]
              }
                 
           
          //  function animated(objects: HTMLImageElement[]):gsap.core.Timeline{
            function animated(objects: HTMLImageElement[]){
            const [presentObject, nextObject] = objects;
           timeline.fromTo(presentObject,{
            opacity: 1
           }, {
              delay: 2,
              opacity: 0,
              duration: 0.5,
           })
           timeline.to(nextObject,{
                opacity:1,
                duration: 0.5,
                // onComplete: ()=>{
                  
                //  }
           }, ">")
          //  return timeline

          gsap.to(".problem",{
            scrollTrigger: {
              trigger: "#problem-section",
              start: "top 30%",
            },
              y: 0,
              opacity:1,
              duration: 0.7,
              onComplete: ()=>{
                timeline.play();
                setStartTypewriter(true);
              }
          
          })
      }
      return animated(getPElement())
          })
          
          
        }
        return ()=>{
          animation.revert()
         }
},[refSet])



function loadImages(arg: Array<string>):JSX.Element[]{
   const allImages: JSX.Element[] =
   arg.map((imgSrc, index)=>{
        return <ProblemImage source={imgSrc} key={index}/>
    });
    return allImages

}

  return (

    <section className='bg-[url("/src/assets/waste_images/problem-bg-img.jpg")] bg-[length:150px_150px] bg-contain p-10' id='problem-section'>
        <div className={`mdm:flex mdm:flex-row gap-10 justify-around min-h-[430px] bg-opacity-60 bg-white`} ref={(ref)=>{
          problemsParent.current = ref;
          setRefSet((prev)=>!prev)
        }}>
        {/* <div id="wasteHeap" className='md:block w-[60%] overflow-hidden relative text-white bg-black bg-opacity-60 p-3'> */}
        <div className='flex-1 p-5 bg-re-600 max-w-[540px] bg-white bg-opacity-70 problem translate-y-[60%] opacity-0 mdm:order-1 order-2'>
 
        <h1 id='poor-mgt-head' className='text-3xl font-semibold text-gray-600 font-serif mb-7'>Poor Waste Management</h1>
            <div id='poor-mgt-text' className='font-medium text-base font-serif mb-5 min-h-[170px]'>
              { startTypewriter? runTypewriter(): ""}

           
            </div>
            
            <Button text='Get Started' general classes='mt-5 text-white border border-1 border-theme font-medium'/>
        </div>
        <div id="wasteHeap" className=' mdm:max-w-[400px] max-w-[350px] mdm:w-[40%] overflow-hidden relative text-white  max-h-[420px] mdm:min-h-auto min-h-[200px] mdm:block order-1 hidden problem translate-y-[60%] opacity-0
        ' ref={
          (ref)=>{
            allImagesCont.current = ref;
            setRefSet((prev)=>!prev)
          }
        }>
               {/* <div id="wasteHeap" className=' mdm:max-w-[400px] max-w-[350px] mdm:w-[40%] overflow-hidden relative text-white  max-h-[420px] mdm:min-h-auto min-h-[200px] mdm:block order-1 hidde problem translate-y-[ opacity-0 absolute top-[0%] left-[0]
        ' ref={
          (ref)=>{
            allImagesCont.current = ref;
            setRefSet((prev)=>!prev)
          }
        }>*/}
            {loadImages(allValues)}
xs        </div> 
        </div>
    </section>
  )
}

export default problem