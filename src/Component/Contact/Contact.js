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
      <Box id="contact" sx={{ mb: "4%" }}>
        <Grid container>
          <Grid md={12} sx={{ marginTop: "1%" }} xs={12}>
            <Typography
              className="heading-contact"
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

      <div className="container mb-5">
        <div className="row ">
        <div className="col-md-1 col-xs-10">  </div>
          <div className="col-md-10 col-xs-10 card-contact ">
            <div className="row">
              <div className="col-md-8 col-xs-12">
                <div
                  id="map-container-google-10"
                  className="z-depth-1-half map-container-7"
                  style={{ textAlign: "center" }}
                >
                 
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2644254629445!2d75.87022971418972!3d22.718411033329783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdafbd9cfb87%3A0x850ef5f2eda7b441!2sRSL%20SOFT%20TECH%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1666768502013!5m2!1sen!2sin"
                    // className="map"
                    height={400}
                    style={{ border: 0,width:"100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                
            <div className="row pt-4">
              <div className="col-md-4  col-xs-12 address-contact ">
                <div classname="card-contact p-5  card-address">
                  <i class="bi bi-geo-alt ico-contact"></i>
                  <h4 style={{ paddingTop: "4%" }}>Our Address</h4>
                  <p>114,115 Milinda Manor RNT Marg Indore (MP), India</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 address-contact ">
                <div classname="card-contact p-3  card-address">
                  <i class="bi bi-envelope ico-contact"></i>
                  <h4 style={{ paddingTop: "4%" }}>Email Us</h4>
                  <p>contact@rslsofttech.com</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 address-contact ">
                <div classname="card-contact p-3 card-address ">
                  <i class="bi bi-telephone-fill ico-contact"></i>
                  <h4 style={{ paddingTop: "4%" }}>Call Us</h4>
                  <p>+918839087102</p>
                </div>
              </div>
            </div>
              </div>
              <div
                className="card-contact col-md-4 col-xs-12"
                style={{ textAlign: "center" }}
              >
                <div className=" p-2" >
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
                          <div
                            className="form-group  icon-right-form-contact"
                           
                          >
                            <i class="fas fa-user prefix grey-text iconf-contact"></i>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className=" input-form-contact"
                              placeholder="Your name"
                              required="required"
                              data-error="Fullname is required."
                            />
                            <div className="help-block with-errors" />
                          </div>

                          <div
                            className="form-group  icon-right-form-contact"
                           
                          >
                            <i class="fas fa-envelope prefix grey-text iconf-contact"></i>{" "}
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className=" input-form-contact"
                              placeholder="Your email"
                              required="required"
                              data-error="Valid email is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div
                           className="form-group  icon-right-form-contact"
                           
                          >
                            <i class="bi bi-telephone-fill iconf-contact"></i>
                            <input
                              id="form_phone"
                              type="number"
                              name="phone"
                              className="input-form-contact"
                              placeholder="Your phone number"
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div
                          className="form-group  icon-right-form-contact"
                           
                          >
                            <i class="bi bi-file-earmark-person-fill iconf-contact"></i>{" "}
                            <input
                              id="form_lastname"
                              type="file"
                              name="surname"
                              className=" input-form-contact"
                              required="required"
                              data-error="Lastname is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div
                            className="form-group  icon-right-form-contact"
                           
                          >
                            <i class="fas fa-pencil-alt prefix grey-text iconf-contact"></i>{" "}
                            <textarea
                              id="form_message"
                              name="message"
                              className=" input-form-contact"
                              placeholder="Message for me *"
                              rows={4}
                              required="required"
                              data-error="Please,leave us a message."
                              defaultValue={""}
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div
                            className="col-md-12 mt-5"
                            style={{ textAlign: "center" }}
                          >
                            <input
                              type="submit"
                              className="btn-contact btn-light btn-send"
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
        </div>
        {/* <div className="row">
          <div className="col-md-2 col-xs-12"></div>
          <div className="col-md-9 col-xs-8 ">
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
        </div> */}
      </div>

      {/* 
      <div className="container ">
        <div className="row">
          <div className="col-md-8 col-xs-6 ">
            <div
              id="map-container-google-10"
              className="z-depth-1-half map-container-7"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2644254629445!2d75.87022971418972!3d22.718411033329783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdafbd9cfb87%3A0x850ef5f2eda7b441!2sRSL%20SOFT%20TECH%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1666768502013!5m2!1sen!2sin"
                frameBorder={0}
                style={{ border: 0, height: "350px" }}
                className="map"
                allowFullScreen
              />
            </div>

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
            <div className="card p-3">
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
                          className="form-control input-form-contact"
                          placeholder="Your name"
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
                          className="form-control input-form-contact"
                          placeholder="Your email"
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
                          className="form-control input-form-contact"
                          placeholder="Your phone number"
                        />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group mt-3">
                        <input
                          id="form_lastname"
                          type="file"
                          name="surname"
                          className="form-control input-form-contact"
                          required="required"
                          data-error="Lastname is required."
                        />
                        <div className="help-block with-errors" />
                      </div>
                      <div className="form-group mt-3">
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control input-form-contact"
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
      </div> */}
    </>
  );
};

export default Contact;
