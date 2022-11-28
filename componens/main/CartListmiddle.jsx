import React from 'react'
import { Grid, Typography } from '@mui/material';
import TowCart from '../common/TowCart';
import { datamainmiddle } from '../../data/datamainmiddle';

const CartListmiddle = ({ title }) => {
    return (
        <Grid item container sx={{ color: "white" }} flexDirection={"column"} gap={2} >
            <Grid item sx={{ color: "white" }}><Typography variant='h6'>{title}</Typography></Grid>
            <Grid item container gap={1}>
                {datamainmiddle.map(item =>
                    <TowCart img={item.img} title1={item.title1} title2={item.title2} />
                )}
            </Grid>
        </Grid>
    )
}

export default CartListmiddle