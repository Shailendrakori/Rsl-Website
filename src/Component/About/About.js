import React from "react";
import Card from "@mui/material/Card";

import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";

import ImageIcon from "@mui/icons-material/Image";
import "../About/About.css"
const About = () => {
  return (
    <>
    <Box id="about"sx={{ mt: "10%", mb: "4%" }}></Box>
      <Box id="about"sx={{ mt: "10%", mb: "4%" }}>
        <Grid  container>
          <Grid md={12} sx={{ marginTop: "1%" }} xs={12}>
            <Typography
              variant="h4"
              className="heading-all"
              sx={{  textAlign: "center" }}
            >
              Find Out More About Us
            </Typography>
          </Grid>
          <Grid md={3} xs={12}></Grid>
          <Grid md={6} xs={12}>
            <Typography variant="text" sx={{ color: "black", margintop: "1%" }}>
              <Box className="paragraph-all" sx={{ textAlign: "center" }}>
                We experiment, learn, Understand, inspire, motivate and thus
                create beautiful Web and Mobile experience.
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid container   sx={{ mt: "5%" }}>
          <Grid md={6} xs={12}  className="about-img-content bg-ab">
           
          </Grid>
          <Grid md={6} xs={12} sx={{background:"white"}}>
            <Box sx={{ p: "3%" }}>
              <Typography
                variant="h5"
                sx={{ color:" #4C0033", fontWeight: "bold", margintop: "1%" }}
              >
                <Box>
                  Build a culture of open teamwork and Turn conversations into
                  action.
                </Box>
              </Typography>
              <Typography
                variant="text"
                sx={{
                  color: "black",
                  fontWeight: "300",
                  fontStyle: "italic",
                  margintop: "1%",
                }}
              >
                <Box>
                  We are a team of ardent developers, enthusiastic analysts,
                  creative designers and effective managers. Together we work
                  towards one fulfilling goal- Only your success matters.
                </Box>
              </Typography>
              <Grid container>
                <Grid sx={{textAlign:"center"}} md={2} xs={2}>
                  <ImageIcon className="icon-about" />
                </Grid>
                <Grid md={10} sx={{p:"2%"}} xs={10}>
                  <Typography
                    variant="h6"
                    sx={{ color: "black", fontWeight: "300", pt: "3%" }}
                  >
                    <Box> Skilled and experienced designers and developers</Box>
                  </Typography>
                  <Typography
                    variant="text"
                    sx={{ color: "black", fontWeight: "300", pt: "1%" }}
                  >
                    <Box>
                      Their multi-disciplined skills are always up in solving
                      the big problems and hurdles that come in the path.
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid sx={{textAlign:"center",mb:"2%"}} md={2} xs={2}>
                <ImageIcon className="icon-about" />
                </Grid>
                <Grid md={10} sx={{p:"2%"}} xs={10}>
                  
              <Typography
                variant="h6"
                sx={{ color: "black", fontWeight: "300", pt: "3%" }}
              >
                <Box>A Fast Platform for Fast Work</Box>
              </Typography>
              <Typography
                variant="text"
                sx={{ color: "black", fontWeight: "300", pt: "1%" }}
              >
                <Box>
                  Either small or big, we collect all the pieces together and
                  start joining them with every bit of perfection.
                </Box>
              </Typography>
                </Grid>
              </Grid>

              <Typography
                variant="text"
                sx={{ color: "black", fontWeight: "300", mt: "4%" }}
              >
                <Box>
                  At RSL, our priority is to have a complete and uncompromised
                  focus on developing apps that are innovated to set and achieve
                  precise goals. One goal One Direction.
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
