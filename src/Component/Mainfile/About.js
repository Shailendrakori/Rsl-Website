import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

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



const About = () => {
    return (
        <>


            <Box sx={{ mb: "20%", mt: "9%" }}>
                <Grid container >

                    <Grid md={12} sx={{ marginTop: "1%" }} xs={12}>
                        <Typography variant="h5" sx={{ color: "black", textAlign: "center", }}>
                            About Us
                        </Typography>
                    </Grid>

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
                        <Box sx={{ textAlign: "center" }}>
                            <img src={about} height={457} fullWidth />
                        </Box>

                    </Grid>
                    <Grid md={6} xs={12} >
                        <Box sx={{ p: "3%" }}>
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


        </>
    );
}

export default About;
