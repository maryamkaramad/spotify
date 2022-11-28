import React from 'react'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

const TowCart = ({ img, title1, title2 }) => {
    return (
        <Grid item xs={1.5} boxShadow={1} sx={{ background: "linear-gradient(180deg, #3C3F41 0%, #000000 100%)" }} borderRadius={"4px"} >
            <Grid xs={12} item container display={"flex"} flexDirection={"column"} alignItems={"center"} p={1} justifyContent={"center"} alignContent={"center"} gap={4}>
                <Grid xs={12} item display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Image src={img} alt={title1} />
                </Grid>
                <Grid xs={12} item display={"flex"} justifyContent={"flex-start"} flexDirection={"column"}>
                    <Typography variant={'subtitle3'}>
                        {title1}
                    </Typography>
                    <Typography variant="subtitle4" sx={{ fontSize: 12 }}>
                        {title2}
                    </Typography>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default TowCart