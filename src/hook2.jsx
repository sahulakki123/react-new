import React, { useState } from 'react'

const Hook1 = () => {

  const [show, setshow] = useState(false)

  return (
    <>
      {show && <h1>Hello</h1>}

      <button onClick={() => setshow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </>
  )
}

export default Hook1
