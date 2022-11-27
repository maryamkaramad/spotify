import React from 'react'
import { Grid, Typography } from '@mui/material';

const Main = () => {
    return (
        <Grid item container xs={12} p={2} sx={{ backgroundColor: "#3C3F41", color: "white" }} >
            <Grid my={7}>
                <Typography variant='h3'>Good afternoon</Typography>
            </Grid>
        </Grid>
    )
}

export default Main