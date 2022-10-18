import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box, CssBaseline } from "@mui/material";

import "../Testimonials/Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <Box className="testimonial_slider_2">
        <input type="radio" name="slider_2" id="slide_2_1" defaultChecked />
        <input type="radio" name="slider_2" id="slide_2_2" />
        {/* <input type="radio" name="slider_2" id="slide_2_3" />
        <input type="radio" name="slider_2" id="slide_2_4" /> */}
        <Box className="boo_inner clearfix">
          <Box className="slide_content">
            <Box className="testimonial_2">
              <Box className="image-md"></Box>
              <Box className="author_2">
                <h3>Lokesh Panchal</h3>
              </Box>
              <Box className="content_2">
                <p>
                  “Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work. And the only way to do great work is to love what
                  you do.”
                </p>
              </Box>
            </Box>
          </Box>
          <Box className="slide_content">
            <Box className="testimonial_2">
              <Box className="image-hr"></Box>
              <Box className="author_2">
                <h3>Sweta Panchal</h3>
              </Box>
              <Box className="content_2">
                <p>
                  “You don’t need to be a genius or a visionary, or even a
                  college graduate for that matter, to be successful. You just
                  need framework and a dream.”
                </p>
              </Box>
            </Box>
          </Box>

          {/* <Box className="slide_content">
            <Box className="testimonial_2">
              <Box className="content_2">
                <p>
                  The messenger is the message, and in this very good book, we
                  find important messages that sadden, excite and affirm us as
                  people who celebrate both our sexuality and our spirituality.
                  Unitarian Universalists should feel very proud of having
                  created a safe harbor for those discarded by others, and also
                  challenged to work harder to make its culture more welcoming
                  and inclusive.
                </p>
              </Box>
              <Box className="author_2">
                <h3>Brian McNaught</h3>
                <h4>
                  Author of <i>Gay Issues in the Workplace</i>
                </h4>
              </Box>
            </Box>
          </Box>
          <Box className="slide_content">
            <Box className="testimonial_2">
              <Box className="content_2">
                <p>
                  These personal stories will persuade even the most cynical
                  that religion can be a force that is fully accepting and
                  transforming. Indeed, the fulfillment of religion’s true
                  promise is found among those who have courageously spoken
                  here.
                </p>
              </Box>
              <Box className="author_2">
                <h3>Lee Barker</h3>
                <h4>
                  President and Professor of Ministry, Meadville Lombard
                  Theological School
                </h4>
              </Box>
            </Box>
          </Box> */}
        </Box>
        <Box id="controls">
          <label htmlFor="slide_2_1" />
          <label htmlFor="slide_2_2" />
          {/* <label htmlFor="slide_2_3" />
          <label htmlFor="slide_2_4" /> */}
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
