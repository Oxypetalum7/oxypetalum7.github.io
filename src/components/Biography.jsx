import { useEffect } from "react"
import { Avatar, Grid, Paper, Typography, Container, Stack } from "@mui/material";
import Header from "./Header"
import Icon from "../assets/icon.png"


const Biography = () => {
    const birthday = {
        year: 2000,
        month: 7,
        date: 25
    }
    
    const today = new Date();

    var thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.date);

    var age = today.getFullYear() - birthday.year;

    if(today < thisYearsBirthday){
        //今年まだ誕生日が来ていない
        age--;
    }

    useEffect(() => {
        document.title = "Portfolio | Biography"
      })
    
    return (
        <div>
            <Header />
            <Container maxWidth="xl">
                <Paper sx={{mt:16}}>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item sx={{my:4}}>
                            <Grid item xs={12}>
                                <Typography variant="h3" sx={{ fontWeight:'Bold', textAlign:'center'}}>
                                    Biography
                                </Typography>
                            </Grid>
                            <Grid container direction={{xs:"column", md:"row"}} justifyContent="center">
                                <Grid item xs={12} md={4}>
                                    <Grid container direction={{xs:"column", md:"row"}} justifyContent="center" alignItems="center" height="100%">
                                        <Grid item md={12}>
                                            <Avatar src={Icon} sx={{width:{xs:"25%", md:"50%"}, height:"auto", mx:'auto', my:{xs:4}}}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Grid container justifyContent="center">
                                        <Stack sx={{py:6}} spacing={1} textAlign={{xs:"center", md:"justify"}}>
                                            <Stack>
                                                <Typography variant="h6">Handle</Typography>
                                                <Typography variant="h5" sx={{ fontWeight:'Bold'}}>
                                                    Ki-chan / Oxypetalum7
                                                </Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography variant="h6">Age</Typography>
                                                <Typography variant="h5" sx={{ fontWeight:'Bold'}}>
                                                    {age}
                                                </Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography variant="h6">Job</Typography>
                                                    <Typography variant="h5" sx={{ fontWeight:'Bold'}}>
                                                        スマートフォンアプリエンジニア
                                                    </Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Grid item xs={8} sx={{py:2}}>
                                    <Typography sx={{ lineHeight:'200%'}}>
                                        　公立はこだて未来大学 システム情報科学部 情報アーキテクチャ学科 情報システムコース 卒業。大学卒業後はIT企業にスマートフォンアプリエンジニアとして入社。
                                        小学生の時にDTM(Desk Top Music)に興味を持ち、独学でMIDIやDTMに関するソフトウェア等への知識をつけていく中で、ソフトウェアやデータの仕組みについて興味を持ち情報系への進学を決めました。
                                        大学入学後には個人やチームでのアプリケーション開発に取り組む他、DTM等のクリエイティブな活動も継続しており、「面白い」と思った事にはなんでも挑戦しています。
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Biography;