import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme)=>({
    root : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
        boxShadow: "1px 1px 3px #313843"
    },
    
    button : {
        marginTop: "2rem"
    }

}))

const Total = () => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h5>Total items : 3</h5>
        <h3> $ 10000 </h3>
        <Button className={classes.button} variant="contained" color="secondary">Finalizar Compra</Button>
        </div>
    )
}

export default Total;