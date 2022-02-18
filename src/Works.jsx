import React from 'react';
import Header from "./Header"
import {  Container, Grid, Paper, Typography, Stack, Button, Chip, Icon, Dialog, DialogContent, IconButton} from "@mui/material";
import BROMIDI_IMG from "./assets/BROMIDI.png";
import DPBOT from "./assets/d-pBot.mp4"
import DPBOT_IMG from "./assets/d-pBot_img.jpg"
import REPAIR_IT_IMG from "./assets/Repair_it.png"
import AMABIE_IMG from "./assets/amabie_prj.png"
import AMABIE_GIF from "./assets/amabie_anm.gif"
import DIDIT_IMG from "./assets/DIDIT_IMG.png"
import RALAF_FLYER from "./assets/RALAF_Flyer.png"
import { GitHub, Link, Close, PlayCircleFilled } from '@mui/icons-material';
import { indigo, pink, green, lime, purple, cyan, yellow, blue, deepPurple, grey} from '@mui/material/colors';
import {Player, ControlBar} from 'video-react';
import 'video-react/dist/video-react.css'

const Works = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    const VideoModal = (props) => {
        const { children, onClose, ...other } = props;
        return (
            <Dialog className="Dialog"sx={{ m: 0, p: 0 }} {...other} fullWidth="lg" maxWidth="lg" onClose={handleClose}>
                <DialogContent>
                    {children}
                </DialogContent>
                {onClose ? (
                        <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: grey[500],
                        }}
                        >
                        <Close sx={{ height:'3rem', width:'3rem'}}/>
                        </IconButton>
                    ) : null}
            </Dialog>
        );
    };

    return(
        <div>
          <Header />
          <Container maxWidth="xl">
          <Grid contaier sx={{ display:"flex", justifyContent:'center', py:16}}>
                <Paper sx={{width:'100%', m:'auto'}}>
                    <Grid container justifyContent="center" sx={{py:4}}>
                        <Grid item xs={12}>
                            <Typography variant="h3" sx={{ fontWeight:'Bold', textAlign:'center', my:2}}>
                                Works
                            </Typography> 
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container justifyContent="space-around" alignItems="stretch" sx={{py:2}}>
                                <Grid item xs={10} md={5} >
                                    <Typography variant="h6" sx={{ fontWeight:'Bold'}}>
                                        未来大 学部1年 必修科目「情報表現入門」提出作品
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontWeight:'Bold'}}>
                                        BROMIDI
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={{ mt:1.6 }}>
                                        <Chip label="Java" sx={{ background:pink['A700'] }} />
                                        <Chip label="Processing" sx={{ background:indigo[600] }} />
                                    </Stack>
                                    <Grid item>
                                        <Grid item sx={{my:2, lineHeight:'160%'}}>
                                            <Grid item sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;公立はこだて未来大学には、入学してすぐにビジュアルプログラミングに特化した言語「Processing」を用いたプログラミング科目があります。この科目では最終課題として、自らの手で「ブロック崩しゲーム」を作成し提出することが求められます。
                                                </Typography>
                                            </Grid>
                                            <Grid item sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;この作品は、MIDIファイルを読み込むことより生成されたメロディデータのブロックを、ぴょんぴょんと跳ねるボールで跳ねていく事により演奏を完走させることを目的とした「オーディオビジュアライザ的ゲーム」です。
                                                </Typography>
                                            </Grid>
                                            <Grid item sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;MIDIの読み込み、解析、再生には、Processingのラッパー元言語であるJavaのサウンドAPIを用いています。
                                                </Typography>
                                            </Grid>
                                            <Grid item sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;当時は大学入学までプログラミング経験が無くProcessingが初めてのプログラミング体験でしたが、自分のアイデンティティであるDTMやMIDIの知識を活かしたいという動機の基に、MIDIを扱ったゲームを制作しました。
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={10} md={5} sx={{pt:0.6}}>
                                    <Grid height="100%" container direction="column" justifyContent="space-evenly">
                                        <Grid item xs="auto">
                                            <img alt="BRIOMIDI" src={BROMIDI_IMG} style={{ width:'100%', border:'solid 2px'}}/>
                                        </Grid>
                                        <Grid item xs="auto">
                                            <Stack direction="row" justifyContent='center' sx={{py:{xs:4, md:"auto"}}}>
                                                <a href="https://github.com/Oxypetalum7/Block-Game" title="GitHub Repository" target="_blank" rel="noopener noreferrer" >
                                                    <Icon component={GitHub} sx = {{width:'4rem', height:'4rem', background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                                </a>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="space-around" sx={{py:4}}>
                                <Grid item xs={10} md={5} >
                                    <Typography variant="h6" sx={{ fontWeight:'Bold'}}>
                                        自主制作DiscordBot
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontWeight:'Bold'}}>
                                        Discord-Processing Bot
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={{ mt:1.6 }}>
                                        <Chip label="Python" sx={{ background:lime[800] }} />
                                        <Chip label="Processing" sx={{ background:indigo[600] }} />
                                    </Stack>
                                    <Grid item sx={{my:2, lineHeight:'160%'}}>
                                        <Grid item sx={{mb:1.6}}>
                                            <Typography variant="body">
                                                &ensp;情報表現入門にてProcessingを習得した後に「折角覚えたProcessingを何か面白い事に使いたい」と思っていたところに、Twitterで見かけた「シェル芸Bot※1」を思い出し、「Processingでもシェル芸のようなコミュニケーション表現が出来ると面白いのではないか?」という着想を得て制作しました。
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={{mb:1.2}}>
                                            <Typography variant="body">
                                                &ensp;このBotがアクティブな状態で、コマンド+Processingのコードをテキストチャンネルに投稿すると、Botが投稿を検知。コード部分を抽出してローカル環境のProcessingによるレンダリングを実行し、実行結果をGIFにエクスポートし同チャンネルに返します。これによって、コードによるコミュニケーション表現が可能になります。
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={{mb:1.2}}>
                                            <Typography variant="body" sx={{fontSize:'0.8rem'}} >
                                                ※1 ... Twitterに特定タグを付けて投稿されたシェルスクリプトを実行し、その結果をポストする特定アカウント (<a href="https://twitter.com/minyoruminyon" style={{color:indigo[300]}}>&nbsp;Link&nbsp;</a>)
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={10} md={5} sx={{pt:0.6}}>
                                    <Grid height="100%" container direction="column" justifyContent="space-evenly">
                                        <Grid item xs="auto" position="relative">
                                            <Button onClick={handleClickOpen}>
                                                    <img alt="DPBOT" src={DPBOT_IMG} style={{ width:'100%', border:'solid 2px'}} />
                                                    <Icon component={PlayCircleFilled} sx={{color:'white',margin:0, width:'5rem', height:'5rem', position:'absolute', right:'50%', top:'50%', transform: 'translate(50%, -50%)'}} />
                                            </Button>
                                        </Grid>
                                        <VideoModal open={open} onClose={handleClose}>
                                            <Grid item justifyContent="center" sx={{mx:"auto", my:10}}>
                                                <Player poster={DPBOT_IMG} playsInline>
                                                    <ControlBar>
                                                    </ControlBar>
                                                    <source src={DPBOT} type="video/mp4" />
                                                </Player>
                                            </Grid>
                                        </VideoModal>
                                        <Grid item xs="auto">
                                            <Stack direction="row" justifyContent='center' sx={{py:{xs:4, md:"auto"}}}>
                                                <a href="https://github.com/Oxypetalum7/Discord-Processngbot" title="GitHub Repository" target="_blank" rel="noopener noreferrer" >
                                                    <Icon component={GitHub} sx = {{width:'4rem', height:'4rem', background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                                </a>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid >
                            </Grid>
                            <Grid container justifyContent="space-around" sx={{py:4}}>
                                <Grid item xs={10} md={5}>
                                    <Typography variant="h6" sx={{ fontWeight:'Bold'}}>
                                        GlobalGameJam 2020 Hakodate 参加作品
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontWeight:'Bold'}}>
                                        Repair It!
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={{ mt:1.6 }}>
                                        <Chip label="Processing" sx={{ background:indigo[600] }} />
                                        <Chip label="Design" sx={{ background:purple['A200'] }} />
                                        <Chip label="Music" sx={{ background:cyan[500] }} />
                                    </Stack>
                                    <Grid sx={{display:'flex'}}>
                                        <Grid sx={{ my:2, lineHeight:'160%'}}>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;全世界で同時に同じテーマでゲーム開発を行う「Global Game Jam」が2020年に函館でも開催され、チーム「ぬまるきー」として参加しました。
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;テーマ「Repair」ということで、「なおす」に因んだミニゲームを次々とこなすバラエティゲームを制作しました。
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;ゲームロゴの制作及びタイトル画面の実装、またメインテーマ楽曲の制作を担当しました。
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={10} md={5}>
                                <Grid height="100%" container direction="column" justifyContent="space-evenly">
                                        <Grid item xs="auto">
                                            <img alt="BRIOMIDI" src={REPAIR_IT_IMG} style={{ width:'100%', border:'solid 2px'}}/>
                                        </Grid>
                                        <Grid item xs="auto">
                                            <Stack direction="row" spacing={6} justifyContent='center' sx={{py:{xs:4, md:"auto"}}}>
                                                <a href="https://github.com/Oxypetalum7/Repair-it-" title="GitHub Repository" target="_blank" rel="noopener noreferrer" >
                                                    <Icon component={GitHub} sx = {{width:'4rem', height:'4rem', background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                                </a>
                                                <a href="https://globalgamejam.org/2020/games/repair-it-8" title="Repair it ! | Global Game Jam" target="_blank" rel="noopener noreferrer" >
                                                    <Icon component={Link} sx = {{width:'4rem', height:'4rem', color:grey[300], p:1.5,background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                                </a>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="space-around" sx={{py:4}}>
                                <Grid item xs={10} md={5}>
                                    <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                        未来大　学内ハッカソン 「Funlocks」 参加作品
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontWeight:'Bold'}}>
                                        Amabie Project
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={{ mt:1.6 }}>
                                        <Chip label="Live2D" sx={{ background:yellow[800] }} />
                                        <Chip label="Kotlin" sx={{ background:cyan[600] }} />
                                    </Stack>
                                    <Grid sx={{display:'flex'}}>
                                        <Grid sx={{ my:2, lineHeight:'160%'}}>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;学内向けに開催されたハッカソン「Funlocks」にチーム「小人-18」として出場した際のプロダクトです。
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;「Funlocks」のテーマは「コロナ禍に屋内で使いたいプロダクト」でした。そこで、カジュアルに密を避ける意識を促すアプリケーションを提案したいと思い、疫病対策のシンボルとして注目される「アマビエ」をちょっとシュールなキャラクターに落とし込み、アマビエを通じて密を注意喚起するアプリケーションを作りました。AltBeaconライブラリによってスマートフォン同士の接近(＝人同士の接近)を感知すると、アマビエが一生懸命動きながら密に気を付けることを忠告してくれます。
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;初期起動時の判定及びチュートリアルの実装と、アマビエのイラスト・Live2D化を担当しました。
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={10} md={5}>
                                    <Grid height="100%" container direction="column" justifyContent="space-evenly">
                                        <Grid xs="auto">
                                            <Stack direction="row" spacing={1} sx={{width:'100%', justifyContent:'center'}}>
                                                <img alt="AMABIE_APP" src={AMABIE_IMG} style={{ width:'40%', margin:'0 auto'}}/>
                                                <img alt="AMABIE_ANIMATIOM" src={AMABIE_GIF} style={{ width:'40%', height:'auto', margin:'auto auto'}}/>
                                            </Stack>
                                        </Grid>
                                        <Grid xs="auto">
                                            <Stack direction="row" spacing={6} justifyContent='center' sx={{py:{xs:4, md:"auto"}}}>
                                                <a href="https://github.com/FunLocks/team2003" title="GitHub Repository" target="_blank" rel="noopener noreferrer" >
                                                    <Icon component={GitHub} sx = {{width:'4rem', height:'4rem', background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                                </a>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="space-around" sx={{py:4}}>
                                <Grid item xs={10} md={11} sx={{py:4}}>
                                    <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                        未来大　高度ICT演習
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontWeight:'Bold'}}>
                                        FUN Online Interactive Platform
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={{ mt:1.6 }}>
                                        <Chip label="Scrum" sx={{ background:lime[900] }} />
                                    </Stack>
                                    <Grid sx={{display:'inline'}}>
                                        <Grid sx={{width:'100%', my:1.6, lineHeight:'160%'}}>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;未来大には、B1～M2までの有志の学生が参加して、サービスやプロダクトを開発する「高度ICT演習」という問題解決型学習があります。
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;FUN Online Interactive Platformは2021年度に発足したプロジェクトで、「コロナ禍における学生間コミュニケーションの減少を解決する為、新しい形のコミュニケーションプラットフォームを作る」という目的で活動しています。開発にはアジャイル開発手法のスクラムを採用し、機能/価値駆動で速やかな開発に挑戦しています。
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    このプロジェクトに参加したことで、アジャイル開発のマインドやスクラムの基本について学ぶことができました。
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container direction="column" justifyContent="space-evenly">
                                            <Grid sx={{width:'100%', my:1.6}}>
                                                <Stack direction="row" justifyContent='center' sx={{py:{xs:4, md:"auto"}}}>
                                                    <a href="https://www.fun.ac.jp/advanced-ict" title="高度ICT演習の紹介 (FUN Online FUN Online Interactive Platformの記載あり)" target="_blank" rel="noopener noreferrer" >
                                                        <Icon component={Link} sx = {{width:'4rem', height:'4rem', color:grey[300], p:1.5,background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                                    </a>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="space-around" sx={{py:4}}>
                                <Grid item xs={10} md={5}>
                                    <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                        防災学習レクリエーションゲーム
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontWeight:'Bold'}}>
                                        DID IT
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={{ mt:1.6 }}>
                                        <Chip label="Scrum" sx={{ background:lime[900] }} />
                                        <Chip label="Kotlin" sx={{ background:cyan[600] }} />
                                        <Chip label="Go" sx={{ background:cyan[200] }} />
                                        <Chip label="Vue.js" sx={{ background:green[700] }} />
                                    </Stack>
                                    <Stack direction="row" spacing={2} sx={{ mt:1.6 }}>
                                        <Chip label="Docker" sx={{ background:blue[700] }} />
                                        <Chip label="Design" sx={{ background:purple['A200'] }} />
                                    </Stack>
                                    <Grid sx={{display:'flex'}}>
                                        <Grid sx={{ my:2, lineHeight:'160%'}}>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;未来大には、学部三年生に特定の目標や課題を持った「プロジェクト」に所属し、学生が主体となってサービスやプロダクトを作る「プロジェクト学習」というカリキュラムが存在します。自分は、フィールドワークを通じて地域のニーズや課題を抽出し、それらをデジタルに解決・改善するサービスやプロダクトを作ることを目的とした「使ってもらって学ぶフィールド指向システムデザイン2021」(通称：すうぃふと2021)に所属しました。
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;すうぃふと2021はプロジェクト内で更に3チームに分かれ、それぞれが注目したフィールドのためのプロダクトを制作しました。自分は「地域×災害チーム」に所属し、「函館市民の防災意識が低い」というニーズを解決すべく、子供たちの防災学習を切り口にしたサービスを提案しました。それが「DID IT」です。「DID IT」は、小学校で行う防災学習型イベントと、その中で使う専用アプリで構成されます。このイベントで、小学校の生徒達は学校内にあらかじめ設置された防災にまつわるクイズを専用のアプリケーションで解きながらゴールを目指します。教室を探し回って身近な環境と連動した防災クイズを解くことで、より防災知識を身近に感じさせ、生徒達の自発的な防災学習を促します。DID IT は、函館アカデミックリンク2021に出展し、特別審査員賞を受賞しました。
                                                </Typography>
                                            </Grid>
                                            <Grid sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;自分はこのサービス開発において、スクラムマスターを担当し、スクラム開発のリードを務めました。また、AltbeaconライブラリによるAndroidアプリの機能実装、イベント用データベースの設計、構築、Go言語によるAPI作成、Vue.jsによるイベント状態監視用webアプリケーション「DID IT Observer」の制作、そしてデータベース、API、Webのdockerコンテナ化及びGCPへのデプロイ等のインフラ整備を担当しました。また、プロジェクト全体においてはプロジェクト紹介ページの一部コーディングとデザインを担当しました。
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={10} md={5}>
                                    <Grid height="100%" container direction="column" justifyContent="space-evenly">
                                        <Grid xs="auto">
                                                <Stack direction="row" spacing={1} sx={{width:'100%', justifyContent:'center'}}>
                                                    <img alt="DID IT APP" src={DIDIT_IMG} style={{ width:'75%'}}/>
                                                </Stack>
                                        </Grid>
                                        <Grid xs="auto">
                                            <Stack direction="row" spacing={6} justifyContent='center' sx={{py:{xs:4, md:"auto"}}}>
                                                <a href="https://funswift.github.io/activity-report-website2021/index.html" title="すうぃふと2021 成果発表会Webサイト" target="_blank" rel="noopener noreferrer" >
                                                    <Icon component={Link} sx = {{width:'4rem', height:'4rem', color:grey[300], p:1.5,background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                                </a>
                                                <a href="https://www.fun.ac.jp/activity/14966" title="HAKODATEアカデミックリンク2021で本学から参加の2チームが受賞 – 公立はこだて未来大学 -Future University Hakodate-" target="_blank" rel="noopener noreferrer" >
                                                    <Icon component={Link} sx = {{width:'4rem', height:'4rem', color:grey[300], p:1.5,background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                                </a>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="space-around" sx={{py:4}}>
                                <Grid item xs={10} md={5}>
                                    <Typography variant="h6" sx={{ fontWeight:'Bold', my:1.6}}>
                                        未来大着席管理QRコード読み取り支援アプリ
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontWeight:'Bold'}}>
                                        RALAF
                                    </Typography>
                                    <Stack direction="row" spacing={2} sx={{ mt:1.6 }}>
                                        <Chip label="Vue.js" sx={{ background:green[700] }} />
                                        <Chip label="Movie" sx={{ background:deepPurple[700] }} />
                                    </Stack>
                                    <Grid item>
                                        <Grid item sx={{ my:2, lineHeight:'160%'}}>
                                            <Grid item sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;現在未来大では、COVID-19対策の一環としてGoogleFormを用いた着席履歴のトラッキングを行っています。大学内の座席には個別のQRコードが設置され、QRコードを読み込み転送されたGoogleFormに学籍番号番号を入力することで生徒の着席履歴を管理します。
                                                </Typography>
                                            </Grid>
                                            <Grid  item sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;しかし、この着席管理システムは着席/離席の度に行わなければならず、煩わしい作業でした。そこで、学生が有志でQRコードへの転送と自身の学籍番号入力を自動化するPWAアプリケーションを制作し、大学側で採択されることとなりました。それが「RALAF」です。
                                                </Typography>
                                            </Grid>
                                            <Grid  item sx={{mb:1.6}}>
                                                <Typography variant="body">
                                                    &ensp;自分はこのサービス開発において、留学生利用者のための翻訳機能の実装を行いました。また、このプロダクトはサポーターズ主催の技育展2021にも出展しており、その際のプロモーション映像の制作を担当しました。
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={10} md={5}>
                                    <Grid height="100%" container direction="column" justifyContent="space-evenly">
                                        <Grid xs="auto">
                                            <img alt="RALAF_FLYER" src={RALAF_FLYER} style={{ width:'100%'}}/>
                                        </Grid>
                                        <Grid xs="auto">
                                            <Stack direction="row" spacing={6} justifyContent='center' sx={{py:{xs:4, md:"auto"}}}>
                                                <a href="https://www.youtube.com/watch?v=8onCwaI5igw" title="RALAF紹介動画" target="_blank" rel="noopener noreferrer" >
                                                    <Icon component={Link} sx = {{width:'4rem', height:'4rem', color:grey[300], p:1.5,background:'rgb(0, 0, 0)', borderRadius:'100%'}} />
                                                </a>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
          </Container>
        </div>
    )
}

export default Works;