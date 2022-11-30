import { Grid, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../../componens/onepage/Header';
import { datamaintop } from '../../data/datamaintop';
import IMG1 from "../../public/assets/image/onepage/1.png"
import IMG2 from "../../public/assets/image/onepage/2.png"
import IMG3 from "../../public/assets/image/onepage/3.png"
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import Clock from "../../public/assets/image/onepage/clock.png"
import image1 from "../../public/assets/image/main/middle/1.png"
export default function item() {
  const router = useRouter()
  const id = router.query?.["item"]?.[0]
  const data = datamaintop.filter(item => item.id == id)
  const mystlye = { color: "white" }
  return (
    <Grid container xs={10} sx={{ background: "linear-gradient(180deg, #90AEA7 0%, #000000 89.7%)", color: "white" }} p={1} >
      <Grid item container xs={12} px={"2px"} >
        {data.map(item => (
          <Header item={item} />
        ))}
      </Grid>
      <Grid item xs={12} container alignItems={"center"} gap={3}>
        <Grid item width={"45px"} height={"45px"}>
          <Image src={IMG1} style={{ width: "100%", height: "100%" }} />
        </Grid>
        <Grid item width={"33px"} height={"33px"}>
          <Image src={IMG2} style={{ width: "100%", height: "100%" }} />
        </Grid>
        <Grid item width={"25px"} height={"25px"}>
          <Image src={IMG3} style={{ width: "100%", height: "100%" }} />
        </Grid>
      </Grid>
      <Grid item xs={12}  >
        <TableContainer >
          <Table >
            <TableHead >
              <TableRow >
                <TableCell style={mystlye} align="center"><Typography># TITLE</Typography></TableCell>
                <TableCell style={mystlye} align="center"><Typography>ALBUM</Typography></TableCell>
                <TableCell style={mystlye} align="center"><Typography>DATE ADDED</Typography></TableCell>
                <TableCell style={mystlye} align="center"><Image src={Clock} alt="clock" /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>


              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom: 0 }} >
                <TableCell component="th" scope="row" sx={{ borderBottom: 0 }} >
                  <Grid xs={12} display={"flex"} alignItems={"center"} color={"white"} justifyContent={"flex-start"} gap={2}>
                    <Grid  >
                      1
                    </Grid>
                    <Grid >
                      <Image src={image1} style={{ width: "60px", height: "60px" }} />
                    </Grid>
                    <Grid display={"flex"} flexDirection={"column"}>
                      <Typography>We’re Good</Typography>
                      <Typography>Dua Lipa</Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell sx={{ borderBottom: 0 }} align="center"><Typography color={"white"}>Future Nostalgia (The Moonlight Edition)</Typography></TableCell>
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



            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>


  )
}