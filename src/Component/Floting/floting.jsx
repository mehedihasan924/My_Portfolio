import React from 'react'
import './floting.css'

const floting = ({image, text1,text2  }) => {
  return (
    <div className="flotingDiv">
        <img src={image} alt="" />
        <span> {text1} <br />
         {text2} </span>
     
    </div>
  )
}

export default floting;