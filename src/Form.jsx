import React, { useState } from 'react'

const Form = () => {


    let [myname, setname]=useState('')
    let [myage, setage]=useState('')
    let [email, setemail]=useState('')

    let   handechange=(e)=>{

        setname(e.target.value)
    }

    // let handechange1=(e)=>{
    //     setage(e.target.value)
    // }
    let handechange2=(e)=>{
        setemail(e.target.value)
    }

  return (
    <>
          <h1>Form Handeling</h1>

          Enter the name <input type="text"  value={myname} onChange={handechange} />
          <h1 style={{color:'red'}}>My Name{myname}</h1>


          Enter My age <input type="num" value={myage} onChange={(e)=>{setage(e.target.value)}} />
          <h1 style={{color:'red'}}> My age{myage}</h1>


          Enter Email <input type="text" value={email} onChange={handechange2} />
          <h1 style={{color:'red'}}>My Email{email}</h1>

          <button>Submit</button>

    </>
  )
}

export default Form