import React from 'react'
import { IconButton, Button, Badge, Divider, Toolbar, Typography, Card, CardActionArea, CardContent, CardMedia, CardActions } from '@mui/material'
//import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import Badge from '@mui/material/Badge';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
//import Box from '@mui/system/Box';
import iPhoneImage from 'D:/React Projects/e-commerce-system/src/assets/images/iPhone 16.jpeg';
//import CardActionArea from '@mui/material/CardActionArea';
//import CardActions from '@mui/material/CardActions';



const ProductList = () => {


  return (
  <>
  <Toolbar
   sx={{
     display: 'flex',
     justifyContent: 'space-between', 
     alignItems: 'center', 
     color:'#01579b',
   }}
  >
    <Typography variant='h4'>AppleStore</Typography>

    <IconButton>
    <Badge badgeContent={5} color="primary">
      <ShoppingCartIcon sx={{ color: '#0277bd' }}/>
      </Badge>
      </IconButton>
      
    
  </Toolbar>

  <Divider/>

  <Toolbar
  sx={{
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
    color: '#0277bd',
  }}
  >
    New Arrivals
    
  </Toolbar>

  <Card sx={{ maxWidth: 250, paddingTop: 25, color: '#4fc3f7', display: '-moz-initial' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={iPhoneImage}
          alt="iPhone 16"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">

            {/* <Box sx={{ color: '#4fc3f7' }}>iPhone 16</Box>
            <Box sx={{ color: '#4fc3f7' }}>Price: Rs.259,990.00</Box>
            <Box sx={{ color: '#4fc3f7' }}>Available Quantity: 50</Box> */}
            iPhone 16 <br />
            Price: Rs.259,990.00 <br />
            Available Quantity: 50 <br />

          </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
    

  </>
  ); 
}

export default ProductList;

