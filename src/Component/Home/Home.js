import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import "../Home/Home.css";
import LanguageIcon from "@mui/icons-material/Language";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DescriptionIcon from "@mui/icons-material/Description";
import PublicIcon from "@mui/icons-material/Public";
import SourceIcon from "@mui/icons-material/Source";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import BrushIcon from "@mui/icons-material/Brush";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";

const cardCount = [
  {
    id: "1",
    icon: <SentimentSatisfiedAltIcon className="icon-count1" />,
    title: " 150",
    textt: "Happy Clients",
  },
  {
    id: "1",
    icon: <SourceIcon className="icon-count1" />,
    title: " 250",
    textt: "Projects",
  },
  {
    id: "1",
    icon: <HeadsetMicIcon className="icon-count1" />,
    title: " 1463",
    textt: "Hours Of Support",
  },
  {
    id: "1",
    icon: <AccessibilityNewIcon className="icon-count1" />,
    title: " 25",
    textt: "Hard Workers",
  },
];

const cardContent = [
  {
    id: "1",
    icon: <LanguageIcon className="icon" />,
    title: " We believe in customer satisfaction",
    textt:
      "We believe in great service to our customers at an affordable price and customer experiences and customer satisfaction.",
  },
  {
    id: "1",
    icon: <DescriptionIcon className="icon" />,
    title: "A team that makes a difference",
    textt:
      "The zealous and passionate team is what drives us ahead and strengthens our rootsYour success, Our priority. Tell us what you need! We love to talk! Contact-",
  },
  {
    id: "1",
    icon: <LanguageIcon className="icon" />,
    title: " We believe in customer satisfaction",
    textt:
      "We believe in great service to our customers at an affordable price and customer experiences and customer satisfaction.",
  },
  {
    id: "1",
    icon: <PublicIcon className="icon" />,
    title: " We deliver Value",
    textt:
      "We aim at complete Customer Satisfaction and are committed to deliver what we promise to and ensure optimum value by delivering Quality practice and Flourishing results.",
  },
];

