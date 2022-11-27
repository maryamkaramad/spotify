import React from 'react'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

const OneCart = ({ img, title }) => {
    return (
        <Grid item xs={2.5} borderRadius={"4px"} boxShadow={1} p={2} display={"flex"} alignItems={"center"} gap={2}>
            <Grid item>
                <Image src={img} width={84} height={84} />
            </Grid>
            <Grid item>
                <Typography variant='subtitle'>{title}</Typography>
            </Grid>
        </Grid>
    )
}

export default OneCart