import React, { useState } from "react";
import axios from "axios";
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
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  // api part

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const data = {
    name: name,
    email: email,
    file: file,
    phone: phone,
    text: text,
  };
//  sir me de rha hu url firse a2 ho done sir vo api me error aa rhi he ha me bhi vahi bol raha hu obackend valo ki trf se aa rhi h vo shi krke denege tab me apko batata hun a ha baki aap  code kr do sab done he kaconsujhe jana he thoda bahconsole ki jgh kya  krna he ok sir 

  const getData = (e) => {
    axios
      .post("https://3dda-122-168-104-110.in.ngrok.io/get_data", data)
      .then(function (response) {
        console.log(response); // sir yha par data kese mtlb kese aayega gmail par co
        alert('Succsess')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // end api part
  return (
    <>
      <Box id="contact" sx={{ mb: "1%" }}>
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
            <Typography variant="text" sx={{ color: "black" }}>
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
          <div className="col-md-1 col-xs-10"> </div>
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
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="row pt-4">
                  <div className="col-md-4  col-xs-12 address-contact ">
                    <div classname="card-contact p-5  card-address">
                      <i class="bi bi-geo-alt ico-contact"></i>
                      <h4 style={{ paddingTop: "8%" }}>Our Address</h4>
                      <p>114,115 Milinda Manor RNT Marg Indore (MP), India</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-xs-12 address-contact ">
                    <div classname="card-contact p-3  card-address">
                      <i class="bi bi-envelope ico-contact"></i>
                      <h4 style={{ paddingTop: "8%" }}>Email Us</h4>
                      <p>contact@rslsofttech.com</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-xs-12 address-contact ">
                    <div classname="card-contact p-3 card-address ">
                      <i class="bi bi-telephone-fill ico-contact"></i>
                      <h4 style={{ paddingTop: "8%" }}>Call Us</h4>
                      <p>+918839087102</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-contact col-md-4 col-xs-12"
                style={{ textAlign: "center" }}
              >
                <div className=" p-2">
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
                          <div className="form-group  icon-right-form-contact">
                            <i class="fas fa-user prefix grey-text iconf-contact"></i>
                            <input
                              type="text"
                              name="name"
                              className=" input-form-contact"
                              placeholder="Your name"
                              required="required"
                              data-error="Fullname is required."
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                            />
                            <div className="help-block with-errors" />
                          </div>

                          <div className="form-group  icon-right-form-contact">
                            <i class="fas fa-envelope prefix grey-text iconf-contact"></i>{" "}
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className=" input-form-contact"
                              placeholder="Your email"
                              required="required"
                              data-error="Valid email is required."
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group  icon-right-form-contact">
                            <i class="bi bi-telephone-fill iconf-contact"></i>
                            <input
                              id="form_phone"
                              type="number"
                              name="phone"
                              className="input-form-contact"
                              placeholder="Your phone number"
                              onChange={(e) => setPhone(e.target.value)} //ye same sab me kar dena jo jo field he
                              value={phone}
                              
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group  icon-right-form-contact">
                            <i class="bi bi-file-earmark-person-fill iconf-contact"></i>{" "}
                            <input
                              id="form_lastname"
                              type="file"
                              name="surname"
                              className=" input-form-contact"
                              required="required"
                              data-error="Lastname is required."
                              onChange={(e) => setFile(e.target.value)} //ye same sab me kar dena jo jo field he
                              value={file}
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="form-group  icon-right-form-contact">
                            <i class="fas fa-pencil-alt prefix grey-text iconf-contact"></i>
                            <textarea
                              id="form_message"
                              name="message"
                              className=" input-form-contact"
                              placeholder="Message for me *"
                              rows={4}
                              required="required"
                              data-error="Please,leave us a message."
                              onChange={(e) => setText(e.target.value)} //ye same sab me kar dena jo jo field he
                              value={text}
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div
                            className="col-md-12 mt-5"
                            style={{ textAlign: "center" }}
                          >
                            <input
                              onClick={() => getData()}
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
      </div>
    </>
  );
};

export default Contact;
