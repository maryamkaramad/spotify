import { Grid } from "@mui/material"
import Main from "../componens/main/Main"
import Side from "../componens/main/Side"

export default function Home() {
  return (
    <Grid container width={"100%"} height={"100%"}>
      <Side />
      <Main />
    </Grid>

  )
}
