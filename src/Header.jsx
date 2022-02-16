import {AppBar, Box, Toolbar, Typography} from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
//    const classes = useStyle()
    return  (
            <AppBar position="static">
                <Toolbar>
                    <Link to="/">
                        <Typography variant="h5" noWrap component="div" sx={{ display: 'flex' }}>
                            Kikawa Yutaro
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1 }}/>
                    <Box sx={{ mr: 5}}>
                        <Link to="/biography">
                            <Typography variant="h6" noWrap component="div" sx={{ mx: 2, display: 'inline'}}>
                                Biography
                            </Typography>
                        </Link>
                        <Link to="/activity">
                            <Typography variant="h6" noWrap component="div" sx={{ mx: 2, display: 'inline'}}> 
                                Activity
                            </Typography>
                        </Link>
                        <Link to="/works">
                            <Typography variant="h6" noWrap component="div" sx={{ mx: 2, display: 'inline'}}> 
                                Works
                            </Typography>
                        </Link>
                        <Link to="/link">
                            <Typography variant="h6" component="div" sx={{ mx: 2, display: 'inline'}}>
                                Links
                            </Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>

    )
}

export default Header;