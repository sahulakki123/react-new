import React from 'react'
import Pc from './Pc'
import im from "./assets/im.jpg"

const Map = () => {

    let Props= [
        {
            id : "1",
            img:[im],
            name:"char",
            price:52465

        },  {
            id : "2",
            img:[im],
            name:"char",
            price:52465

        },  {
            id : "3",
            img:[im],
            name:"char",
            price:52465

        }
    ]
  return (
    <>
    <h1>Props</h1>
        <Pc Mydata={Props}/>

    </>
  )
}

export default Map