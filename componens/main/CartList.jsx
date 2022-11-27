import React from 'react'
import { Grid, Typography } from '@mui/material';
import OneCart from '../common/OneCart';
import { datamaintop } from '../common/data/datamaintop';
const CartList = ({ title }) => {
    return (
        <Grid item container sx={{ color: "white" }} flexDirection={"column"} >
            <Grid item sx={{ color: "white" }}>
                <Typography variant='h6'>{title}</Typography>
            </Grid>
            <Grid item display={"flex"} flexDirection={"row"} flexWrap={"wrap"} >
                {datamaintop.map(item => (
                    <OneCart img={item.img} title={item.title} />
                ))}
            </Grid>



        </Grid>
    )
}

export default CartList