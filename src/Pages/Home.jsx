


import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [data , setData] = useState(null)
    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
         .then((res)=>{
            console.log(res.data);
            setData(res.data)
         }).catch((err)=>{
            console.log(err);
            
         })
    },[])
  return (
 <>
 <h1>Home </h1>
 <div>
  {
    data ? (
    data.map((item)=>(
      <div key={item.id}><h1>{item.price}</h1></div>
    ))
    ):(<h1>loading....</h1>)
  }
 </div>
 </>
  )
}

export default Home