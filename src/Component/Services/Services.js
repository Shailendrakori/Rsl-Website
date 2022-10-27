import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DescriptionIcon from "@mui/icons-material/Description";
import about from "../img/about.jpg";
import PublicIcon from "@mui/icons-material/Public";
import SourceIcon from "@mui/icons-material/Source";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import BrushIcon from "@mui/icons-material/Brush";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import "../Services/Services.css";
import ab from "../img/ab.png";
const cardServices = [
  {
    id: "1",
    icon: <ab className="icon" />,
    title: " Android Development",
    textt:
      "Advancing technology has resulted in an even more advancing competition. As you want your business to succeed, we work on assisting you by making well heeled mobile apps. We craft native as well as hybrid apps for a variety of platforms such Google Android and Microsoft Windows.",
  },
  {
    id: "2",
    icon: <AppleIcon className="icon-service" />,
    title: "IOS Development",
    textt:
      "Advancing technology has resulted in an even more advancing competition. As you want your business to succeed, we work on assisting you by making well heeled mobile apps. We craft native as well as hybrid apps for a variety of platforms such as Apple iOS.",
  },
  {
    id: "3",
    icon: <PublicIcon className="icon-service" />,
    title: "Web Design",
    textt:
      "We Designing is simple, elegant and worthy all at the same time because it’s not only about the look or feel of a website or an application but about how it all works.",
  },
  {
    id: "4",
    icon: <PublicIcon className="icon-service" />,
    title: "Web Development",
    textt:
      "A website acts as the mirror to the soul of a business. And we bet no one knows that better than us. With the advent of booming internet, we have made ourselves well equipped with the growing online needs too. We are driven forward by creating websites that make you work more quickly and efficiently.",
  },
  {
    id: "5",
    icon: <BrushIcon className="icon-service" />,
    title: "Graphic Design",
    textt:
      "Designing is simple, elegant and worthy all at the same time because it’s not only about the look or feel of a website or an application but about how it all works.",
  },
  {
    id: "6",
    icon: <SportsBaseballIcon className="icon-service" />,
    title: " QA Solution",
    textt:
      "Full cycle testing embedded with the promise of quality assurance for web and mobile apps is what we have our hands tied on. Testing is not only about finding bugs or cleaning code but it is about looking into every possible detail of a system and ensure that it meets the most extreme quality standards.",
  },
];
const Services = () => {
  return (
    <>
      <Box id="services" sx={{ mt: "10%", mb: "4%" }}>
        <Grid container>
          <Grid md={12} sx={{ marginTop: "1%" }} xs={12}>
            <Typography
              variant="h4"
              className="heading-service"
              sx={{ color: "black", textAlign: "center" }}
            >
              Check our Services
            </Typography>
          </Grid>
          <Grid md={3} xs={12}></Grid>
          <Grid md={6} xs={12}>
            <Typography variant="text" sx={{ color: "black", margintop: "1%" }}>
              <Box className="paragraph-all" sx={{ textAlign: "center" }}>
                Our Aim is to serve the best services to our costomers, customer
                satisfaction is our top priority, and You are going to love our
                services.
              </Box>
            </Typography>
          </Grid>
        </Grid>

        {/* <Grid
          container
          sx={{ marginLeft: "5%", mt: "5%", marginBottom: "10%", width: "90%" }}
        >
          {cardServices.map((item, index) => (
            <Grid
              className="card-center-service"
              key={index}
              id="homes"
              md={4}
              xs={12}
              sx={{ padding: "10px" }}
            >
              <Card className="card1 " sx={{ maxWidth: 300, height: "330px" }}>
                <Box className="iconn">
                  <span> {item.icon}</span>
                </Box>
                <CardContent sx={{ textAlign: "start" }}>
                  <Typography
                    className="title"
                    sx={{ m: "6%" }}
                    variant="h6"
                    component="Box"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className="textt"
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "start" }}
                  >
                    {item.textt}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </Box>
      {/* <div className="container">
        <div className="row">
        <div className="col-md-1"></div>
          <div className="col-md-3">
            <div className="card-service">
              <div className=" content-service">
                <h2 className="title-service">Android Development</h2>
                <p className="copy-service">
                  Advancing technology has resulted in an even more advancing
                  competition. As you want your business to succeed, we work on
                  assisting you by making well heeled mobile apps. We craft
                  native as well as hybrid apps for a variety of platforms such
                  Google Android and Microsoft Windows.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-service">
              <div className=" content-service">
                <h2 className="title-service">IOS Development</h2>
                <p className="copy-service">
                  Advancing technology has resulted in an even more advancing
                  competition. As you want your business to succeed, we work on
                  assisting you by making well heeled mobile apps. We craft
                  native as well as hybrid apps for a variety of platforms such
                  as Apple iOS.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-service">
              <div className=" content-service">
                <h2 className="title-service">Web Design</h2>
                <p className="copy-service">
                  We Designing is simple, elegant and worthy all at the same
                  time because it’s not only about the look or feel of a website
                  or an application but about how it all works.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
        <div className="col-md-1"></div>

          <div className="col-md-3">
            <div className="card-service">
              <div className=" content-service">
                <h2 className="title-service">Web Development</h2>
                <p className="copy-service">
                  A website acts as the mirror to the soul of a business. And we
                  bet no one knows that better than us. With the advent of
                  booming internet, we have made ourselves well equipped with
                  the growing online needs too. We are driven forward by
                  creating websites that make you work more quickly and
                  efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-service ">
              <div className=" content-service">
                <h2 className="title-service">Graphic Design</h2>
                <p className="copy-service">
                  Designing is simple, elegant and worthy all at the same time
                  because it’s not only about the look or feel of a website or
                  an application but about how it all works.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-service">
              <div className=" content-service">
                <h2 className="title-service">QA Solution</h2>
                <p className="copy-service">
                  Full cycle testing embedded with the promise of quality
                  assurance for web and mobile apps is what we have our hands
                  tied on. Testing is not only about finding bugs or cleaning
                  code but it is about looking into every possible detail of a
                  system and ensure that it meets the most extreme quality
                  standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <main className="page-content-service">
        <div className="card-service">
          <div className=" content-service">
            <h2 className="title-service">Android Development</h2>
            <p className="copy-service">
              Advancing technology has resulted in an even more advancing
              competition. As you want your business to succeed, we work on
              assisting you by making well heeled mobile apps. We craft native
              as well as hybrid apps for a variety of platforms such Google
              Android and Microsoft Windows.
            </p>
          </div>
        </div>
        <div className="card-service">
          <div className=" content-service">
            <h2 className="title-service">IOS Development</h2>
            <p className="copy-service">
              Advancing technology has resulted in an even more advancing
              competition. As you want your business to succeed, we work on
              assisting you by making well heeled mobile apps. We craft native
              as well as hybrid apps for a variety of platforms such as Apple
              iOS.
            </p>
          </div>
        </div>
        <div className="card-service">
          <div className=" content-service">
            <h2 className="title-service">Web Design</h2>
            <p className="copy-service">
              We Designing is simple, elegant and worthy all at the same time
              because it’s not only about the look or feel of a website or an
              application but about how it all works.
            </p>
          </div>
        </div>
   
        <div className="card-service">
          <div className=" content-service ">
            <h2 className="title-service">Web Development</h2>
            <p className="copy-service">
              A website acts as the mirror to the soul of a business. And we bet
              no one knows that better than us. With the advent of booming
              internet, we have made ourselves well equipped with the growing
              online needs too. We are driven forward by creating websites that
              make you work more quickly and efficiently.
            </p>
          </div>
        </div>
        <div className="card-service">
        <div className=" content-service">
                <h2 className="title-service">Graphic Design</h2>
                <p className="copy-service">
                  Designing is simple, elegant and worthy all at the same time
                  because it’s not only about the look or feel of a website or
                  an application but about how it all works.
                </p>
              </div>
        </div>
        <div className="card-service">
        <div className=" content-service">
                <h2 className="title-service">QA Solution</h2>
                <p className="copy-service">
                  Full cycle testing embedded with the promise of quality
                  assurance for web and mobile apps is what we have our hands
                  tied on. Testing is not only about finding bugs or cleaning
                  code but it is about looking into every possible detail of a
                  system and ensure that it meets the most extreme quality
                  standards.
                </p>
              </div>
        </div>
      </main>
    </>
  );
};

export default Services;
{
  /* <button className="btn-service">Book Now</button> */
}
