import { useEffect } from "react"
import { Avatar, Box, Paper, Typography } from "@mui/material";
import Header from "./Header"
import Icon from "./assets/icon.png"

const Biography = () => {
    useEffect(() => {
        document.title = "Portfolio | Biography"
      })
    return (
        <div>
            <Header />
                <Box sx={{ display:"flex", alignItems: 'center', pt:8}}>
                    <Paper sx={{width:"60vw", height:"80vh", m:'auto'}}>
                        <Box sx={{py:1.6}}>
                            <Typography variant="h3" sx={{ fontWeight:'Bold', textAlign:'center', my:2}}>
                                Biography
                            </Typography>
                            <Box sx={{display:'flex', px:18}}>
                                <Box sx={{width:'30vw', m:'auto', justifyContent:'center'}}>
                                    <Avatar src={Icon} sx={{m:'auto', minWidth:'10rem', minHeight:'10rem',width:'75%',height:'75%'}}/>
                                </Box>
                                <Box sx={{width:'30vw', ml:10}}>
                                    <Box sx={{my:1.6}}>
                                        <Typography variant="h6">Name</Typography>
                                        <Typography variant="h5" sx={{ fontWeight:'Bold'}}>
                                            木川裕太郎
                                        </Typography>
                                    </Box>
                                    <Box sx={{my:1.6}}>
                                        <Typography variant="h6">Institution</Typography>
                                        <Typography variant="h5" sx={{ fontWeight:'Bold', lineHeight:'160%'}}>    
                                            公立はこだて未来大学<br/>システム情報科学部<br/>情報アーキテクチャ学科<br/>情報システムコース
                                        </Typography>
                                    </Box>
                                    <Box sx={{my:1.6}}>
                                        <Typography  variant="h6">Grade</Typography>
                                        <Typography variant="h5" sx={{ fontWeight:'Bold'}}>
                                            B3 <Box sx={{fontSize:'',fontWeight:'Bold', display:'inline'}}>(23卒予定)</Box>
                                        </Typography>
                                    </Box>
                                    <Box sx={{my:1.6}}>
                                        <Typography variant="h6">Age</Typography>
                                        <Typography variant="h5" sx={{ fontWeight:'Bold'}}>
                                            21
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography sx={{px:18, py:4, lineHeight:'160%'}}>
                                　公立はこだて未来大学に通う情報系学生。
                                小学生の時にDTM(Desk Top Music)に興味を持ち、独学でMIDIやDTMに関するソフトウェア等への知識をつけていく中で、ソフトウェアやデータの仕組みについて興味を持ち情報系への進学を決めました。
                                大学入学後には個人やチームでのアプリケーション開発に取り組む他、DTM等のクリエイティブな活動も継続しており、「これは面白い」と思った事にはなんでも挑戦しています。
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
        </div>
    )
}

export default Biography;