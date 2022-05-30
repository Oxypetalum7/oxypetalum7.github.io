import Header from "./Header"
import { useEffect } from "react"
import { Container, Grid, Paper, Typography } from "@mui/material";


const Activity = () => {
    useEffect(() => {
        document.title = "Portfolio | Activity"
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
                                    <Typography variant="h3" sx={{ fontWeight:'Bold', my:2}}>
                                        2019
                                    </Typography>
                                    <Typography variant="h5" sx={{ my:1.6 }}>
                                        <li>公立はこだて未来大学　入学</li>
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontWeight:'Bold', my:2}}>
                                        2020
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                        Feb.
                                    </Typography>
                                    <Typography variant="h5" sx={{ my:1.6 }}>
                                        <li>GlobalGameJam 2020 Hakodate 参加</li>
                                    </Typography>
                                    <Grid item sx={{ my:1.6 }}>
                                        <Typography sx={{ display:'inline' }}>
                                            PRODUCT &gt;&gt;&gt;&nbsp;
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                            Repair It!
                                        </Typography>
                                    </Grid>
                                    <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                        Nov.
                                    </Typography>
                                    <Typography variant="h5" sx={{ my:1.6 }}>
                                        <li>学内ハッカソン「FunLocks」 参加</li>
                                    </Typography>
                                    <Grid item sx={{ my:1.6 }}>
                                        <Typography sx={{ display:'inline' }}>
                                            PRODUCT &gt;&gt;&gt;&nbsp;
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                            Amabie Project
                                        </Typography>
                                    </Grid>
                                    <Typography variant="h3" sx={{ fontWeight:'Bold', my:2}}>
                                        2021
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                        Apr.~
                                    </Typography>
                                    <Typography variant="h5" sx={{ my:1.6 }}>
                                        <li>高度ICT演習「FUN Online Interactive Platform」参加</li>
                                    </Typography>
                                    <Typography variant="h5" sx={{ my:1.6 }}>
                                        <li>プロジェクト学習<br/>「使ってもらって学ぶフィールド指向システムデザイン2021」参加</li>
                                    </Typography>
                                    <Grid item sx={{ my:1.6 }}>
                                        <Typography sx={{ display:'inline' }}>
                                            PRODUCT &gt;&gt;&gt;&nbsp;
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                            防災学習レクリエーションゲーム DID IT
                                        </Typography>
                                    </Grid>
                                    <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                        Sep.
                                    </Typography>
                                    <Typography variant="h5" sx={{ my:1.6 }}>
                                        <li>第21回 未来祭 ハッカソン 参加</li>
                                    </Typography>
                                    <Grid item sx={{ my:1.6 }}>
                                        <Typography sx={{ display:'inline' }}>
                                            PRODUCT &gt;&gt;&gt;&nbsp;
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                            KOKURIBI
                                        </Typography>
                                    </Grid>
                                    <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                        Oct.
                                    </Typography>
                                    <Typography variant="h5" sx={{ my:1.6 }}>
                                        <li>技育展 2021 出展</li>
                                    </Typography>
                                    <Grid  sx={{ my:1.6 , pb:8}}>
                                        <Typography sx={{ display:'inline' }}>
                                            PRODUCT &gt;&gt;&gt;&nbsp;
                                        </Typography>
                                        <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                            未来大着席管理QRコード読み取り支援アプリ RALAF
                                        </Typography>
                                    </Grid>
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