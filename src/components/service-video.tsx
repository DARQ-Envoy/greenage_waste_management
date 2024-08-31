import React from 'react'


interface SVideo {
    video: string,
}
const serviceVideo: React.FC<SVideo> = ({video}) => {
  return (
    <video src={video}
    loop
    muted
    className='max-h-full min-w-full absolute  top-0 left-0 object-fill service-video rounded-[15px]'
    ></video>
  )
}

export default serviceVideo