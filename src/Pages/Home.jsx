


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Typography } from '@mui/material';
import MultiActionAreaCard from '../Components/Card';


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
      <Box>
        <Typography variant='h4'className='text-center mt-3'>
          Our Products
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            justifyContent: 'center',
            marginTop:"20px",
          }}
        >
          {data ? (
            data.map((item) => (
              <Box key={item.id} sx={{ flex: '1 1 300px' }}>
                <MultiActionAreaCard
                  items={item}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </Box>
            ))
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Box>
      </Box>
    );
  
}

export default Home