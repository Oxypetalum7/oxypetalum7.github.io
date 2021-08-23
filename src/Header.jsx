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
            <Box className={classes.toolbar} display="flex" justifyContent="center" alignItems="center" >
                    <Typography variant="h4">
                        Oxypetalum7's Portfolio
                    </Typography>
            </Box>
        </AppBar>
    )
}