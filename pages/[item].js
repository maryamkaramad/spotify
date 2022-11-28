import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { datamaintop } from '../data/datamaintop';
export default function item() {
  const router = useRouter()
  const id = router.query?.["item"]?.[0]
  const data = datamaintop.filter(item => item.id == id)
  console.log(data)
  return (
    <Grid container xs={10} sx={{ background: "linear-gradient(180deg, #90AEA7 0%, #000000 89.7%)", color: "white" }} p={2}>
      <Grid item container xs={12} height={350} justifyContent={"flex-start"} alignItems={"flex-end"}>
        {data.map(item => (
          <Grid item xs={12} display={"flex"} gap={2}>
            <Grid item xs={3} width={240} height={240}>
              <Image src={item.img} width={240} height={240} sx={{ boxShadow: "2", borderRadius: 4 }} />
            </Grid>
            <Grid item xs={8} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={"flex-end"} >
              <Grid item >
                <Typography>PLAYLIST</Typography>
              </Grid>
              <Grid item >
                <Typography>{item.title}</Typography>
              </Grid>
              <Grid item >
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus</Typography>
              </Grid>
              <Grid item >
                <Typography>Spotify. 860,306. 100 song, 4hr 5min</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}

      </Grid>
      <Grid item xs={12}>
        4
      </Grid>
      <Grid item xs={12}>
        5
      </Grid>
    </Grid>
  )
}