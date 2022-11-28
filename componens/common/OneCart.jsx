import React from 'react'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const OneCart = ({ id, img, title }) => {
    return (
        <Link href={`/${id}`}>
            <Grid item xs={12} width={"300px"} container borderRadius={"4px"} boxShadow={1} display={"flex"} alignItems={"center"} sx={{ background: "linear-gradient(180deg, #3C3F41 0%, #000000 100%)" }}>
                <Grid item width={84} height={84} xs={6}>
                    <Image src={img} width={"100%"} height={"100%"} alt={title} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='subtitle'>{title}</Typography>
                </Grid>
            </Grid>
        </Link>

    )
}

export default OneCart