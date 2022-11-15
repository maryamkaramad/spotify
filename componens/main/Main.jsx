import React from 'react'
import { Grid, Typography } from '@mui/material';

const Main = () => {
    return (
        <Grid item container lg={10} p={2} sx={{ backgroundColor: "#3C3F41", color: "white" }}  >
            <Grid my={7}>
                <Typography variant='h3'>Good afternoon</Typography>
            </Grid>
        </Grid>
    )
}

export default Main