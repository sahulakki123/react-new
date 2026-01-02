import React from 'react'
import im from "./assets/im.jpg"
import "./index.css"

const C = ({im,price,mydes}) => {
  return (
    <>
    <div>
        <div id='card'>
            <img src={im} alt="" width="100%" height="200px" />
            <h1>price {price}</h1>
            <h3>{mydes}</h3>
            <button>Buy Now</button>
        </div>

    </div>
    </>
  )
}

export default C