import React from 'react'

interface problemImageType {
    source: string
}

const problemImage:React.FC<problemImageType> = ({source}) => {
  return (
    <img src={source} alt="waste image"  className={` absolute top-[0%] translate-y-[0%] block min-w-[100%] opacity-0 object-cover max-h-[100%] mdm:max-h-auto rounded-[20px]`} />
  )
}

export default problemImage