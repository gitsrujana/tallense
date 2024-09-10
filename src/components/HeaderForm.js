import { Button, FormControl, Grid, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { Form, useForm, useFormState } from 'react-hook-form';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';



let renderCount= 0;
const defaultValues={
  firstname:"",
  surname:"",
  city:"",
  country:"",
  pincode:"",
  mobile:"",
  email:"",
}
function HeaderForm() {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  const form = useForm({ defaultValues });
  const { errors } = useFormState;
  const {register,handleSubmit}=form;
  renderCount++;
  const navigate=useNavigate()
  
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
  const onSubmit=(data,e)=>{
    console.log("register", data);
  
    navigate("/AddExperiance")
  };
 
  return (

    <>
      
    <Typography sx={{fontSize:"30px",fontWeight:"bold",marginLeft:"7%",fontWeight:"bold",marginTop:mediaViewPort?"5%":"15%"}}>
    "Let's start by reviewing your title section."
    </Typography>

    
    <Typography sx={{marginLeft:"8%"}}>
    Don't forget to add your complete name and a way for employers to get in touch with you.
    </Typography>
  
 
  
<FormControl>
<Grid container sx={{marginLeft:mediaViewPort?"25%":"5%"}}>
                <Grid item md={6} xs={12}>
                  <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    //InputLabelProps={{style: {fontSize:12, color:"blue"}}} // font size of input label
                    variant="outlined"
                    margin="normal"
                    label="First Name"
                    id="firstname"
                    name="firstname"
                    {...register("firstname", {
                      required: {
                        value: true,
                        message: "first name is required"
                      },
                    })}
                    error={errors?.firstname?.message}
                    helperText={errors?.firstname?.message}
                  />

                </Grid>
                <Grid md={6} xs={12}>
                  <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    label="Surname"
                    variant="outlined"
                    margin="normal"
                    id="surname"
                    name="surname"
                    {...register("surname", {
                      required: {
                        value: true,
                        message: "surname is required"
                      },
                    }
                    )}
                    error={errors?.surname?.message}
                    helperText={errors?.surname?.message}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{marginLeft:mediaViewPort?"25%":"5%"}}>
                <Grid item md={6} xs={12}>
                  <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    label="Email"
                    id="email"
                    name="email"
                    variant="outlined"
                    margin="normal"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required"
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format",
                      },
                    })}
                    error={errors?.email?.message}
                    helperText={errors?.email?.message}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    label="mobile"
                    id="mobile"
                    name="mobile"
                    {...register("mobile", {
                      required: {
                        value: true,
                        message: "Mobile number is required"
                      },
                      pattern: {
                        value: /^(?=.*[0-9])[0-9]{10,12}$/,
                        message: "Enter a valid mobile number"
                      }
                    })}
                    error={errors?.mobile?.message}
                    helperText={errors?.mobile?.message}
                  />
                </Grid>
              </Grid>
         
         <Grid container sx={{marginLeft:mediaViewPort?"25%":"5%"}}>
          <Grid item md={6} sm={12}>
            <TextField
            sx={{width:"98%"}}
            fullWidth
            variant='outlined'
            margin='normal'
            id='city'
            label='City'
            name='city'
            {...register("city")}
            />
          </Grid>
      
          <Grid item md={3} sm={12}>
          <TextField
            sx={{width:"98%"}}
            fullWidth
            variant='outlined'
            margin='normal'
            id='country'
            label='Country'
            name='country'
            {...register("country")}
            />
          </Grid>
          <Grid item md={3} sm={12}>
          <TextField
            sx={{width:"98%"}}
            fullWidth
            variant='outlined'
            margin='normal'
            id='pincode'
            label='Pincode'
            name='pincode'
            {...register("pincode")}
            />
          </Grid>
         </Grid>
        <Stack direction='row'>
         <Button sx={{marginLeft:mediaViewPort?"30%":"5%",marginTop:"10%",
          border:"2px solid gray",
          borderRadius:5,
          width:"20%",
          color:"black"
         }}>BACK</Button>
       
      
         <Button sx={{marginLeft:mediaViewPort?"15%":"5%",marginTop:"10%",
          border:"2px solid blue",
          borderRadius:5,
          width:"20%",
          color:"white",
          backgroundColor:"blue",
          ":hover":{
            backgroundColor:"blue",
          }
         }}
        onClick={handleSubmit(onSubmit)}
            
         >continue</Button>
        </Stack>
</FormControl>



      
    </>
  )
}

export default HeaderForm
