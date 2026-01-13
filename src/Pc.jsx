import React from 'react'

const Pc = ({Mydata}) => {
  return (
    <>
    <h1>Child</h1>
    {
        Mydata.map((e)=>(
            <div key={e.id}>
                <img src={e.img} alt="" height="100px" width="100px"/>
                <h1>{e.name}</h1>
                <p>{e.price}</p>
            </div>
        ))
    }
    </>
  )
}

export default Pc