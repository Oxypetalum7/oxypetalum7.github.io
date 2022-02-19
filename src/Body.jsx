import { Grid, Typography, Paper, Box} from "@mui/material"
import icon from "./assets/icon.png"
import {useStyle} from './Styles'

export const Body = () => {
    const classes = useStyle()
    return (
        <Grid container justifyContent="center">
            <Box className={classes.Paper_body}>
                <Paper>
                    <Typography className={classes.Title} variant="h4">
                        Profile
                    </Typography>
                    <Box className={classes.paper_body_section}>
                        <Box className={classes.Profile_content}>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item xs={12}>
                                    <Typography>
                                        HandleName : きーちゃん / Oxypetalum7
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        所属 : 公立はこだて未来大学  情報システムコース 3年
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        趣味 : DTM, 写真撮影
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                        キーワード: Webフロントエンド, アジャイル開発, スクラム
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>
                                            小学5年生頃からDTMに興味を持った事をきっかけに、PCや情報への関心が芽生えたことから公立はこだて未来大学へ進学しました。
                                            大学に進学してからは、ハッカソンや勉強会など「面白そう！」だと思った事には進んで参加し、様々な事にチャレンジしています。
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.Profile_Media}>
                            <img className={classes.Icon} boxShadow={1} src={icon} alt="" />
                        </Box>
                    </Box>
                </Paper>
             </Box>
        </Grid>
    )
}