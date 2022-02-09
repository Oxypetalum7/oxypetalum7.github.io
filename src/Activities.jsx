import { Grid, Paper, Box, Typography} from "@mui/material"
import { useStyle } from "./Styles"

export const Activities = () => {
    const classes = useStyle()
    return(
        <Grid container justifyContent='center'>
            <Box className={classes.Paper_body}>
                <Paper>
                    <Typography className={classes.Title} variant="h4">
                        Activities
                    </Typography>
                <Grid container justifyContent='center'>
                    <Grid item>
                        aaa
                    </Grid>
                </Grid>
                </Paper>
            </Box>
        </Grid>
    )
}