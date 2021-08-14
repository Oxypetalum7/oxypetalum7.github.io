import { Grid, makeStyles, Typography, Paper, Box} from "@material-ui/core"
import icon from "./assets/icon.png"
const useStyle = makeStyles (
    {
        Grid_container: {
            paddingTop: "2rem"
        },
        Title: {
            paddingTop: "1rem",
            textAlign: "center", 
            justifyContent: "center"
        },
        Paper_body: {
            paddingTop: "2rem",
            width: "60vw",
            justifyContent: "center",
        },
        paper_body_section: {
            display: "flex",
        },
        Profile_content: {
            padding: "2rem 0",
            paddingLeft: "5vw",
            width: "30vw",
            verticalAlign: "middle"
        },
        Profile_Media: {
            textAlign: "center",
            margin: "auto 0",
            width: "25vw",
        },
        Icon: {
            width: "12rem",
            height: "12rem",
            borderRadius: "50%",
            boxShadow: "1px 4px 4px 0 rgba(0, 0, 0, .2)"
        }
    }
)
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
                                    <Typography variant={Body}>
                                        HandleName : きーちゃん / Oxypetalum7
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={Body}>
                                        所属 : 公立はこだて未来大学  情報システムコース 3年
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} variant={Body}>
                                    <Typography>
                                        趣味 : DTM, 写真撮影
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} variant={Body}>
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