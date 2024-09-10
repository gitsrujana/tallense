import React from 'react'
import { Form, NavLink } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import { Box, Grid, Button, Typography,FormControl,TextField, useMediaQuery} from "@mui/material";

function OtpInput() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
        const { register, control, handleSubmit } = Form;
    const onSubmit = (data = {  }) => {
        console.log("form submitted", data);
      };
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
    
  return (
<>
<Box
sx={{
    border:"2px solid gray",
    backgroundColor:"white",
    width:mediaViewPort?"26%":"90%",
    height:"300px",
    marginTop:mediaViewPort?"10%":"18%",
    marginLeft:mediaViewPort?"35%":"5%"
  
}}>
     <Grid container sx={{marginTop:mediaViewPort?"5%":"10%"}} >
<Grid md={12} xs={12} sm={6}>
    <Typography sx={{
        fontSize:"15px",
        fontWeight:"bold",
        marginLeft:"7%"
    }}>
    Enter the OTP sent to
    </Typography>
    <Typography
    sx={{
        fontSize:"15px",
        fontWeight:"bold",
        marginLeft:"7%"
    }}>
    
    +91 9563217891
    </Typography>
    </Grid>
        <FormControl>
            <Typography sx={{display:"flex",
            marginLeft:"4%",
            marginTop:"30px"
      
        }}>
            <Grid md={2} xs={12} sm={6}>
            <TextField 
            sx={{width:"40PX",
            border:"2px solid gray",
        borderRadius:"10PX",
        margin:"5px"
        }}
        /> </Grid>
        <Grid md={2} xs={12} sm={6}>
         <TextField 
            sx={{width:"40PX",
            border:"2px solid gray",
        borderRadius:"10PX",
        margin:"5px"
        }}
        /> </Grid>
        <Grid md={2} xs={12} sm={6}>
         <TextField 
            sx={{width:"40PX",
            border:"2px solid gray",
        borderRadius:"10PX",
        margin:"5px"
        }}
        /> </Grid>
        <Grid md={2} xs={12} sm={6}>
         <TextField 
            sx={{width:"40PX",
            border:"2px solid gray",
        borderRadius:"10PX",
        margin:"5px"
        }}
        /> </Grid>
        <Grid md={2} xs={12} sm={6}>
         <TextField 
            sx={{width:"40PX",
            border:"2px solid gray",
        borderRadius:"10PX",
        margin:"5px"
        }}
        /> </Grid>
        <Grid md={2} xs={12} sm={6}>
         <TextField 
            sx={{width:"40PX",
            border:"2px solid gray",
        borderRadius:"10PX",
        margin:"5px"
        }}
        /> </Grid>
        </Typography>
        </FormControl>
        
        <Grid md={10} xs={12} sm={6}>
        <Typography
        sx={{
            fontSize:"15px",
            marginLeft:"8%"
        }}
        >
        Didn't receive it?<Button
         sx={{
            textTransform:"none"
            }}>Resend OTP</Button>
        </Typography>
        </Grid>
     </Grid>
     <NavLink to={'/LandingPage'}>
     <Button
       sx={{
        textTransform:"none",
        backgroundColor:"gray",
        color:"white",
        marginLeft:"10%",
        marginTop:"5%",
        width:"300px",
        ":hover":{
            backgroundColor:"blue"
        }
        }}
     >verify OTP</Button>
     </NavLink>
</Box>
     </>
  )
}

export default OtpInput
