import { Grid } from "@mui/material"
import CartList from '../componens/main/CartList';
import CartListmiddle from './../componens/main/CartListmiddle';



export default function Home() {
  return (
    <Grid container xs={12} md={10} sx={{ background: "linear-gradient(180deg, #3C3F41 0%, #000000 100%)", color: "white" }} justifyContent={"flex-start"} flexDirection={"column"} gap={2} p={2} overflowY={"scroll"}>
      <Grid item sx={{ marginTop: 10 }}>
        <CartList title={"Good afternoon"} />
      </Grid>
      <Grid item>
        <CartListmiddle title={'Recently played'} />
      </Grid>
      <Grid item>
        <CartListmiddle title={'Just the Hits'} />
      </Grid>
    </Grid>
  )
}
