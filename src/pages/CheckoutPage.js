import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Total from "../components/Total";
import { useStateValue } from "../context/StateProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import accounting from "accounting";
import { Box } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const CheckoutPage = () => {
  const [{ basket, checkout_data, payment_data }, dispatch] = useStateValue();

  console.log(checkout_data)

  const unifiedBasket = basket.reduce((acum, actualValue) => {
    const existingItem = acum.find(
      (e) => e.id === actualValue.id
    );

    if (existingItem) {
      return acum.map((e) => {
        if (e.id === actualValue.id) {
          return {
            ...e,
            quantity: e.quantity + actualValue.quantity,
          };
        }
        return e;
      });
    }

    return [...acum, actualValue];
  }, []);

  const getSubtotal = (cant, price) => {
    return cant * price;
  }

  function FormRow() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <TableContainer component={Paper}  style={{ marginLeft: "20px", maxWidth: "95%", padding: "0px"}}>
          <Table item xs={12} sm={6} md={3} size="small" style={{ marginLeft: "20px", maxWidth: "95%", padding: "0px"}} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {unifiedBasket.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="right">{accounting.formatMoney(row.price, "£") }</TableCell>
                  <TableCell align="right">{accounting.formatMoney(getSubtotal(row.quantity, row.price), "£" )}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" style={{ marginBottom: "50px"}} gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
            <Total />
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
