import React from 'react'
import { Grid, TableCell, TableRow, Typography } from '@mui/material';
import Image from 'next/image';
import IMG2 from "../../public/assets/image/onepage/2.png"
import IMG3 from "../../public/assets/image/onepage/3.png"
const TableOnePage = ({ item }) => {
    return (
        <TableRow key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom: 0 }} style={{ cursor: "pointer" }} >
            <TableCell component="th" scope="row" sx={{ borderBottom: 0 }} >
                <Grid xs={12} display={"flex"} alignItems={"center"} color={"white"} justifyContent={"flex-start"} gap={2}>
                    <Grid  >
                        {item.id}
                    </Grid>
                    <Grid >
                        <Image src={item.img} style={{ width: "60px", height: "60px" }} />
                    </Grid>
                    <Grid display={"flex"} flexDirection={"column"}>
                        <Typography>{item.title1}</Typography>
                        <Typography>{item.title2}</Typography>
                    </Grid>
                </Grid>
            </TableCell>
            <TableCell sx={{ borderBottom: 0 }} align="center"><Typography color={"white"}>{item.title3}</Typography></TableCell>
            <TableCell sx={{ borderBottom: 0 }} align="center"><Typography color={"white"}>4일 전</Typography></TableCell>
            <TableCell sx={{ borderBottom: 0 }} align="center">  <Grid xs={12} display={"flex"} alignItems={"center"} color={"white"} justifyContent={"center"} gap={2}>
                <Grid  >
                    <Image src={IMG2} style={{ width: "25px", height: "25px" }} />
                </Grid>
                <Grid >
                    2:45
                </Grid>
                <Grid >
                    <Image src={IMG3} />
                </Grid>
            </Grid>
            </TableCell>
        </TableRow>
    )
}

export default TableOnePage