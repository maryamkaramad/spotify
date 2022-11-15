import React from 'react'
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import { Logo } from '../../assets/icon/Logo.png'
import { IconButton } from 'theme-ui';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Side = () => {
    return (
        <Grid item container lg={2} height={"100%"} flexDirection={"column"} alignItems={"center"} sx={{ backgroundColor: "black", color: "white" }} gap={37}>
            <Grid item container p={2} lg={12} justifyContent={"flex-start"} flexDirection={"column"} alignItems={"center"} gap={6}>
                <Grid item lg={12} justifyContent={"flex-start"} container sx={{ backgroundColor: "black", color: "white" }}>
                    <Image src={Logo}
                        alt=""
                        width={83}
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
                <Grid item lg={12}>
                    <Image src={Logo}
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