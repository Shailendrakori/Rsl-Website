import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Grid, Typography } from "@mui/material";
import "../Footer/Footer.css";
import { Link, NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import BottomNavigation from '@mui/material/BottomNavigation';
// or
import { BottomNavigation } from "@mui/material";
const Footer = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <CssBaseline />
      <Box>
        <Box className="footer">
          <Grid container>
            <Grid md={3} xs={12} sx={{ p: "3%" }}>
              <Typography
                variant="h5"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                RSL Soft Tech Pvt.Ltd.
              </Typography>
              <Typography variant="text" sx={{ color: "black" }}>
                114,115 Milinda Manor RNT Marg Indore (MP), India
              </Typography>{" "}
              <br />
              <Typography variant="text" sx={{ color: "black" }}>
                Phone: +918839087102
              </Typography>
              <br />
              <Typography variant="text" sx={{ color: "black" }}>
                Phone: +918878086055
              </Typography>
            </Grid>
            <Grid md={3} xs={12} sx={{ pt: "3%" }}>
              <Box sx={{ width: "100%", maxWidth: 360 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold " }}>
                  Usefull Links
                </Typography>
                <List component="nav" aria-label="secondary mailbox folder">
                  <ListItemText>
                    <Link className="afooter" to="/">
                      Home
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/about">
                      About us
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/services">
                      Services
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/portfolio">
                      Portfolio
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/portfolio">
                      Portfolio
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/">
                      Terms of uses
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/contact">
                      Contact
                    </Link>
                  </ListItemText>
                </List>
              </Box>
            </Grid>
            <Grid md={3} xs={12} sx={{ pt: "3%" }}>
              <Box sx={{ width: "100%", maxWidth: 360 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold " }}>
                  Our Services
                </Typography>
                <List component="nav" aria-label="secondary mailbox folder">
                  <ListItemText>
                    <Link className="afooter" to="/">
                      Android Development
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/services">
                      IOS Development
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/services">
                      Web Design
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/services">
                      Web Development
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/services">
                      Graphic Design
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="/services">
                      QA Solurion
                    </Link>
                  </ListItemText>
                 
                </List>
              </Box>
            </Grid>

            <Grid md={3} xs={12} sx={{ p: "3%" }}>
              <Typography
                variant="6"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Get in touch
              </Typography>
              <Typography variant="text" sx={{ color: "black" }}>
                Email : contact@rslsofttech.com
              </Typography>{" "}
              <br />
              <Typography variant="text" sx={{ color: "black" }}>
                Email : hr@rslsofttech.com
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className="afterfooter">
        <Grid container>
          <Grid md={6} xs={12} >
            <Typography variant="text">
              © Copyright RSL Soft Tech Pvt.Ltd.. All Rights Reserved
            </Typography>
          </Grid>
          <Grid md={6} xs={12}>
            Designed by RSL Soft Tech Pvt.Ltd.
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
