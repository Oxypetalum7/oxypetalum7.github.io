import {AppBar, Box, Toolbar, Typography} from "@mui/material"
/*
const useStyle = makeStyles (
    {
        toolbar: {
            padding:"1rem 0"
        }
    }
)
*/
export const Header = () => {
//    const classes = useStyle()
    return  (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" noWrap component="div" sx={{ display: { xs: 'none', md: 'flex' } }}>
                    Kikawa Yutaro
                </Typography>
                <Box sx={{ flexGrow: 1 }}/>
                <Box sx={{ mr: 5}}>
                    <Typography variant="h6" noWrap component="div" sx={{ mx: 2, display: 'inline'}}>
                        Biography
                    </Typography>
                    <Typography variant="h6" noWrap component="div" sx={{ mx: 2, display: 'inline'}}> 
                        Works
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ mx: 2, display: 'inline'}}>
                        Links
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}