import { Box, Button, CssBaseline } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";

import { Grid, Typography } from "@mui/material";
import "../Footer/Footer.css";
import { Link } from "react-scroll";
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





const headings ={
  color: "black", 
  fontWeight: "bold",
  fontSize:"20px"
  
}

const paraAddress ={
  color: "#3C2317",
  fontWeight: "200",
}
const Footer = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <CssBaseline />
      <Box className="allfooter">
      
      <Box>
        <Box className="footer">
          <Grid container>
            <Grid  md={3} xs={12} sx={{ p: "3%", }}>
              <Typography
                variant="h5"
                sx={headings}
              >
                RSL Soft Tech Pvt.Ltd.
              </Typography>
          

              <List component="nav"   aria-label="primary mailbox folder">
                  <ListItemText sx={{color:"black"}}>
                  
                   114,115 Milinda Manor RNT Marg Indore (MP), India
               
                    
                  </ListItemText>
                  <ListItemText sx={{color:"black"}}>
                  
                  Phone: +918839087102
              
                   
                 </ListItemText>
                 <ListItemText sx={{color:"black"}}>
                  
                 Phone: +918878086055
              
                   
                 </ListItemText>
                  </List>
             
              
            </Grid>
            <Grid md={3} className="address" xs={12} sx={{ pt: "3%",pl:"5px" }}>
              <Box  sx={{ width: "100%", maxWidth: 360,textAlign:"start" }}>
                <Typography variant="h5" sx={headings}>
                  Usefull Links
                </Typography>
                <List component="nav"   aria-label="primary mailbox folder">
                  <ListItemText sx={{color:"white"}}>
                   <Link sx={{color:"white"}} className="afooter" to="home">
                      Home
                    </Link>
                    
                  </ListItemText>
                  <ListItemText sx={{color:"white"}}>
                    <Link sx={{color:"white"}} className="afooter" to="about">
                      About us
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="services">
                      Services
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" to="portfolio">
                      Portfolio
                    </Link>
                  </ListItemText>
                                  
                  <ListItemText>
                    <Link className="afooter" to="contact">
                      Contact
                    </Link>
                  </ListItemText>
                </List>
              </Box>
            </Grid>
            <Grid md={2} xs={12} sx={{ pt: "3%",pl:"5px" }}>
              <Box sx={{ width: "100%", maxWidth: 360 }}>
                <Typography variant="h5" sx={headings}>
                  Our Services
                </Typography>
                <List component="nav" aria-label="secondary mailbox folder">
                  <ListItemText>
                    <Link className="afooter"  >
                      Android Development
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter"  >
                      IOS Development
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter"  >
                      Web Design
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" >
                      Web Development
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" >
                      Graphic Design
                    </Link>
                  </ListItemText>
                  <ListItemText>
                    <Link className="afooter" >
                      QA Solurion
                    </Link>
                  </ListItemText>
                 
                </List>
              </Box>
            </Grid>

            <Grid  md={4} xs={12} sx={{ p: "3%", }}>
              <Typography
                variant="h5"
                sx={headings}
              >
                 Get in touch
              </Typography>
          

              <List component="nav"   aria-label="primary mailbox folder">
                  <ListItemText sx={{color:"black"}}>
                  
                  Email : contact@rslsofttech.com
               
                    
                  </ListItemText>
                  <ListItemText sx={{color:"black"}}>
                  
                  Email : hr@rslsofttech.com
              
                   
                 </ListItemText>
                 
                 
                 
                  </List>
             
              
            </Grid>

         
          </Grid>
          <Box sx={{pb:"2%",pt:"2%"}} >
        <Box  className="afterfooter" >
        <Grid container>
          <Grid md={6}className="webkit-footer" xs={12} >
            <Typography variant="text"  sx={paraAddress}>
              © Copyright RSL Soft Tech Pvt.Ltd. All Rights Reserved
            </Typography>
          </Grid>
          <Grid md={6} className="webkit-footer" xs={12}>
          <Typography variant="text"  sx={paraAddress}>
          Designed by RSL Soft Tech Pvt.Ltd.

            </Typography>
          </Grid>
        </Grid>
        </Box>
      </Box>
        </Box>
      </Box>
      
      
      </Box>
    </>
  );
};

export default Footer;
