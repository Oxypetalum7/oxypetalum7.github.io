import { Paper, Stack, Typography } from "@mui/material"
import { Box , Grid} from "@mui/material"
import { useEffect} from "react"
import { Link } from "react-router-dom"

const Home = (props) => {

    useEffect(() => {
        document.title = "Portfolio | Home"
        console.log();
      })
    return (
        <div>
            <Grid container sx={{display:{xs:"none", md:"flex"}, height:"100vh", overflow:"hidden"}}>
                <Grid item xs={12} md={6} sx={{display:'inline', mt:{xs:10,md:"70vh"}, ml:{xs:0,md:"8vw"}, textAlign:{xs:"center", md:"inherit"}}}>
                    <Typography className="title" noWrap variant="h4" sx={{color:"#FFFFFF", fontWeight:"bold"}}>
                        Oxypetalum7
                    </Typography>
                    <Typography className="title" noWrap variant="h1" sx={{color:"#FFFFFF", fontWeight:"bold"}}>
                        Portfolio
                    </Typography>
                </Grid>
                <Grid item md={12} className="Wrapper" sx={{ position:"absolute", width:"100%", height:"100vh", pl:"40vw", overflow:"hidden"}}>
                    <Grid item className="skewed-background" >
                        <Box item xs={12} sx={{position:"relative", mt:"20vh", ml:"25vw"}}>
                            <Link to="/biography">
                                <Typography componrnt="title-index" variant="h2" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Biography
                                </Typography>
                            </Link>
                            <Link to="/activity">
                                <Typography componrnt="title-index" variant="h2" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Activity
                                </Typography>
                            </Link>
                            <Link to="/works">
                                <Typography componrnt="title-index" variant="h2" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Works
                                </Typography>
                            </Link>
                            <Link to="/link">
                                <Typography componrnt="title-index" variant="h2" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Link
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Paper sx={{display:{xs:"block", md:"none"}}}>
                <Grid container  justifyContent="center">
                    <Grid item xs={12} sx={{display:'inline', mt:10, textAlign:"center"}}>
                        <Typography className="title" noWrap variant="h4" sx={{color:"#FFFFFF", fontWeight:"bold"}}>
                            Oxypetalum7
                        </Typography>
                        <Typography className="title" noWrap variant="h2" sx={{color:"#FFFFFF", fontWeight:"bold"}}>
                            Portfolio
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt:10 }}>
                        <Stack direction='column' justifyContent='center' textAlign='center'>
                            <Link to="/biography">
                                <Typography variant="h3" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Biography
                                </Typography>
                            </Link>
                            <Link to="/activity">
                                <Typography variant="h3" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Activity
                                </Typography>
                            </Link>
                            <Link to="/works">
                                <Typography variant="h3" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Works
                                </Typography>
                            </Link>
                            <Link to="/link">
                                <Typography variant="h3" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Link
                                </Typography>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Home;