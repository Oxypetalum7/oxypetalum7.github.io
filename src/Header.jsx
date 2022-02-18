import React from "react";
import {AppBar, Box, Stack, Toolbar, Typography, IconButton, Menu, MenuItem} from "@mui/material"
import  MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };    

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };
    return  (
            <AppBar position="fixed">
                <Toolbar>
                    <Link to="/">
                        <Typography variant="h5" noWrap component="div" sx={{ display: 'flex' }}>
                            Kikawa Yutaro
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1 }}/>
            <Box sx={{ flexGrow: {xs:0, md:1}, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { md: 'none' },
                }}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Stack direction="column" spacing={1}>
                            <Link to="/biography">
                                <Typography variant="h6" noWrap component="div" sx={{ mx: 2, display: 'inline', textAlign:'center'}}>
                                    Biography
                                </Typography>
                            </Link>

                            <Link to="/activity">
                                <Typography variant="h6" noWrap component="div" sx={{ mx: 2, display: 'inline', textAlign:'center'}}> 
                                    Activity
                                </Typography>
                            </Link>

                            <Link to="/works">
                                <Typography variant="h6" noWrap component="div" sx={{ mx: 2, display: 'inline', textAlign:'center'}}> 
                                    Works
                                </Typography>
                            </Link>

                            <Link to="/link">
                                <Typography variant="h6" component="div" sx={{ mx: 2, display: 'inline', textAlign:'center'}}>
                                    Links
                                </Typography>
                            </Link>
                        </Stack>

                    </MenuItem>
                </Menu>
            </Box>
                    <Box sx={{ mr: 5, display: {xs:'none', md:'flex'}}}>
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
                    <Box sx={{ mr: 5, display: {xs:'none', md:'display'}}}>

                    </Box>
                </Toolbar>
            </AppBar>

    )
}

export default Header;