import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';
import {products} from '../productsData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductsPage() {
  

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "space-around" }}>
      <Grid container spacing={1}>

        { products.map(product => 
        (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} >
          <ProductCard id={product.id} name={product.name} image={product.image} rating={product.rating} description={product.description} price={product.price} quantity={product.quantity} short_data={product.short_data}  />
          </Grid>

        ))
        };
      </Grid>
    </Box>
  );
}
