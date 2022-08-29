import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { getBasketTotal } from "../context/reducer";
import accounting from "accounting";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    root : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
        boxShadow: "1px 1px 3px #313843",
        margin: "5px",
        padding: "0"
    },
    
    button : {
        marginTop: "2rem"
    }

}))

const Total = () => {

    const [ {basket}, dispatch ] = useStateValue(); 

 

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h5>Total items : {basket?.length}</h5>
        <h3>{accounting.formatMoney(getBasketTotal(basket), "£" )}</h3>
        <Link to={"/checkout"} style={{ textDecoration: "none"}}>
        <Button className={classes.button} variant="contained" color="secondary">Finalizar Compra</Button>
        </Link>
        </div>
    )
}

export default Total;