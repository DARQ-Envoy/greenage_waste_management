import { Canvas } from '@react-three/fiber'
import Button from '../components/Button'
import {Earth} from "../Earth"

const footer = () => {
  return (
    <footer className='p-10 pb-0 flex md:flex-row flex-col gap-2'>
            <Canvas className=' bg-gree-400 !h-[400px] md:!w-[60%] !w-full'>
                <ambientLight args={["#fff", 15]}/>
                <Earth position={[-50, 2, -1000]}/>
            </Canvas>
        <div className='p-4 font-serif '>
          <p className="font-medium text-darkGreen mb-5 max-w-[400px] ">
          Join us on this great journey - one that would be worth every effort put into it. Let us work together to save our planet. 
          </p>
    <Button text='Join Us' general classes='text-white border-2 border-theme'/>
  </div>

    </footer>
  )
}


     // (ref)=>{
                    // earthRef.current = ref;
                    // setRefSet((prev)=>!prev)
                // }
export default footer