import Header from "./Header"
import {Container, Paper, Grid, Typography, Stack, Icon} from "@mui/material";
import { GitHub, Article} from '@mui/icons-material';
const Link = () => {
    return(
        <div>
            <Header />
            <Container maxWidth="md" sx={{height:"100vh"}}>
                <Grid container direction="column" height="100%" justifyContent="center">
                    <Paper sx={{my:10}}>
                        <Grid container justifyContent="center" sx={{py:8}}>
                            <Grid item xs={12}>
                                <Typography variant="h2" sx={{ fontWeight:'Bold', textAlign:'center'}}>
                                    Links
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" spacing={10} justifyContent="center" sx={{py:4}}>
                                    <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                                        <a href="https://github.com/Oxypetalum7" title="GitHub" target="_blank" rel="noopener noreferrer" >
                                            <Icon component={GitHub} sx = {{width:'8rem', height:'8rem', background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                        </a>
                                        <Typography variant="h4" sx={{ fontWeight:'Bold', textAlign:'center'}}>
                                            Github
                                        </Typography>
                                    </Stack>
                                    <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                                        <a href="https://oxypetalum7.github.io/myblog" title="GitHub" target="_blank" rel="noopener noreferrer" >
                                        <Icon component={Article} sx = {{width:'8rem', height:'8rem', background:'rgb(0, 0, 0)', borderRadius:'100%', p:0.8}} />
                                        </a>
                                        <Typography variant="h4" sx={{ fontWeight:'Bold', textAlign:'center'}}>
                                            Blog
                                        </Typography>
                                    </Stack>
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