import React, { useState } from 'react'

const From = () => {

    let [form, setform] = useState({
        myname:"",
        mynumber:"",
        myemail:""
    })

    let handlechange=(e)=>{
        setform({ ...form ,[e.target.name]:e.target.value})
    }

    let landlesubmit=(e)=>{
        e.preventDefault()
        let valid = true

        if (form.myname.trim()==""){
            alert("Enter name")
            valid = false
        }
        else if(form.mynumber.trim()==""){
            e.preventDefault()
            alert("Enter Number")
            valid=false
        }
        else if(form.myemail.trim()==""){
            e.preventDefault()
            alert("Enter email")
            valid=false
        }
        if(valid){
            alert("Form Submited")
        }
    }

  return (
    <>
        <h1>Sign Up Form</h1>

            <form onSubmit={landlesubmit}>
                Enter The Name <input type="text" name='myname' value={form.myname} onChange={handlechange}/>  <br /><br />
                Enter The Number <input type="text" name='mynumber' value={form.mynumber} onChange={handlechange} /> <br /><br />
                Enter The Email <input type="text" name='myemail' value={form.myemail} onChange={handlechange} /> <br /><br />

                <button type='submit'>Sign UP</button>
            </form>
    </>
  )
}

export default From