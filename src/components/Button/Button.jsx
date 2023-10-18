import React from 'react'
import './Button.css'
import {useState} from 'react'

function Button({button,currentColor}) {
  const [color,setColor] = useState(currentColor)
  const [initial,setInitial]   = useState(currentColor)

  const handleMouse = () => {
        setColor("dark_grey")
    }

   const handleMouseOut = ()=>{
       if(initial==="dark"){
        setColor("dark")}
        else{
            setColor("grey")
        }
   } 
 
    return (
    <>
        <div className="button_component">
        <button className={color} type="submit" onMouseOver={handleMouse} onMouseOut={handleMouseOut}>{button}</button>

        </div>
        
    </>
  )
}

export default Button