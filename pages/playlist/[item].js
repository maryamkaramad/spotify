import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { datamaintop } from '../../data/datamaintop';
import IMG1 from "../../public/assets/image/onepage/1.png"
import IMG2 from "../../public/assets/image/onepage/2.png"
import IMG3 from "../../public/assets/image/onepage/3.png"
export default function item() {
  const router = useRouter()
  const id = router.query?.["item"]?.[0]
  const data = datamaintop.filter(item => item.id == id)

  return (
    <Grid container xs={10} sx={{ background: "linear-gradient(180deg, #90AEA7 0%, #000000 89.7%)", color: "white" }} p={1} >
      <Grid item container xs={12} px={"2px"} >
        {data.map(item => (
          <Grid item xs={12} display={"flex"} gap={1} alignItems={"center"} >
            <Grid item width={"230px"} height={"230px"} >
              <Image src={item.img} sx={{ boxShadow: "2", borderRadius: 4 }} style={{ opacity: 0.7, width: "100%", height: "100%" }} />
            </Grid>
            <Grid item display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={"flex-end"} >
              <Grid item >
                <Typography sx={{ fontSize: "11px" }}>PLAYLIST</Typography>
              </Grid>
              <Grid item >
                <Typography sx={{ fontSize: "80px", }}>{item.title}</Typography>
              </Grid>
              <Grid item sx={{ fontSize: "14px" }} >
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus</Typography>
              </Grid>
              <Grid item >
                <Typography>Spotify. 860,306. 100 song, 4hr 5min</Typography>
              </Grid>
            </Grid>
          </Grid>
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

      </Grid>
    </Grid>


  )
}