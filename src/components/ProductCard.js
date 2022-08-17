import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import { actionTypes } from '../context/reducer';
import {useStateValue} from '../context/StateProvider'; 


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard(props) {

  const [ {basket}, dispatch ] = useStateValue(); 

  const [expanded, setExpanded] = React.useState(false);

  const { id, name, price, rating, image, description } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const AddToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        image,
        price,
        rating,
        description 
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography /*className={classes.action}*/
          variant='h5'
          color='textSecondary'
          key={id}
          >{accounting.formatMoney(price, "$")}</Typography>
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={AddToBasket}>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(rating)
        .fill()
        .map((_, i) => (
          <p>&#11088;</p>
        ))}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}


