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
  
  console.log(products)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>

        { products.map(product => 
        (
        <Grid item xs={6} sm={4} md={2} key={product.id} >
          <ProductCard name={product.name} image={product.image} rating={product.rating} description={product.description} price={product.price}  />
          </Grid>

        ))
        };
      </Grid>
    </Box>
  );
}
