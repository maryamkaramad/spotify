import React from 'react'
import { Grid, Typography } from '@mui/material';


const CartListmiddle = ({ title }) => {
    return (
        <Grid item container sx={{ color: "white" }} flexDirection={"column"}>
            <Grid item sx={{ color: "white" }}><Typography variant='h6'>{title}</Typography></Grid>
            <Grid item container>
                <Grid item xs={1.5} >1</Grid>
                <Grid item xs={1.5} >1</Grid>
                <Grid item xs={1.5} >1</Grid>
                <Grid item xs={1.5} >1</Grid>
                <Grid item xs={1.5} >1</Grid>
                <Grid item xs={1.5} >1</Grid>
                <Grid item xs={1.5} >1</Grid>
            </Grid>
        </Grid>
    )
}

export default CartListmiddle