const Home = () => {
  return (
    <>
      <Box id="home"></Box>
      <Box container className="firefly">
        <Box className="overlay">
          <Grid container sx={{ paddingTop: "10%" }}>
            <Grid md={1} xs={12}></Grid>
            <Grid md={7} xs={12} className="wellcome-to">
              <Typography
                className="h3-home"
                className="heading-all"
                container
                variant="h2"
              >
                Welcome to RSL Soft Tech Pvt.Ltd.
              </Typography>
            </Grid>
            <Grid md={4} xs={12}></Grid>

            <Grid md={1}></Grid>
            <Grid
              md={7}
              xs={12}
              className="wellcome-to-para"
              sx={{
                fontSize: "20px",
                background: "#dedee0ad",
                padding: "10px",
              }}
            >
              <Typography variant="text">
                To evolve hand-in-hand with technology, you need to take it up
                to the top-gear. blend your rough thoughts with our solutions
                and discover innovation.
              </Typography>
            </Grid>
            <Grid md={4}></Grid>

            <Grid md={1}></Grid>
            <Grid md={7} xs={12} className="wellcome-to-btn">
              <Button
                href="#web"
                variant="outline"
                className="btn-get-started"
                // sx={{ border: "1px solid black" }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* <Box sx={{ mt: "10%" }} id="web">
        <Box>
          <Grid
            container
            sx={{ marginLeft: "5%", marginBottom: "10%", width: "90%" }}
          >
            {cardContent.map((item, index) => (
              <Grid
                key={index}
                id="homes"
                md={3}
                xs={12}
                sx={{ padding: "10px" }}
              >
                <Card className="card1" sx={{ maxWidth: 300, height: "330px" }}>
                  <Box className="iconn">
                    <span> {item.icon}</span>
                  </Box>
                  <CardContent>
                    <Typography
                      className="title"
                      sx={{ paddingBottom: "12px" }}
                      variant="h5"
                      component="Box"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className="textt"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.textt}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box> */}

      {/* <About/> */}

      <Box>
        <Box>
          <Grid
            container
            sx={{ marginLeft: "5%", marginBottom: "10%", width: "90%" }}
          >
            {cardCount.map((item, index) => (
              <Grid
                key={index}
                id="homes"
                md={3}
                xs={12}
                sx={{ padding: "10px" }}
              >
                <Box className="count-iconn">
                  <span> {item.icon}</span>
                </Box>
                <Card className="card1" sx={{ maxWidth: 300 }}>
                  <Grid container>
                    <Grid md={12} xs={12}>
                      <CardContent>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            className="title"
                            sx={{ paddingBottom: "12px" }}
                            variant="h2"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            className="textt"
                            variant="body2"
                            color="text.secondary"
                          >
                            {item.textt}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <div>
        <div className="row1-container">
          <div className="box box-down cyan">
            <h2 className="home-heading">We believe in customer satisfaction</h2>
            <p className="home-para">
              We believe in great service to our customers at an affordable
              price and customer experiences and customer satisfaction.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt
            />
          </div>
          <div className="box red">
            <h2 className="home-heading">A team that makes a difference</h2>
            <p className="home-para">
              The zealous and passionate team is what drives us ahead and
              strengthens our rootsYour success, Our priority. Tell us what you
              need! We love to talk! Contact-
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt
            />
          </div>
          <div className="box box-down blue">
            <h2 className="home-heading">We believe in customer satisfaction</h2>
            <p className="home-para">
              We believe in great service to our customers at an affordable
              price and customer experiences and customer satisfaction.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt
            />
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange">
            <h2 className="home-heading">We deliver Value</h2>
            <p className="home-para">
              We aim at complete Customer Satisfaction and are committed to
              deliver what we promise to and ensure optimum value by delivering
              Quality practice and Flourishing results.
            </p>
            <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt />
          </div>
        </div>
      </div>









{/* <section className="section">
  <div className="container content">
    <p className="title">Animate CSS Examples</p>
    <p><a href="https://daneden.github.io/animate.css/">Animate CSS</a> was created by Daniel Eden. Hover over a box below to trigger a three second example of the animation.</p>
  </div>
  <div className="container">
    <p className="title is-size-4">
      Attention Seekers</p>
    <div className="ani-boxes">
      <div data-ani="bounce">bounce</div>
      <div data-ani="flash">flash</div>
      <div data-ani="pulse">pulse</div>
      <div data-ani="rubberBand">rubberBand</div>
      <div data-ani="shake">shake</div>
      <div data-ani="swing">swing</div>
      <div data-ani="tada">tada</div>
      <div data-ani="wobble">wobble</div>
      <div data-ani="jello">jello</div>
    </div>
    <p className="title is-size-4">Bouncing Entrances</p>
    <div className="ani-boxes">
      <div data-ani="bounceIn">bounceIn</div>
      <div data-ani="bounceInDown">bounceInDown</div>
      <div data-ani="bounceInLeft">bounceInLeft</div>
      <div data-ani="bounceInRight">bounceInRight</div>
      <div data-ani="bounceInUp">bounceInUp</div>
    </div>
    <p className="title is-size-4">Bouncing Exits</p>
    <div className="ani-boxes">
      <div data-ani="bounceOut">bounceOut</div>
      <div data-ani="bounceOutDown">bounceOutDown</div>
      <div data-ani="bounceOutLeft">bounceOutLeft</div>
      <div data-ani="bounceOutRight">bounceOutRight</div>
      <div data-ani="bounceOutUp">bounceOutUp</div>
    </div>
    <p className="title is-size-4">Fading Entrances</p>
    <div className="ani-boxes">
      <div data-ani="fadeIn">fadeIn</div>
      <div data-ani="fadeInDown">fadeInDown</div>
      <div data-ani="fadeInDownBig">fadeInDownBig</div>
      <div data-ani="fadeInLeft">fadeInLeft</div>
      <div data-ani="fadeInLeftBig">fadeInLeftBig</div>
      <div data-ani="fadeInRight">fadeInRight</div>
      <div data-ani="fadeInRightBig">fadeInRightBig</div>
      <div data-ani="fadeInUp">fadeInUp</div>
      <div data-ani="fadeInUpBig">fadeInUpBig</div>
    </div>
    <p className="title is-size-4">Fading Exits</p>
    <div className="ani-boxes">
      <div data-ani="fadeOut">fadeOut</div>
      <div data-ani="fadeOutDown">fadeOutDown</div>
      <div data-ani="fadeOutDownBig">fadeOutDownBig</div>
      <div data-ani="fadeOutLeft">fadeOutLeft</div>
      <div data-ani="fadeOutLeftBig">fadeOutLeftBig</div>
      <div data-ani="fadeOutRight">fadeOutRight</div>
      <div data-ani="fadeOutRightBig">fadeOutRightBig</div>
      <div data-ani="fadeOutUp">fadeOutUp</div>
      <div data-ani="fadeOutUpBig">fadeOutUpBig</div>
    </div>
    <p className="title is-size-4">Flippers</p>
    <div className="ani-boxes">
      <div data-ani="flip">flip</div>
      <div data-ani="flipInX">flipInX</div>
      <div data-ani="flipInY">flipInY</div>
      <div data-ani="flipOutX">flipOutX</div>
      <div data-ani="flipOutY">flipOutY</div>
    </div>
    <p className="title is-size-4">Lightspeed</p>
    <div className="ani-boxes">
      <div data-ani="lightSpeedIn">lightSpeedIn</div>
      <div data-ani="lightSpeedOut">lightSpeedOut</div>
    </div>
    <p className="title is-size-4">Rotating Entrances</p>
    <div className="ani-boxes">
      <div data-ani="rotateIn">rotateIn</div>
      <div data-ani="rotateInDownLeft">rotateInDownLeft</div>
      <div data-ani="rotateInDownRight">rotateInDownRight</div>
      <div data-ani="rotateInUpLeft">rotateInUpLeft</div>
      <div data-ani="rotateInUpRight">rotateInUpRight</div>
    </div>
    <p className="title is-size-4">Rotating Exits</p>
    <div className="ani-boxes">
      <div data-ani="rotateOut">rotateOut</div>
      <div data-ani="rotateOutDownLeft">rotateOutDownLeft</div>
      <div data-ani="rotateOutDownRight">rotateOutDownRight</div>
      <div data-ani="rotateOutUpLeft">rotateOutUpLeft</div>
      <div data-ani="rotateOutUpRight">rotateOutUpRight</div>
    </div>
    <p className="title is-size-4">Sliding Entrances</p>
    <div className="ani-boxes">
      <div className="aninmated infinite" data-ani="slideInUp">slideInUp</div>
      <div data-ani="slideInDown">slideInDown</div>
      <div data-ani="slideInLeft">slideInLeft</div>
      <div data-ani="slideInRight">slideInRight</div>
    </div>
    <p className="title is-size-4">Sliding Exits</p>
    <div className="ani-boxes">
      <div data-ani="slideOutUp">slideOutUp</div>
      <div data-ani="slideOutDown">slideOutDown</div>
      <div data-ani="slideOutLeft">slideOutLeft</div>
      <div data-ani="slideOutRight">slideOutRight</div>
    </div>
    <p className="title is-size-4">Zoom Entrances</p>
    <div className="ani-boxes">
      <div data-ani="zoomIn">zoomIn</div>
      <div data-ani="zoomInDown">zoomInDown</div>
      <div data-ani="zoomInLeft">zoomInLeft</div>
      <div data-ani="zoomInRight">zoomInRight</div>
      <div data-ani="zoomInUp">zoomInUp</div>
    </div>
    <p className="title is-size-4">Zoom Exits</p>
    <div className="ani-boxes">
      <div data-ani="zoomOut">zoomOut</div>
      <div data-ani="zoomOutDown">zoomOutDown</div>
      <div data-ani="zoomOutLeft">zoomOutLeft</div>
      <div data-ani="zoomOutRight">zoomOutRight</div>
      <div data-ani="zoomOutUp">zoomOutUp</div>
    </div>
    <div className="ani-boxes">
      <p className="title is-size-4">Specials</p>
      <div data-ani="hinge">hinge</div>
      <div data-ani="jackInTheBox">jackInTheBox</div>
      <div data-ani="rollIn">rollIn</div>
      <div data-ani="rollOut">rollOut</div>
    </div>
  </div>
</section> */}


    </>
  );
};

export default Home;
