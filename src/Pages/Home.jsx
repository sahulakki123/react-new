import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let usenavi= useNavigate()

  let okk=()=>{
    usenavi('/contact')
  }
  
  return (
    <>
    <h1>home page</h1>

    <button onClick={okk}>home page</button>
    </>
  )
}

export default Home