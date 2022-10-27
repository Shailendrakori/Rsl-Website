import React from "react";
import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LinkIcon from "@mui/icons-material/Link";
import AddIcon from "@mui/icons-material/Add";
import cuffing from "../img/cuff111.png";
import eblogo from "../img/eblogo.png";
import fluent from "../img/fluent8-logo-purple.png";
import ice1 from "../img/ice1.png";
import autism from "../img/autism.jpg";
import ih1 from "../img/ih1.png";
import "../Portfolio/Portfolio.css"
const Portfolio = () => {
  return (
    <>
      <Box id="portfolio" sx={{mt:"10%",  }}>
        <Grid container>
          <Grid md={12} sx={{ marginTop: "1%" }} xs={12}>
            <Typography
              variant="h4"
              className="heading-all"
              sx={{ color: "black", textAlign: "center" }}
            >
              Our Portfolio
            </Typography>
          </Grid>
          <Grid md={3} xs={12}></Grid>
          <Grid md={6} xs={12}>
            <Typography variant="text" sx={{ color: "black", margintop: "1%" }}>
              <Box className="paragraph-all" sx={{ textAlign: "center" }}>
                We create dynamic, interactive and user-friendly solutions for
                our Clients. Like Never Before
              </Box>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ marginLeft: "5%",  width: "90%" }}
        >
          <Grid md={4} xs={12}>
            <Box className="card-port">
              <Box className="slide slide1">
                <Box className="content">
                  <Box sx={{textAlign:"center"}}className="icon-port">
                    <img src={cuffing} className="img-size3"  height={200} width={200} />
                  </Box>
                </Box>
              </Box>
              <Box className="slide slide2">
                <Box className="content">
                  <Grid container>
                    <Grid md={8} xs={8}>
                      <Typography className="title-portt" variant="h5">
                        Cuffing
                      </Typography>
                      <Typography className="para-port" variant="text">
                        ANDROID AND IOS
                      </Typography>
                    </Grid>
                    <Grid md={4} xs={4}>
                      <ListItem>
                        <ListItemText sx={{ mr: "40px" }}>
                          <AddIcon className="port-icon-o" />
                        </ListItemText>
                        <ListItemText>
                          <LinkIcon className="port-icon-o" />
                        </ListItemText>
                      </ListItem>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid md={4} xs={12}>
            <Box className="card-port">
              <Box className="slide slide1">
                <Box className="content">
                  <Box className="icon-port">
                    <img src={eblogo} height={200} width={300} />
                  </Box>
                </Box>
              </Box>
              <Box className="slide slide2">
                <Box className="content">
                <Grid container>
                    <Grid md={8} xs={8}>
                      <Typography className="title-portt" variant="h5">
                      Ebook Reader
                      </Typography>
                      <Typography className="para-port" variant="text">
                        ANDROID AND IOS
                      </Typography>
                    </Grid>
                    <Grid md={4} xs={4}>
                      <ListItem>
                        <ListItemText sx={{ mr: "40px" }}>
                          <AddIcon className="port-icon-o" />
                        </ListItemText>
                        <ListItemText>
                          <LinkIcon className="port-icon-o" />
                        </ListItemText>
                      </ListItem>
                    </Grid>
                  </Grid>
                  
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid md={4} xs={12}>
            <Box className="card-port">
              <Box className="slide slide1">
                <Box className="content">
                  <Box className="icon-port">
                    <img src={ih1} className="img-size3" height={150} width={300} />
                  </Box>
                </Box>
              </Box>
              <Box className="slide slide2">
                <Box className="content">

                <Grid container>
                    <Grid md={8} xs={8}>
                      <Typography className="title-portt" variant="h5">
                      iHomeCare
                      </Typography>
                      <Typography className="para-port" variant="text">
                        ANDROID AND IOS
                      </Typography>
                    </Grid>
                    <Grid md={4} xs={4}>
                      <ListItem>
                        <ListItemText sx={{ mr: "40px" }}>
                          <AddIcon className="port-icon-o" />
                        </ListItemText>
                        <ListItemText>
                          <LinkIcon className="port-icon-o" />
                        </ListItemText>
                      </ListItem>
                    </Grid>
                  </Grid>
                  
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid md={4} xs={12}>
            <Box className="card-port">
              <Box className="slide slide1">
                <Box className="content">
                  <Box className="icon-port">
                    <img src={ice1} height={200} className="img-size3"  width={300} />
                  </Box>
                </Box>
              </Box>
              <Box className="slide slide2">
                <Box className="content">
                <Grid container>
                    <Grid md={8} xs={8}>
                      <Typography className="title-portt" variant="h5">
                      Island Traveller
                      </Typography>
                      <Typography className="para-port" variant="text">
                        ANDROID AND IOS
                      </Typography>
                    </Grid>
                    <Grid md={4} xs={4}>
                      <ListItem>
                        <ListItemText sx={{ mr: "40px" }}>
                          <AddIcon className="port-icon-o" />
                        </ListItemText>
                        <ListItemText>
                          <LinkIcon className="port-icon-o" />
                        </ListItemText>
                      </ListItem>
                    </Grid>
                  </Grid>
                 
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid md={4} xs={12}>
            <Box className="card-port">
              <Box className="slide slide1">
                <Box className="content">
                  <Box  className="icon-port">
                    <img src={fluent} className="img-size3"  />
                  </Box>
                </Box>
              </Box>
              <Box className="slide slide2">
                <Box className="content">
                <Grid container>
                    <Grid md={8} xs={8}>
                      <Typography className="title-portt" variant="h5">
                      Fluent8
                      </Typography>
                      <Typography className="para-port" variant="text">
                        ANDROID AND IOS
                      </Typography>
                    </Grid>
                    <Grid md={4} xs={4}>
                      <ListItem>
                        <ListItemText sx={{ mr: "40px" }}>
                          <AddIcon className="port-icon-o" />
                        </ListItemText>
                        <ListItemText>
                          <LinkIcon className="port-icon-o" />
                        </ListItemText>
                      </ListItem>
                    </Grid>
                  </Grid>
                
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid md={4} xs={12}>
            <Box className="card-port">
              <Box className="slide slide1">
                <Box className="content">
                  <Box className="icon-port">
                    <img src={autism}  className="img-size3"  height={200} width={300} />
                  </Box>
                </Box>
              </Box>
              <Box className="slide slide2">
                <Box className="content">
                <Grid container>
                    <Grid md={8} xs={8}>
                    <Typography className="title-portt" variant="h5">
                    Autism Therapy
                  </Typography>
                  <Typography className="para-port" variant="text">
                    ANDROID AND IOS
                  </Typography>
                    </Grid>
                    <Grid md={4} xs={4}>
                      <ListItem>
                        <ListItemText sx={{ mr: "40px" }}>
                          <AddIcon className="port-icon-o" />
                        </ListItemText>
                        <ListItemText>
                          <LinkIcon className="port-icon-o" />
                        </ListItemText>
                      </ListItem>
                    </Grid>
                  </Grid>
                  {/* */}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
