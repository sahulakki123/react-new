import React from 'react'
import im from "./assets/im.jpg"
import C from './C'

const P = () => {
  return (
    <>
    <div style={{display:"flex"}}>
    <C im={im} price="700" mydes="T-shirt"/>
    <C im={im} price="700" mydes="T-shirt"/>
    <C im={im} price="700" mydes="T-shirt"/>
    <C im={im} price="700" mydes="T-shirt"/>
    <C im={im} price="700" mydes="T-shirt"/>
    </div>
    </>
  )
}

export default P