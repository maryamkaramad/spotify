import React from 'react'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
const Header = ({ item }) => {
    return (
        <Grid item xs={12} display={"flex"} gap={1} alignItems={"center"} >
            <Grid item width={"230px"} height={"230px"} >
                <Image src={item.img} sx={{ boxShadow: "2", borderRadius: 4 }} style={{ opacity: 0.7, width: "100%", height: "100%" }} />
            </Grid>
            <Grid item display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={"flex-end"} >
                <Grid item >
                    <Typography sx={{ fontSize: "11px" }}>PLAYLIST</Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{ fontSize: "80px", }}>{item.title}</Typography>
                </Grid>
                <Grid item sx={{ fontSize: "14px" }} >
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus</Typography>
                </Grid>
                <Grid item >
                    <Typography>Spotify. 860,306. 100 song, 4hr 5min</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header