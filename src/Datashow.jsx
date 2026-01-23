import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Datashow = () => {

    let [data, setdata]= useState([])

    let FetchData = ()=>{
        let api = 'http://localhost:3000/protin'

        axios.get(api).then( (res)=>{
            console.log(res.data);
            setdata(res.data)
            
        }).catch( (err)=>{
            console.log(err);
            
        })

    }

    useEffect(()=>{
       FetchData()
    })

    let Deletedata=(id)=>{
        let api = `http://localhost:3000/protin/${id}`
        axios.delete(api).then(()=>{
            FetchData()
            alert("Data Delete")
        })

    }


  return (
    <>

    {/* npm i axios */}
    <h1>Data</h1>
    <table border="2px">
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Prodect Name</th>
                    <th>items</th>
                    <th>Deliveryadd</th>
                    <th>Delate</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.username}</td>
                            <td>{e.Prodectname}</td>
                            <td>{e.items}</td>
                            <td>{e.Deliveryadd}</td>
                            <td onClick={()=>{Deletedata(e.id)}}>Delete</td>
                        </tr>
                    ))}
            </tbody>
    </table>




    </>
  )
}

export default Datashow