import React, { useState } from 'react'

const Prectice = () => {

    let [form, setform] = useState({
        myname:"",
        age:"",
        city:"",
        email:""
    })

    let handling=(e)=>{
        setform({ ...form , [e.target.name]:e.target.value})
    }
  return (
    <>
    <form action="">
        <h1>Form Handling</h1>
        <div >
        Enter The Name <input type="text" name="myname" value={form.myname} onChange={handling}/>
        <h1>My name {form.myname}</h1>

        Enter The Age <input type="text" name="age" value={form.age} onChange={handling}/>
        Enter The City <input type="text" name="city" value={form.city} onChange={handling}/>

        Enter The Email <input type="text" name="email" value={form.email} onChange={handling}/>
        </div>
        </form>

        <button>Submit</button>
    </>
  )
}

export default Prectice