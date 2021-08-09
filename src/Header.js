import {AppBar, Box, makeStyles, Typography} from "@material-ui/core"
const useStyle = makeStyles (
    {
        toolbar: {
            padding:"1rem 0"
        }
    }
)

export const Header = () => {
    const classes = useStyle()
    return  (
        <AppBar position="static">
            <toolbar className={classes.toolbar}>
                <Box display="flex" justifyContent="center" alignItems="center">
                        <Typography variant="h5">
                            Oxypetalum7's Portfolio
                        </Typography>
                </Box>
            </toolbar>
        </AppBar>
    )
}