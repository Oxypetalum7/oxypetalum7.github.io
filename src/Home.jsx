import { Typography } from "@mui/material"
import { Box } from "@mui/material"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    useEffect(() => {
        document.title = "Portfolio | Home"
      })
    return (
        <div>
            <Box sx={{display:"flex", position:"absolute"}}>
                <Box sx={{display:'inline', mt:"70vh", ml:"8vw"}}>
                    <Typography className="title" noWrap variant="h4" sx={{color:"#FFFFFF", fontWeight:"bold"}}>
                        Yutaro Kikawa
                    </Typography>
                    <Typography className="title" noWrap variant="h1" sx={{color:"#FFFFFF", fontWeight:"bold"}}>
                        Portfolio
                    </Typography>
                </Box>
                <Box className="Wrapper" sx={{position:"absolute", width:"60vw", height:"100vh", ml:"40vw", overflow:"hidden"}}>
                    <Box className="skewed-background">
                        <Box sx={{mt:"20vh", ml:"25vw"}}>
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
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Home;