import React from 'react'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Footerimg from "../../public/assets/image/footer/Rectangle 9.png";
import Heart from "../../public/assets/image/footer/Union.png";
import Footerleft from "../../public/assets/image/footer/Rectangle 10.png";
import Footercenter from "../../public/assets/image/footer/Group 11.png";
import Right1 from "../../public/assets/image/footer/Group 6.png";
import Right2 from "../../public/assets/image/footer/Group 7.png";
import Right3 from "../../public/assets/image/footer/Vector.png";
import Right4 from "../../public/assets/image/footer/Rectangle 14.png";

const Footer = () => {
    return (
        <Grid container xs={12} sx={{ backgroundColor: "#181818", color: " #FFFFFF" }} >
            <Grid item container xs={12} p={2} >
                <Grid item xs={3} container alignItems={"center"} justifyContent={"flex-start"}>
                    <Grid item xs={2} sx={{ cursor: "pointer" }} >
                        <Image src={Footerimg} width={59} height={60} />
                    </Grid>
                    <Grid item xs={4} textAlign={"center"} >
                        <Typography variant={'subtitle1'}>Hold On</Typography>
                        <Typography variant={'subtitle2'}>Justin Bieber</Typography>
                    </Grid>
                    <Grid item xs={4} display={"flex"} >
                        <Grid xs={2} sx={{ cursor: "pointer" }}><Image src={Heart} /></Grid>
                        <Grid xs={2} sx={{ cursor: "pointer" }}><Image src={Footerleft} /></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} justifyContent={"center"} alignItems={"center"} sx={{ cursor: "pointer" }}>
                    <Image src={Footercenter} />
                </Grid>
                <Grid item xs={3} display={"flex"} justifyContent={"flex-end"} alignItems={"center"} gap={2}>
                    <Grid item sx={{ cursor: "pointer" }}><Image src={Right1} /></Grid>
                    <Grid item sx={{ cursor: "pointer" }}><Image src={Right2} /></Grid>
                    <Grid item sx={{ cursor: "pointer" }} display={"flex"} alignItems={"center"} gap={1}><Image src={Right3} />
                        <Image src={Right4} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer