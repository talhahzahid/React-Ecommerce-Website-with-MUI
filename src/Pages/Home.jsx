


import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
         .then((res)=>{
            console.log(res.data);
         }).catch((err)=>{
            console.log(err);
            
         })
    },[])
  return (
    <>
    <h1>Home</h1>
    </>
  )
}

export default Home