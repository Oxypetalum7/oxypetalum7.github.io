import Header from "./Header"
import { useEffect } from "react"
import { Box, Paper, Typography } from "@mui/material";


const Activity = () => {
    useEffect(() => {
        document.title = "Portfolio | Activity"
      })
    return(
        <div>
            <Header />
            <Box sx={{ display:"flex", alignItems: 'center', my:8}}>
                <Paper sx={{width:"60vw", m:'auto'}}>
                    <Box sx={{py:2}}>
                        <Typography variant="h3" sx={{ fontWeight:'Bold', textAlign:'center', my:2}}>
                            Activity
                        </Typography>
                        <Box sx={{px:18}}>
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
                            <Box sx={{ my:1.6 }}>
                                <Typography sx={{ display:'inline' }}>
                                    PRODUCT &gt;&gt;&gt;&nbsp;
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                    Repair It!
                                </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                Nov.
                            </Typography>
                            <Typography variant="h5" sx={{ my:1.6 }}>
                                <li>学内ハッカソン「FunLocks」 参加</li>
                            </Typography>
                            <Box sx={{ my:1.6 }}>
                                <Typography sx={{ display:'inline' }}>
                                    PRODUCT &gt;&gt;&gt;&nbsp;
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                    Amabie Project
                                </Typography>
                            </Box>
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
                            <Box sx={{ my:1.6 }}>
                                <Typography sx={{ display:'inline' }}>
                                    PRODUCT &gt;&gt;&gt;&nbsp;
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                    防災学習レクリエーションゲーム DID IT
                                </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                Sep.
                            </Typography>
                            <Typography variant="h5" sx={{ my:1.6 }}>
                                <li>第21回 未来祭 ハッカソン 参加</li>
                            </Typography>
                            <Box sx={{ my:1.6 }}>
                                <Typography sx={{ display:'inline' }}>
                                    PRODUCT &gt;&gt;&gt;&nbsp;
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                    KOKURIBI
                                </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                Oct.
                            </Typography>
                            <Typography variant="h5" sx={{ my:1.6 }}>
                                <li>技育展 2021 出展</li>
                            </Typography>
                            <Box sx={{ my:1.6 , pb:8}}>
                                <Typography sx={{ display:'inline' }}>
                                    PRODUCT &gt;&gt;&gt;&nbsp;
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight:'Bold', display:'inline' }}>
                                    未来大着席管理QRコード読み取り支援アプリ RALAF
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </div>

    )
}

export default Activity;