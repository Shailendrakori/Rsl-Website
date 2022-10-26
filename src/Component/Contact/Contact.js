import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "../Contact/Contact.css";
// map
import { Map, GoogleApiWrapper } from "google-maps-react";
const mapStyles = {
  width: "90px",
  height: "96px",
  // marginTop:"2%",
  // position:"none"
};

const theme = createTheme();

const Contact = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Box id="contact" sx={{mb:"4%"}}>
        <Grid container>
          <Grid md={12} sx={{ marginTop: "1%" }} xs={12}>
            <Typography
              className="heading-all"
              variant="h5"
              sx={{ color: "black", textAlign: "center" }}
            >
              Contact Us
            </Typography>
          </Grid>

          <Grid md={3} xs={12}></Grid>

          <Grid md={6} xs={12}>
            <Typography variant="text" sx={{ color: "black", margintop: "1%" }}>
              <Box className="paragraph-all" sx={{ textAlign: "center" }}>
                You are always welcome to contact us if you have questions or
                need help or guidance.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <div className="container ">
        <div className="row">
          <div className="col-md-8 col-xs-6 ">
            <div
              // id="map-container-google-10"
              // className="z-depth-1-half map-container-7"
              style={{textAlign:"center"}}
            >
              <iframe
                src="https://maps.google.com/maps?q=new%20delphi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                style={{ border: 0,height:"350px" ,widht:"100%" }}
                className="map"
                allowFullScreen
              />
            </div>
            {/* <Map
              google={props.google}
             https://goo.gl/maps/thJf1ZvC9Ae4oH9HA
          zoom={14}
          style={mapStyles}
              initialCenter={{
                lat: 22.719052770109073,
                lng: 75.87230379369404,
              }}
            /> */}
            <div className="row pt-4">
              <div className="col-md-4  col-xs-12 address ">
                <div classname="card p-5  card-address">
                  <i class="bi bi-geo-alt ico"></i>
                  <h4 style={{ paddingTop: "4%" }}>Our Address</h4>
                  <p>114,115 Milinda Manor RNT Marg Indore (MP), India</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 address ">
                <div classname="card p-3  card-address">
                  <i class="bi bi-envelope ico"></i>
                  <h4 style={{ paddingTop: "4%" }}>Email Us</h4>
                  <p>contact@rslsofttech.com</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 address ">
                <div classname="card p-3 card-address ">
                  <i class="bi bi-telephone-fill ico"></i>
                  <h4 style={{ paddingTop: "4%" }}>Call Us</h4>
                  <p>+918839087102</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-4 col-xs-12  "
            style={{ marginTop: "2%", marginBottom: "2%" }}
          >
            <div
              className="card p-3"
              
            >
              <form
                id="contact-form"
                method="post"
                action="contact.php"
                role="form"
              >
                <div className="messages" />
                <div className="controls">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mt-3">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Please enter your fullname *"
                          required="required"
                          data-error="Fullname is required."
                        />
                        <div className="help-block with-errors" />
                      </div>

                      <div className="form-group mt-3">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Please enter your email *"
                          required="required"
                          data-error="Valid email is required."
                        />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group mt-3">
                        <input
                          id="form_phone"
                          type="number"
                          name="phone"
                          className="form-control"
                          placeholder="Please enter your phone"
                        />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group mt-3">
                       
                       <input
                         id="form_lastname"
                         type="file"
                         name="surname"
                         className="form-control"
                         placeholder="Please enter your lastname *"
                         required="required"
                         data-error="Lastname is required."
                       />
                       <div className="help-block with-errors" />
                     </div>
                        <div className="form-group mt-3">
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Message for me *"
                          rows={4}
                          required="required"
                          data-error="Please,leave us a message."
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                      <div
                      className="col-md-12 mt-2"
                      style={{ textAlign: "center" }}
                    >
                      <input
                        type="submit"
                        className="btn btn-light btn-send"
                        defaultValue="Send message"
                      />
                    </div>
                    </div>
                  </div>
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default Contact;
export default GoogleApiWrapper((props) => ({
  apiKey: props.apiKey,
}))(Contact);
