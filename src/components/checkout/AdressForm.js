import { React, useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { actionTypes } from '../../context/reducer';
import {useStateValue} from '../../context/StateProvider'; 
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import { Box } from '@mui/system';
import {useNavigate} from 'react-router-dom'

export default function AddressForm() {


  const [ {checkout_data, activeStep}, dispatch ] = useStateValue(); 
  const navigate = useNavigate();

  const [ firstName, setFN ] = useState("")
  const [ lastName, setLN ] = useState("")
  const [ address1, setA1 ] = useState("")
  const [ address2, setA2 ] = useState("")
  const [ city, setC ] = useState("")
  const [ state, setS ] = useState("")
  const [ zip, setZ ] = useState("")
  const [ country, setCountry ] = useState("")


const setData = () => {
    dispatch({
      type: actionTypes.SET_CO_DATA,
      checkout_data: {
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zip,
        country,
      }
    })
    if(firstName === "" || address1 === "" || city === ""){
      notDataAlert();
    } else {
      dispatch({
        type: actionTypes.SET_STEP,
        activeStep: activeStep + 1
      })
    }

  }

  const notDataAlert = ()=>{
    Swal.fire({
      title: '¡The data is incomplete!',
      showCancelButton: true,
      confirmButtonText: 'Ignore',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: actionTypes.SET_STEP,
          activeStep: activeStep + 1
        })
}})};
  


  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={firstName}
            required={true}
            helperText="Required"
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            variant="standard"
            onChange={(e)=>setFN(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={lastName}
            required={true}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e)=>setLN(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={address1}
            required={true}
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e)=>setA1(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={address2}
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(e)=>setA2(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={city}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e)=>setC(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={state}
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={(e)=>setS(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={zip}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e)=>setZ(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={country}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e)=>setCountry(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={()=>navigate('/basket')} sx={{ mt: 3, ml: 1 }}>
              Back to Basket
            </Button>
            <Button
                    variant="contained"
                    onClick={(e)=>setData()}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
          </Box>


        </Grid>
      </Grid>
    </>
  );
}

