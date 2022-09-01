import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useStateValue } from '../../context/StateProvider';
import accounting from 'accounting';
import { getBasketTotal } from '../../context/reducer';
import { Box, Button } from '@mui/material';
import { actionTypes } from '../../context/reducer';



export default function Review() {

  const [{ basket, checkout_data, payment_data, activeStep }, dispatch] = useStateValue();

  const cardNumber = payment_data.cardNumber.slice(8, 12);

  const handleBack = () => {
    dispatch({
      type: actionTypes.SET_STEP,
      activeStep: activeStep - 1,
    });
  };

  const handleNext = () => {
    dispatch({
      type: actionTypes.SET_STEP,
      activeStep: activeStep + 1,
    });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basket.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">{accounting.formatMoney(product.price, "£" )}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {accounting.formatMoney(getBasketTotal(basket), "£" )}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{checkout_data.firstName} {checkout_data.lastName}</Typography>
          <Typography gutterBottom>{checkout_data.address1} {checkout_data.address2}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
              <>
                <Grid item xs={12}>
                  <Typography gutterBottom>{payment_data.cardName}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom>XXXX XXXX {cardNumber}</Typography>
                </Grid>
              </>

          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              Confirm
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}