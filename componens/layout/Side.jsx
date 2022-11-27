import React from 'react'
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Imglauot from '../../public/assets/image/Rectangle 16 (1).png'
import { IconButton } from 'theme-ui';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Logo from "../../public/assets/icon/Logo.png"
const Side = () => {
    return (
        <Grid item container xs={2} height={"75%"} flexDirection={"column"} alignItems={"center"} sx={{ backgroundColor: "black", color: "white" }} gap={30}>
            <Grid item container p={2} lg={12} justifyContent={"flex-start"} flexDirection={"column"} alignItems={"center"} gap={6}>
                <Grid item lg={12} justifyContent={"flex-start"} container sx={{ backgroundColor: "black", color: "white" }}>
                    <Image src={Logo}
                        alt=""
                        width={129}
                        height={34}
                    />
                </Grid>
                <Grid item lg={12} container >

                    <Grid item container lg={12} justifyContent={"flex-start"} alignItems={"center"}>
                        <Grid item ><IconButton><HomeIcon /></IconButton></Grid>
                        <Grid item  >  <Typography>Home</Typography></Grid>
                    </Grid>
                    <Grid item container lg={12} justifyContent={"flex-start"} alignItems={"center"}>
                        <Grid item ><IconButton><SearchIcon /></IconButton></Grid>
                        <Grid item >  <Typography>Search</Typography></Grid>
                    </Grid>
                    <Grid item container lg={12} justifyContent={"flex-start"} alignItems={"center"}>
                        <Grid item ><IconButton><LibraryMusicIcon /></IconButton></Grid>
                        <Grid item >  <Typography>YourLibrary</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid item container lg={12} justifyContent={"flex-start"}>
                    <Typography> PLAYLISTS</Typography>
                </Grid>
                <Grid item container lg={12} justifyContent={"flex-start"} alignItems={"center"}>
                    <Grid item container lg={12} justifyContent={"flex-start"} alignItems={"center"}>
                        <Grid item ><IconButton><AddBoxIcon /></IconButton></Grid>
                        <Grid item >  <Typography>Create Playlist</Typography></Grid>


                    </Grid>


                    <Grid item container lg={12} justifyContent={"flex-start"} alignItems={"center"}>
                        <Grid item ><IconButton><FavoriteIcon /></IconButton></Grid>
                        <Grid item >  <Typography>Liked Songs</Typography></Grid>


                    </Grid>
                </Grid></Grid>
            <Grid item container lg={12}>
                <Grid item lg={12} justifyContent={"flex-start"} alignItems={"center"} display={"flex"}>
                    <Image src={Imglauot}
                        alt=""
                        width={230}
                        height={230}
                    />
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Side