import axios from 'axios'
import React, { useEffect } from 'react'

const Datashow = () => {

    useEffect(()=>{
        let api = 'http://localhost:3000/protin'

        axios.get(api).then( (res)=>{
            console.log(res.data);
            
        }).catch( (err)=>{
            console.log(err);
            
        })
    })
  return (
    <>

    {/* npm i axios */}
    <table>
        
    </table>




    </>
  )
}

export default Datashow