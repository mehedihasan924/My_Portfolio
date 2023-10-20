import React from 'react'
import './card.css'

const card = ( {emoji, heading, detail}) => {
  return (
    <div className="card">
        <div className='cart-item' style={{display:"flex",  paddingBottom: "2rem", flexDirection:"column", justifyContent:"center", height:"15rem"}} >
            <img src={emoji} alt="" />
            <span>{heading}</span> <br />
            <span>{detail}</span><br/>
            <button className='c-button'> Learn More </button>
        </div>
    </div>
  )
}

export default card