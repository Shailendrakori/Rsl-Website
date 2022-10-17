import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Button from '@mui/material/Button';
import "../Mainfile/Style.css"
import LanguageIcon from '@mui/icons-material/Language';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DescriptionIcon from '@mui/icons-material/Description';
import about from "../img/about.jpg"
import PublicIcon from '@mui/icons-material/Public';
import SourceIcon from '@mui/icons-material/Source';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import BrushIcon from '@mui/icons-material/Brush';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';



const cardCount = [
    {
        id: "1",
        icon: <SentimentSatisfiedAltIcon className='icon' />,
        title: " 150",
        textt: "Happy Clients"

    },
    {
        id: "1",
        icon: < SourceIcon className='icon' />,
        title: " 250",
        textt: "Projects"

    },
    {
        id: "1",
        icon: <HeadsetMicIcon className='icon' />,
        title: " 1463",
        textt: "Hours Of Support"

    },
    {
        id: "1",
        icon: <AccessibilityNewIcon className='icon' />,
        title: " 25",
        textt: "Hard Workers"

    },
]

const cardContent = [
    {
        id: "1",
        icon: <LanguageIcon className='icon' />,
        title: " We believe in customer satisfaction",
        textt: "We believe in great service to our customers at an affordable price and customer experiences and customer satisfaction."

    },
    {
        id: "1",
        icon: <DescriptionIcon className='icon' />,
        title: "A team that makes a difference",
        textt: "The zealous and passionate team is what drives us ahead and strengthens our rootsYour success, Our priority. Tell us what you need! We love to talk! Contact-"

    },
    {
        id: "1",
        icon: <LanguageIcon className='icon' />,
        title: " We believe in customer satisfaction",
        textt: "We believe in great service to our customers at an affordable price and customer experiences and customer satisfaction."

    },
    {
        id: "1",
        icon: <PublicIcon className='icon' />,
        title: " We deliver Value",
        textt: "We aim at complete Customer Satisfaction and are committed to deliver what we promise to and ensure optimum value by delivering Quality practice and Flourishing results."

    },

]

