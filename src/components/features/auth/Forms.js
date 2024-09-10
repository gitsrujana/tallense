import React, { useState } from "react";
import { Box, Grid, Button, Typography, Card, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormControl, TextField, Checkbox } from "@mui/material";
import { useForm } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import { NavLink } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
let renderCount = 0;
const defaultValues = {
  PhoneNumber: "",
}

function Forms() {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  const form = useForm({ defaultValues });
  const { register, control, handleSubmit } = form;
  

 

  return (
   
    <Box
    sx={{
    
      backgroundColor:"",
      width:mediaViewPort?"100%":"100%",
      height:"100%",
    marginTop:mediaViewPort?"10%":"20%",
  
    
  }}
    >      
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: "bold",
          textAlign:"center"
        }}
      >
        continue with mobile
      </Typography>
      
    
        <FormControl sx={{marginLeft:mediaViewPort?"40%":"7%"}}>
        
          <TextField
            sx={{  width: "100%" ,
          justifyContent:"center"
            }}
            fullWidth
            label="phonenumber"
            {...register("PhoneNumber")}
            variant="outlined"
            margin="normal"
      />
          
          <FormControlLabel
            sx={{
          
            }}
            control={<Checkbox defaultChecked />}
            label="I agree to the privacy terms &conditions"
          />
           </FormControl>
           <br/>
           <NavLink to={'/OtpInput'}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "gray",
              fontWeight: "bold",
              width:mediaViewPort? "15%":"50%",
             textTransform: "none",
              marginTop: "15px",
              marginLeft:mediaViewPort?"43%":"25%",
      
              ":hover":{
                backgroundColor:"blue"
            }
            }}
          >
           
            sendOTP
          </Button>
          </NavLink>
       
    
    </Box>
    
    
  );
}

export default Forms;
