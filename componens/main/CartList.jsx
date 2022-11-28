import React from 'react'
import { Grid, Typography } from '@mui/material';
import OneCart from '../common/OneCart';
import { datamaintop } from '../../data/datamaintop';


const CartList = ({ title }) => {
    return (
        <Grid item container sx={{ color: "white" }} flexDirection={"column"} gap={2}>
            <Grid item sx={{ color: "white" }}>
                <Typography variant='h6'>{title}</Typography>
            </Grid>
            <Grid item display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={2}>
                {datamaintop.map(item => (
                    <Grid item container xs={2.5}>
                        <OneCart id={item.id} img={item.img} title={item.title} />
                    </Grid>



                ))}
            </Grid>



        </Grid>
    )
}

export default CartList