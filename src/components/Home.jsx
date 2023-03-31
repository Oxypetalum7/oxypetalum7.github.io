import { Paper, Stack, Typography, Button } from "@mui/material"
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
                                <Typography variant="h2" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Biography
                                </Typography>
                            </Link>
                            <Link to="/activity">
                                <Typography variant="h2" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Activity
                                </Typography>
                            </Link>
                            <Link to="/works">
                                <Typography variant="h2" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Works
                                </Typography>
                            </Link>
                            <Link to="/link">
                                <Typography variant="h2" sx={{my:4, color:"#FFFFFF", fontWeight:"bold"}}>
                                    Link
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{display:{xs:"inline", md:"none"}}}>
                <Paper height="100%">
                    <Grid item xs={12} height="100vh">
                        <Grid container height="100%" direction="column" justifyContent="center">
                            <Grid item xs={3}> 
                                <Box sx={{ textAlign:"center"}}>
                                    <Typography className="title" noWrap variant="h4" sx={{color:"#FFFFFF", fontWeight:"bold"}}>
                                        Oxypetalum7
                                    </Typography>
                                    <Typography className="title" noWrap variant="h2" sx={{color:"#FFFFFF", fontWeight:"bold"}}>
                                        Portfolio
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Stack direction='column' spacing={4} justifyContent='center' textAlign='center' >
                                    <Link to="/biography">
                                        <Button>
                                            <Typography variant="h3" sx={{ color:"#FFFFFF", fontWeight:"bold"}}>
                                                Biography
                                            </Typography>
                                        </Button>
                                    </Link>
                                    <Link to="/activity">
                                        <Button>
                                            <Typography variant="h3" sx={{ color:"#FFFFFF", fontWeight:"bold"}}>
                                                Activity
                                            </Typography>
                                        </Button>
                                    </Link>
                                    <Link to="/works">
                                        <Button>
                                        <Typography variant="h3" sx={{ color:"#FFFFFF", fontWeight:"bold"}}>
                                            Works
                                        </Typography>
                                        </Button>
                                    </Link>
                                    <Link to="/link">
                                        <Button>
                                        <Typography variant="h3" sx={{ color:"#FFFFFF", fontWeight:"bold"}}>
                                            Link
                                        </Typography>
                                        </Button>
                                    </Link>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            
        </div>
    )
}

export default Home;