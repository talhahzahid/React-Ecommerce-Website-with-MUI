



import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect , useState} from 'react'
import { Box, Typography } from '@mui/material'
const Singleproduct = () => {
  const {id} = useParams()
  let [data ,setData ] = useState([])  
  useEffect(()=>{
    axios(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      setData(res.data)
      console.log(res.data);
      
    })
  },[])
  return (

    // <Box>Singleproduct {id}</Box>
    // <Box>
    //   { data ? 
      
    //   <Box sx={{
    //     display:"flex",
    //     justifyContent:'center',
    //     alignItems:"center",
    //   }} >
    //     <Typography><img style={{width:"20rem"}} src={data.image} alt="" /></Typography> 
    //     <Typography>{data.title }</Typography> 
    //     <Typography>{data.price }</Typography> 
    //     <Typography>{data.description }</Typography> 
    //   </Box>:<Typography>loading...</Typography>}
    // </Box>
    <Box 
    sx={{
      marginTop:"40px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 2,
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      maxWidth: '300px',
      mx: 'auto',
      textAlign: 'center'
    }}
  >
    {data ? (
      <>
        <img 
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
          src={data.image} 
          alt={data.title} 
        />
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>{data.title}</Typography>
        <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>{data.price}</Typography>
        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>{data.description}</Typography>
      </>
    ) : (
      <Typography>Loading...</Typography>
    )}
  </Box>
  )
}

export default Singleproduct