import { Box, Grid, FormControl,TextField,Typography ,Button, useMediaQuery} from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import EducationDetails from './EducationDetails'

function VerifyMobileNumber() {
   // const navigate=useNavigate()
    const mediaViewPort=useMediaQuery("(min-width:600px)")
   //  navigate("/EducationDetails")
  return (
    <>
      
 <Box sx={{
        width:mediaViewPort?"40%":"80%",
        height:"300px",
       border:"2px solid white",
   backgroundColor:"white",
   marginLeft:mediaViewPort?"30%":"10%",
   marginTop:mediaViewPort?"5%":"20%"

      }}>
 <Typography sx={{marginLeft:"5%",
    fontWeight:"bold",
    marginTop:"5%"
 }}>
    verify mobile number
 </Typography>
 <Typography  sx={{marginLeft:"5%",
    marginTop:"2%"
 }}>
    Tallenzz just sent a text message with verification code to +91 9603151561
 </Typography>
 

 <FormControl>
            <Typography sx={{display:"flex",
            marginLeft:mediaViewPort?"15%":"5%",
            marginTop:"30px"
      
        }}>
            <Grid md={2} xs={12} sm={6}>
            <TextField 
            sx={{width:"50PX",
            border:"2px solid gray ",
        borderRadius:"10PX",
        margin:"5px"
        }}
        /> </Grid>
        <Grid md={2} xs={12} sm={6}>
         <TextField 
            sx={{width:"50PX",
            border:"2px solid gray",
        borderRadius:"10PX",
        margin:"5px"
        }}
        /> </Grid>
        <Grid md={2} xs={12} sm={6}>
         <TextField 
            sx={{width:"50PX",
            border:"2px solid gray",
        borderRadius:"10PX",
        margin:"5px"
        }}
        /> </Grid>
        <Grid md={2} xs={12} sm={6}>
         <TextField 
            sx={{width:"50PX",
            border:"2px solid gray",
        borderRadius:"10PX",
        margin:"5px"
        }}
        /> </Grid>
       </Typography>
        </FormControl>
        <Typography variant='subtitle2' sx={{marginLeft:"7%",
            marginTop:"2%"
        }}>
        your OTP should arrive in --seconds
       </Typography>
       <NavLink to={'/EducationDetails'}>
       <Button
       sx={{
        textTransform:"none",
        backgroundColor:"blue",
        color:"white",
        marginTop:"2%",
        marginLeft:"10%",
        border:"2px solid white",
        borderRadius:2,
        width:"10p%",
        ":hover":{
            backgroundColor:"blue"
        }
        }}
     >verify OTP</Button></NavLink>
 </Box>

     
   
    </>
  )
}

export default VerifyMobileNumber
