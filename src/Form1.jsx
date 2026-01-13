import React, { useState } from 'react'

const Form1 = () => {


    let [form, setform]=useState({
        myname:"",
        myage:"",
        mycity:""
    })

    let handechange=(e)=>{
        setform({ ...form , [e.target.name]:e.target.value })

    }


    let handlesubmit=(e)=>{
      e.preventDefault()
      let valid = true

      if (form.myname.trim()==""){
        alert("fill name")
        valid = false
      }
        
      else if(form.myage.trim()==""){
        alert("number empty")
        e.preventDefault();
         valid = false
      }

      else if(form.mycity.trim()==""){
        alert(" fill city")
        e.preventDefault();
         valid = false
      }
      if (valid){
        alert("Form Submited")
      }

    }

  return (
    <> 
    
        <h1> Form</h1>



      <form onSubmit={handlesubmit}>
        
          Enter the name <input type="text"  name='myname' value={form.myname} onChange={handechange} /> <br /> <br />

          Enter My age <input type="num" name='myage' value={form.myage} onChange={handechange} /><br /> <br />


          Enter City <input type="text" name='mycity' value={form.mycity} onChange={handechange} /> <br /> <br />

          <button type='submit'>Sign up</button>

      </form>

    </>
  )
}

export default Form1