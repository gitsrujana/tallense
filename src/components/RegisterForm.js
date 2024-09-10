import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Button,
  Typography,
  Card,
  useMediaQuery,

} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { FormControl, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const defaultValues = {
  Full_name: "",
  Email_ID: "",
  Password: "",
  Mobile_number: "",
  current_city: "",
  current_country: "",

};
function RegisterForm() {
  const [loader,setLoader]=useState(true);
  const [allusers,setAllusers]=useState();

  useEffect(()=>{
    axios.post('http://localhost:5001/users/register')
             .then(res=>{
              console.log(res.data);
              setAllusers(res.data);
               setLoader(false);
             })
         .catch()
       },[])
  const mediaViewPort = useMediaQuery("(min-width:600px)");
  const [reviewFormData, setReviewFormData] = useState();
  const form = useForm({ defaultValues });
  const { register, control, handleSubmit, formState, watch } = form;
  const { errors } = formState;
  const navigate=useNavigate()

  const watchShowCountryCheckBox = watch("check_outside_country");

  console.log("watch", watchShowCountryCheckBox);
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const onSubmit = (data, e) => {
    console.log("register", data);
    setReviewFormData(data);
    navigate("/VerifyMobileNumber")
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "whitesmoke",
          width: "100%",
          height: mediaViewPort ? "100%" : "1500px",
        }}
      >
        <Card
          sx={{
            border: "5px solid white",
            borderRadius: 10,
            backgroundColor: "white",
            width: mediaViewPort ? "800px" : "600px",
            height: "100%",
            margin: "5%",
            marginLeft: mediaViewPort ? "23%" : "-2%",
            marginTop: mediaViewPort ? "" : "6%",
          }}
        >
          <Grid container sx={{ margin: "5%" }}>
            <Grid md={6} >
              <Typography
                sx={{
                  fontSize: "13px",
                  marginLeft: "5%",
                  fontWeight: "bold",
                  textAlign: mediaViewPort ? "" : "left",
                  marginTop: mediaViewPort ? "-5%" : "5%",
                }}
              >
                Create your Tallense profile
              </Typography>
              <Typography
                sx={{
                  marginLeft: mediaViewPort ? "5%" : "4%",
                  fontSize: "12px",
                }}
              >
                Search & apply to jobs from India's No.1 Job Site
              </Typography>
            </Grid>
           <Grid md={3}  sx={{
                     marginTop:mediaViewPort?"-4%":"2%",
                     marginLeft:mediaViewPort?"3%":"22%"
                          }}>
            <Typography >continue with </Typography>
           <Button
                sx={{
                  textTransform: "none",
                  backgroundColor: "white",
                  color: "blue",
                  marginLeft: mediaViewPort ? "" : "",
                  
                  fontWeight: "bold",
                  border: "2px solid blue",
                  borderRadius: 5,
                  width: "100px",
                  ":hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <img
                  style={{ marginRight: "10%" }}
                  src="https://static.naukimg.com/s/7/104/assets/images/google-icon.9273ac87.svg"
                  width="15px"
                />
                Google
              </Button>
           </Grid>
            
         
            <FormControl>
              <Grid
                md={3}
                xs={12}
                sm={12}
                sx={{
                  marginTop:mediaViewPort? "5%":"3%",
                  marginLeft:mediaViewPort?"5%":"3%"
                }}
              >
               
                <TextField
                label="FullName"
                  placeholder="what is your name?"
                  id="Full_name"
                  name="Full_name"
                  {...register("Full_name", {
                    required: {
                      value: true,
                      message: "Full name is required",
                    },
                  })}
                  sx={{ width: "500px" }}
                  error={errors?.Full_name?.message}
                  helperText={errors?.Full_name?.message}
                />
              </Grid>
              <Grid
                md={3}
                xs={12}
                sm={12}
                sx={{
                  marginTop: "5%",
                  marginLeft:mediaViewPort?"5%":"3%"
                }}
              >
               
                <TextField
                 label="Email Id"
               placeholder  ="Tell us your Email ID"
                  id="Email_ID"
                  name="Email_ID"
                  {...register("Email_ID", {
                    required: {
                      value: true,
                      message: "Email ID is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message:
                        "You are not on earth. Cities here are named onlu in numbers",
                    },
                  })}
                  sx={{ width: "500px" }}
                  error={errors?.Email_ID?.message}
                  helperText={errors?.Email_ID?.message}
                />
              </Grid>
              <Grid
                md={3}
                xs={12}
                sm={12}
                sx={{
                  marginTop: "5%",
                  marginLeft:mediaViewPort?"5%":"3%"
                }}
              >
               
                <TextField
                label="Password"
                 placeholder ="(Minumum 6 charecters)"
                  id="Password"
                  name="Password"
                  {...register("Password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    // pattern: {
                    //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    //   message: "password should be minimum 6 charecters",
                    // },
                  })}
                  sx={{ width: "500px" }}
                  error={errors?.Password?.message}
                  helperText={errors?.Password?.message}
                />
              </Grid>
              <Grid
                md={3}
                xs={12}
                sm={12}
                sx={{
                  margin: "5%",
                  marginLeft:mediaViewPort?"5%":"3%"
                }}
              >
              
                <TextField
                  label="Mobile No:"
                  placeholder="enter your mobile number"
                  id="Mobile_number"
                  name="Mobile_number"
                  {...register("Mobile_number", {
                    required: {
                      value: true,
                      message: "Mobile numberis required",
                    },
                    // pattern: {
                    //   value: /^(?=.*[0-9])[0-9]{10,10}$/,
                    //   message:
                    //     "You are not on earth. Cities here are named onlu in numbers",
                    // },
                  })}
                  sx={{ width: "500px" }}
                  error={errors?.Mobile_number?.message}
                  helperText={errors?.Mobile_number?.message}
                />
              </Grid>
            </FormControl>
          </Grid>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              marginLeft: "10%",
              marginTop: "-7%",
            }}
          >
            Work status*
          </Typography>
          <Grid container>
            <Card
              sx={{
                width: "250PX",
                height: mediaViewPort ? "120px" : "140px",
                marginLeft: "8%",
                marginTop: "1%",
              }}
            
            >
              <Grid container>
                <Grid md={8} xs={12} sm={12}>
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginTop: "-3%",
                      }}
                    >
                      I'm experienced{" "}
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      I have work experience
                      <br />
                      (excluding internships)
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid md={4} xs={12} sm={12}>
                  <CardMedia
                    sx={{ height: 60, width: "65px", marginTop: "-7%" }}
                    image="https://static.naukimg.com/s/7/104/assets/images/briefcase.bdc5fadf.svg"
                  />
                </Grid>
              </Grid>
            </Card>
           
            <Card
              sx={{
                width: "250PX",
                height: mediaViewPort ? "120px" : "140px",
                marginLeft: "2%",
                marginTop: "1%",
              }}
            >
              <Grid container>
                <Grid md={8} xs={12} sm={12}>
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginTop: "-3%",
                      }}
                    >
                      I'm a fresher{" "}
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      I am a student/ Haven't worked <br />
                      after graduation
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid md={4} xs={12} sm={12}>
                  <CardMedia
                    sx={{ height: 65, width: "65px", marginTop: "-7%" }}
                    image="https://static.naukimg.com/s/7/104/assets/images/schoolbag.a54cbf7a.svg"
                  />
                </Grid>
              </Grid>
        
            </Card>
        
        
    
            <Grid container sx={{ margin: "0%" }}>
              <Grid
                md={4}
                xs={12}
                sm={12}
              
              >
              </Grid>
              <Grid
                md={4}
                xs={12}
                sm={12}
                sx={{
                  marginLeft: mediaViewPort ? "-25%" : "10%",
                  marginTop:mediaViewPort? "1%":"3%",
                }}
              >
                <FormControlLabel
                  {...register("check_outside_country")}
                  control={<Checkbox />}
                  label="Outside India"
                />
              </Grid>
             

              <TextField 
                
              label="Currenty City"
              placeholder="Mention the city you live in"
                id="current_city"
                name="current_city"
                {...register("current_city", {
                  required: {
                    value: true,
                    message: "current city is required",
                  },
                  // pattern: {
                  //   value: /^(?=.*[0-9])[0-9]{10,10}$/,
                  //   message:
                  //     "You are not on earth. Cities here are named onlu in numbers",
                  // },
                })}
                sx={{
                  width: "500px",
                   
                  marginLeft:mediaViewPort?"8%":"10%"
                }}
                error={errors?.current_city?.message}
                helperText={errors?.current_city?.message}
              />
              {watchShowCountryCheckBox ? (
                <Grid
                  md={12}
                  xs={12}
                  sm={12}
                  sx={{
                  
                    marginLeft:mediaViewPort?"8%":"10%"
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: "bold",
                      marginTop: "1%",
                    }}
                  >
                   
                  </Typography>
                  <TextField
                 label="current country"
                    placeholder="current country"
                    id="current country"
                    name="current country"
                    {...register("current_country", {
                      required: {
                        value: true,
                        message: "current country is required",
                      },
                    })}
                    sx={{ width: "500px" }}
                    error={errors?.current_country?.message}
                    helperText={errors?.current_country?.message}
                  />
                </Grid>
              ) : null}
            </Grid>

            <Grid
              md={12}
              xs={12}
              sm={12}
              sx={{
                marginLeft:mediaViewPort? "8%":"10%",
                marginTop: "2%",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Send me important updates & promotions via SMS, email, and WhatsApp"
              />
            </Grid>
            <Typography
              variant="subtitle2"
              sx={{
                marginLeft: "10%",
                marginTop: "10px",
              }}
            >
              By clicking Register, you agree to the Terms and Conditions &
              Privacy Policy of Tallense.com
            </Typography>
          
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "blue",
                color: "white",
                marginLeft: mediaViewPort ? "35%" : "35%",
                marginTop: "10px",
                fontWeight: "bold",
                borderRadius: 5,
                width: "200px",
                ":hover": {
                  backgroundColor: "blue",
                },
              }}
              onClick={handleSubmit(onSubmit)}
            >
              Register now
            </Button>
          
            {/* Review Form data
          <Typography>
            current city:{reviewFormData?.current_city}
          </Typography> */}
          </Grid>
        </Card>
      </Box>
    </>
  );
}

export default RegisterForm;
