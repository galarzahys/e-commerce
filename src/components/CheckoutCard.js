import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import accounting from 'accounting';


export default function CheckoutCard(props) {


  const { name, price, rating, image, description } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography /*className={classes.action}*/
          variant='h7'
          color='textprimary'
          >{accounting.formatMoney(price, "$")}
          </Typography>
        }
        title={name}
        subheader="Black - 37 al 44"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
      />
      <CardActions disableSpacing>
        
        {Array(rating)
        .fill()
        .map((_, i) => (
          <p>&#11088;</p>
        ))}
        <IconButton aria-label="Add to Cart">
          <DeleteIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}