const cardServices = [
    {
        id: "1",
        icon: < AdbIcon className='icon' />,
        title: " Android Development",
        textt: "Advancing technology has resulted in an even more advancing competition. As you want your business to succeed, we work on assisting you by making well heeled mobile apps. We craft native as well as hybrid apps for a variety of platforms such Google Android and Microsoft Windows."

    },
    {
        id: "2",
        icon: <AppleIcon className='icon' />,
        title: "IOS Development",
        textt: "Advancing technology has resulted in an even more advancing competition. As you want your business to succeed, we work on assisting you by making well heeled mobile apps. We craft native as well as hybrid apps for a variety of platforms such as Apple iOS."

    },
    {
        id: "3",
        icon: <PublicIcon className='icon' />,
        title: "Web Design",
        textt: "We Designing is simple, elegant and worthy all at the same time because it’s not only about the look or feel of a website or an application but about how it all works."

    },
    {
        id: "4",
        icon: <PublicIcon className='icon' />,
        title: "Web Development",
        textt: "A website acts as the mirror to the soul of a business. And we bet no one knows that better than us. With the advent of booming internet, we have made ourselves well equipped with the growing online needs too. We are driven forward by creating websites that make you work more quickly and efficiently."

    },
    {
        id: "5",
        icon: <BrushIcon className='icon' />,
        title: "Graphic Design",
        textt: "Designing is simple, elegant and worthy all at the same time because it’s not only about the look or feel of a website or an application but about how it all works."

    },
    {
        id: "6",
        icon: <SportsBaseballIcon className='icon' />,
        title: " QA Solution",
        textt: "Full cycle testing embedded with the promise of quality assurance for web and mobile apps is what we have our hands tied on. Testing is not only about finding bugs or cleaning code but it is about looking into every possible detail of a system and ensure that it meets the most extreme quality standards."

    },

]
const Home = () => {
    return (
        <>


            <Box container className='firefly'  >

                <Box className="overlay">
                    <Grid container sx={{ paddingTop: "10%", }}>
                        <Grid md={1} xs={12} ></Grid>
                        <Grid md={7} xs={12} className="wellcome-to" >
                            <Typography className='h3-home' container variant='h2'> Welcome to RSL Soft Tech Pvt.Ltd.</Typography>

                        </Grid>
                        <Grid md={4} xs={12} ></Grid>

                        <Grid md={1}></Grid>
                        <Grid md={7} xs={12} className="wellcome-to-para" sx={{ fontSize: "20px", background: "#dedee0ad", padding: "10px" }}>
                            <Typography variant='text' > To evolve hand-in-hand with technology, you need to take it up to the top-gear.
                                blend your rough thoughts with our solutions and discover innovation.</Typography>
                        </Grid>
                        <Grid md={4}></Grid>

                        <Grid md={1}></Grid>
                        <Grid md={7} xs={12} className="wellcome-to-btn"  > <Button variant="outline" className='btn-get-started' sx={{ border: "1px solid black" }}>Get Started</Button></Grid>
                    </Grid>

                </Box>
            </Box>

            <Box>
                <Box>
                    <Grid container sx={{ marginLeft: "5%", marginBottom: "10%", width: "90%", }}>

                        {cardContent.map((item, index) =>

                            <Grid key={index} id="homes" md={3} xs={12} sx={{ padding: "10px", }}>
                                <Card className='card1' sx={{ maxWidth: 300, height: "330px" }}>

                                    <Box className="iconn"  ><span > {item.icon}</span></Box>
                                    <CardContent>
                                        <Typography className='title' sx={{ paddingBottom: "12px" }} variant="h5" component="Box">
                                            {item.title}
                                        </Typography>
                                        <Typography className='textt' variant="body2" color="text.secondary">
                                            {item.textt}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>

                        )}


                    </Grid>
                </Box>
            </Box>


            <Box sx={{ mb: "4%" }}>
                <Grid container >
                    <Grid md={12} sx={{ marginTop: "1%" }} xs={12}>
                        <Typography variant="h4" sx={{ color: "black", textAlign: "center", }}>
                            Find Out More About Us
                        </Typography>
                    </Grid>
                    <Grid md={12} xs={12} >
                        <Typography variant="text" sx={{ color: "black", margintop: "1%", }}>
                            <Box sx={{ textAlign: "center" }}>
                                We experiment, learn, Understand, inspire, motivate and thus create beautiful Web and Mobile experience.
                            </Box>
                        </Typography>

                    </Grid>
                </Grid>
                <Grid container sx={{ mt: "5%" }}>
                    <Grid md={6} xs={12}>
                       <Box sx={{textAlign:"center"}}>
                            <img src={about} height={380}/>
                            </Box>
                    </Grid>
                    <Grid md={6} xs={12} >
                        <Box sx={{ p:"3%" }}>
                            <Typography variant="h4" sx={{ color: "black", fontWeight: "bold", margintop: "1%", }}>
                                <Box >
                                    Build a culture of open teamwork and Turn conversations into action.
                                </Box>
                            </Typography>
                            <Typography variant="text" sx={{ color: "black", fontWeight: "300", fontStyle: "italic", margintop: "1%", }}>
                                <Box >
                                    We are a team of ardent developers, enthusiastic analysts,
                                    creative designers and effective managers.
                                    Together we work towards one fulfilling goal- Only your success matters.
                                </Box>
                            </Typography>
                            <Typography variant="h5" sx={{ color: "black", fontWeight: "300", pt: "3%", }}>
                                <Box >
                                    Skilled and experienced designers and developers
                                </Box>
                            </Typography>
                            <Typography variant="text" sx={{ color: "black", fontWeight: "300", pt: "1%", }}>
                                <Box >
                                    Their multi-disciplined skills are always up in solving the big problems and hurdles that come in the path.
                                </Box>
                            </Typography>
                            <Typography variant="h5" sx={{ color: "black", fontWeight: "300", pt: "3%", }}>
                                <Box >

                                    A Fast Platform for Fast Work
                                </Box>
                            </Typography>
                            <Typography variant="text" sx={{ color: "black", fontWeight: "300", pt: "1%", }}>
                                <Box >
                                    Either small or big, we collect all the pieces together and start joining them with every bit of perfection.
                                </Box>
                            </Typography>
                            <Typography variant="text" sx={{ color: "black", fontWeight: "300", pt: "3%", }}>
                                <Box >
                                    At RSL, our priority is to have a complete and uncompromised focus on developing apps that are innovated to set and achieve precise goals. One goal One Direction.
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

            </Box>


             <Box>
                <Box>
                    <Grid container sx={{  marginBottom: "10%", width: "90%", }}>

                        {cardCount.map((item, index) =>

                            <Grid key={index} id="homes" md={3} xs={12} sx={{ padding: "10px", }}>



                                <Card className='card1' sx={{ maxWidth: 300, }}>
                                    <Grid container>
                                        <Grid md={3}>
                                            <Box className="iconn"   >
                                                <span > {item.icon}</span>
                                            </Box>
                                        </Grid>
                                        <Grid md={9}>
                                            <CardContent sx={{ textALign: "center" }} >
                                                <Typography className='title' sx={{ paddingBottom: "12px", }} variant="h2" component="Box">
                                                    {item.title}
                                                </Typography>
                                                <Typography className='textt' variant="body2" color="text.secondary">
                                                    {item.textt}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                    </Grid>


                                </Card>
                            </Grid>

                        )}


                    </Grid>
                </Box>
            </Box> 
 
            <Box sx={{ mb: "4%" }}>
                <Grid container >

                    <Grid md={12} sx={{ marginTop: "1%" }} xs={12}>
                        <Typography variant="h4" sx={{ color: "black", textAlign: "center", }}>
                            Check our Services
                        </Typography>
                    </Grid>
                    <Grid md={12} xs={12} >
                        <Typography variant="text" sx={{ color: "black", margintop: "1%", }}>
                            <Box sx={{ textAlign: "center" }}>
                                Our Aim is to serve the best services to our costomers,
                                customer satisfaction is our top priority,
                                and You are going to love our services.
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ marginLeft: "5%", marginBottom: "10%", width: "90%", }}>

                    {cardServices.map((item, index) =>

                        <Grid key={index} id="homes" md={4} xs={12} sx={{ padding: "10px", }}>
                            <Card className='card1' sx={{ maxWidth: 300, height: "330px" }}>

                                <Box className="iconn"  ><span > {item.icon}</span></Box>
                                <CardContent>
                                    <Typography className='title' sx={{ paddingBottom: "12px" }} variant="h5" component="Box">
                                        {item.title}
                                    </Typography>
                                    <Typography className='textt' variant="body2" color="text.secondary">
                                        {item.textt}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>

                    )}


                </Grid>

            </Box> 




        </>
    );
}

export default Home;
