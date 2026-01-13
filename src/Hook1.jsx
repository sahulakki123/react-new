import React, { useState } from 'react'

const Hook1 = () => {

  let [dark, setdark] = useState(false)

  return (
    <>
      <h1
        style={{
          backgroundColor: dark ? "black" : "white",
          color: dark ? "white" : "black",
          padding: "20px"
        }}
      >
        {dark ? "Dark Mode" : "Light Mode"}
      </h1>

      <button
        onClick={() => setdark(!dark)}
        style={{ height: "50px", width: "150px" }}
      >
        {dark ? "Switch to Light" : "Switch to Dark"}
      </button>
    </>
  )
}

export default Hook1
