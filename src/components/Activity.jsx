import Header from "./Header"
import { useEffect } from "react"
import { Container, Grid, Paper, Typography } from "@mui/material";
import activities from "./ActivityData";



const Activity = () => {



    useEffect(() => {
        document.title = "Portfolio | Activity"
      })

    const content = []

    Object.keys(activities).map(
        year => {
            content.push(
                <Typography variant="h3" sx={{ fontWeight:'Bold', my:2}}>
                    { year }
                </Typography>
            )
            activities[year].forEach(element => {
                Object.keys(element).map(key => {
                    if (key === 'month') {
                        content.push(
                            <Typography variant="h6" sx={{ fontWeight:'Bold', my:2}}>
                                {element[key]}
                            </Typography>
                        )
                    } else if (key === 'title') {
                        content.push(
                            <Typography variant="h5" sx={{ my:1.6 }}>
                                <li>{ element[key] }</li>
                            </Typography>
                        )
                    } else if (key === 'product') {
                        if (Array.isArray(element[key])) {
                            element[key].forEach( child => (
                                content.push(
                                    <div>
                                        <Typography sx={{ display:'inline' }}>
                                            PRODUCT &gt;&gt;&gt;&nbsp;
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                            {child}
                                        </Typography>
                                    </div>
                                )
                            ))
                        }
                        else {
                            content.push(
                                <div>
                                    <Typography sx={{ display:'inline' }}>
                                        PRODUCT &gt;&gt;&gt;&nbsp;
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                    {element[key]}
                                    </Typography>
                                </div>
                            )
                        }
                    }
                    return null
                })
            });
            return null
        })


    return(
        <div>
            <Header />
            <Container maxWidth="xl">
                <Paper sx={{my:16}}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item sx={{py:2}}>
                            <Grid item xs={12}>
                                <Typography variant="h3" sx={{ fontWeight:'Bold', textAlign:'center'}}>
                                    Activity
                                </Typography>
                            </Grid>
                            <Grid container direction="row" justifyContent="center">
                                <Grid item xs={10} md={12} sx={{textAlign:{xs:'center', md:'justify'},  listStyle:{xs:'none', md:'disc'}}}>
                                    {content.map((item, index) => <div key={index}> {item} </div>)}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>

    )
}

export default Activity;