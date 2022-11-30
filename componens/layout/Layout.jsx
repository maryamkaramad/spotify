import React from 'react'
import { Grid } from '@mui/material';
import Side from './Side';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Grid container xs={12} maxHeight={"1080px"}>
            <Side />
            {children}
            <Footer />
        </Grid>
    )
}

export default Layout