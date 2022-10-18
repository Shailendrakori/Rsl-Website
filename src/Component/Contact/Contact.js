import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';














const theme = createTheme();


const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
      {/* <CssBaseline /> */}
            <Box id="contact" >

                <Grid container >

                    <Grid md={12} sx={{ marginTop: "1%" }} xs={12}>
                        <Typography className="heading-all" variant="h5" sx={{ color: "black", textAlign: "center", }}>
                            Contact Us
                        </Typography>
                    </Grid>
                  
               
               
                    <Grid md={3} xs={12} ></Grid>
                  
                    <Grid md={6} xs={12} >
                        
                        <Typography variant="text" sx={{ color: "black",margintop:"1%", }}>
                        <Box className="paragraph-all" sx={{ textAlign: "center" }}>
                             You are always welcome to contact us if you have questions or need help or guidance.
                             </Box>
                        </Typography>
                  
                    
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid md={6} xs={12}>
                       
                    </Grid>
                    <Grid md={6} sx={{p:"5%"}} xs={12}>
                        <ThemeProvider theme={theme}>
                            <Container component="main" maxWidth="xs">
                          
                                <Box
                                    sx={{
                                        marginTop: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >

                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="Name"
                                                    required
                                                    fullWidth
                                                    id="Name"
                                                    label=" Name"
                                                  
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label="Email Address"
                                                    name="email"
                                                    autoComplete="email"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="number"
                                                    label="Number"
                                                    type="number"
                                                    id="number"
                                                    autoComplete="new-password"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextareaAutosize
                                                    maxRows={4}
                                                    required
                                                    fullWidth
                                                    aria-label="maximum height"
                                                    // placeholder="Maximum 4 rows"
                                                    defaultValue=""
                                                    style={{ width: 400, height: "100px" }}
                                                />
                                            </Grid>

                                        </Grid>
                                        <Button
                                            type="submit"
                                          
                                            variant="contained"
                                            sx={{ mt: 2, mb: 2,width:"40%",backgroundColor:"black" }}
                                        >
                                            Send Message
                                        </Button>
                                       
                                    </Box>
                                </Box>

                            </Container>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </Box>



        </>
    );
}

export default Contact;
