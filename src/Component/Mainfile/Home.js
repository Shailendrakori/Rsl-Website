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

import PublicIcon from '@mui/icons-material/Public';





const cardContent = [
    {
        id: "1",
        icon: <LanguageIcon />,
        title: " We believe in customer satisfaction",
        textt: "We believe in great service to our customers at an affordable price and customer experiences and customer satisfaction."

    },
    {
        id: "1",
        icon: <DescriptionIcon />,
        title: "A team that makes a difference",
        textt: "The zealous and passionate team is what drives us ahead and strengthens our rootsYour success, Our priority. Tell us what you need! We love to talk! Contact-"

    },
    {
        id: "1",
        icon: <LanguageIcon />,
        title: " We believe in customer satisfaction",
        textt: "We believe in great service to our customers at an affordable price and customer experiences and customer satisfaction."

    },
    {
        id: "1",
        icon: <PublicIcon />,
        title: " We deliver Value",
        textt: "We aim at complete Customer Satisfaction and are committed to deliver what we promise to and ensure optimum value by delivering Quality practice and Flourishing results."

    },

]


const Home = () => {
    return (
        <>


            <Box container className='firefly' >
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
                    <Grid container sx={{ marginBottom: "10%", width: "90%", }}>

                        {cardContent.map((item, index) =>

                            <Grid key={index} md={3} xs={12} sx={{padding:"10px"}}>
                                <Card  sx={{ maxWidth: 500 }}>
                                    
                                    <span > {item.icon}</span>
                                    <CardContent>
                                        <Typography className="title" gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" className="para" color="text.secondary">
                                            {item.textt}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>

                        )}


                    </Grid>
                </Box>
            </Box>

        </>
    );
}

export default Home;
