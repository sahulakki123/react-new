import React from 'react'

const Child = (p) => {

    // destruchuring  =({name, age})
    console.log(p);
    let {name, age}=p
    


    
  return (
    <>
    {/* <div >
    <div style={{background:"red", width:"100px"}}>
    Child
    <h1>my name is {p.name}</h1>
    <p>my age is {p.age}</p>
    </div>
    </div> */}



  {/* destruchuring */}

    <div >
    <div style={{background:"red", width:"100px"}}>
    Child
    <h1>my name is {name}</h1>
    <p>my age is {age}</p>
    </div>
    </div>
    
    </>

  )
}

export default Child