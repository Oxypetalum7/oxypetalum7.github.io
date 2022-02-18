import Header from "./Header"
import {Container, Paper, Grid, Typography, Stack, Icon} from "@mui/material";
import { GitHub, Twitter, Article} from '@mui/icons-material';
const Link = () => {
    return(
        <div>
            <Header />
            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="center" sx={{py:10}}>
                    <Paper sx={{my:10}}>
                        <Grid container justifyContent="center" sx={{py:10}}>
                            <Grid item xs={12}>
                                <Grid item xs={12}>
                                    <Typography variant="h2" sx={{ fontWeight:'Bold', textAlign:'center'}}>
                                        Links
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" spacing={10} justifyContent="center" sx={{py:4}}>
                                <a href="https://github.com/Oxypetalum7" title="GitHub" target="_blank" rel="noopener noreferrer" >
                                    <Icon component={GitHub} sx = {{width:'8rem', height:'8rem', background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                </a>
                                <a href="https://github.com/Oxypetalum7" title="GitHub" target="_blank" rel="noopener noreferrer" >
                                    <Icon component={Article} sx = {{width:'8rem', height:'8rem', background:'rgb(0, 0, 0)', borderRadius:'100%', p:0.8}} />
                                </a>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </div>
    )
}

export default Link;    