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
import { datOnePage } from "../../data/onePage/data"
import TableOnePage from '../../componens/onepage/TableOnePage';
export default function item() {
  const router = useRouter()
  const id = router.query?.["item"]?.[0]
  const data = datamaintop.filter(item => item.id == id)
  const mystlye = { color: "white" }
  return (
    <Grid container xs={12} md={10} sx={{ background: "linear-gradient(180deg, #90AEA7 0%, #000000 89.7%)", color: "white" }} p={1} gap={2} >
      <Grid item container xs={12} px={"2px"} my={6}>
        {data.map(item => (
          <Header item={item} />
        ))}
      </Grid>
      <Grid item xs={12} container alignItems={"center"} gap={3}>
        <Grid item width={"45px"} height={"45px"} sx={{ cursor: "pointer" }}>
          <Image src={IMG1} style={{ width: "100%", height: "100%" }} />
        </Grid>
        <Grid item width={"33px"} height={"33px"} sx={{ cursor: "pointer" }}>
          <Image src={IMG2} style={{ width: "100%", height: "100%" }} />
        </Grid>
        <Grid item width={"25px"} height={"25px"} sx={{ cursor: "pointer" }}>
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
              {datOnePage.map(item => (
                <TableOnePage item={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>


  )
}