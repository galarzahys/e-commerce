import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckoutCard from '../components/CheckoutCard';
import Total from '../components/Total';
import {useStateValue} from '../context/StateProvider'; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CheckoutPage = () => {

    const [ {basket}, dispatch ] = useStateValue(); 

    function FormRow () {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                     <Grid item xs={6} sm={4} md={2} key={item.id} >
                        <CheckoutCard name={item.name} image={item.image} rating={item.rating} description={item.description} price={item.price}/>
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    console.log(basket)

return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography align='center' gutterBottom variant= 'h4'>
                    Shopping Cart
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Typography>
                    <Total />                </Typography>
            </Grid>
        </Grid>

    </div>
)
}

export default CheckoutPage;