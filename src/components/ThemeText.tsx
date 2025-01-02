
import React from 'react'

interface TextProps{
    children:React.ReactNode,
    className?:string,
    fontWeight:'font-bold' | 'font-semibold' | 'font-medium' | 'font-normal',
    
 }
 const ThemeText = (props:TextProps) => {
    
  return (
    <p className={` 
    ${props.className} ${props.fontWeight}`}>
    {props.children}
  </p>
  )
}
export default ThemeText