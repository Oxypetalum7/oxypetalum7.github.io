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
            padding: "3rem 0",
            paddingLeft: "5vw",
            width: "30vw",
            verticalAlign: "middle"
        },
        Profile_Media: {
            textAlign: "center",
            margin: "auto auto",
            width: "25vw",
        },
        Icon: {
            width: "50%",
            height: "50%",
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