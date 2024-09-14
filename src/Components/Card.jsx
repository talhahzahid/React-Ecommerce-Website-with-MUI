import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';

export default function MultiActionAreaCard({image,title,price,items}) {

     const navigate = useNavigate()
    const singleProduct = () =>{
   console.log(items);
   navigate (`/singleproduct/ ${items.id}`)
   
    }
  return (
    <Card sx={{ maxWidth: "20rem"}} className='container'>
      <CardActionArea >
        <CardMedia 
          component="img"
          height="400"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary' }}>
           ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant='outlined' onClick={singleProduct}>
          Show more
        </Button>
      </CardActions>
    </Card>
  );
}