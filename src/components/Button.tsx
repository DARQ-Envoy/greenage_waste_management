import React from 'react'

interface ButtonInputType {
  text: string,
  href?: string
  target?: string
  classes?: string
  general?: boolean
}
// const padding = " px-7 py-3 "
// const styling = "bg-theme rounded-md  hover:bg-white hover:text-theme hover:bg-opacity-70 transition-colors duration-500 ease "


const padding = " px-7 py-3 inline-block bg-theme rounded-md  hover:bg-white hover:text-theme hover:bg-opacity-70 transition-colors duration-500 ease "


const button: React.FC<ButtonInputType> = ({ text, href = "#", target = "", classes = padding, general = false }) => {
  classes += general && classes !== padding ? padding : ""
  return (
    <a href={href} target={target} className={classes}>{text}</a>
  )
}

export default button