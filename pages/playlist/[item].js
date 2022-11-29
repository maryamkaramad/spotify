import { Grid, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../../componens/onepage/Header';
import { datamaintop } from '../../data/datamaintop';
import IMG1 from "../../public/assets/image/onepage/1.png"
import IMG2 from "../../public/assets/image/onepage/2.png"
import IMG3 from "../../public/assets/image/onepage/3.png"
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
export default function item() {
  const router = useRouter()
  const id = router.query?.["item"]?.[0]
  const data = datamaintop.filter(item => item.id == id)

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
      <Grid item xs={12}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              <TableRow

                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {1}
                </TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">3</TableCell>
                <TableCell align="right">4</TableCell>
                <TableCell align="right">5</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>


  )
}