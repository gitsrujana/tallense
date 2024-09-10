import { Box, Card, Stack, TextField, Typography ,Button, useMediaQuery} from '@mui/material'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
const defaultValues={

    mobile_number:""
}

function EmployeeMobileVerification() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
    const form=useForm({defaultValues})
    const {register,handleSubmit}=form;
    const Navigate=useNavigate()
    const onSubmit=(data,e)=>{
        console.log("register", data);
        Navigate('/EmployerOtpInput')
    }    
  return (
    <>
      <Box sx={{
        width:mediaViewPort?"50%":"80%",
        height:"100%",
        border:"2px solid gray",
        marginLeft:"10%",
        border:"2px solid whitesmoke",
        borderRadius:"15px",
        marginTop:mediaViewPort?"5%":"20%"
      }}>
         <Typography sx={{fontSize:"20px",fontWeight:"bold",marginLeft:"5%",marginTop:"5%"}}>
         Verify your phone number
            </Typography> 
            <Typography sx={{marginTop:"2%",marginLeft:"5%"}}>
            To proceed, kindly enter your mobile number for verification.
            </Typography>
          
           <TextField
           sx={{marginTop:"3%",marginLeft:"5%"}}
           label="Mobile number"
           placeholder=' Enter your mobile number'
           id='mobile_number'
           {...register("mobile_number")}
           />
           <Typography variant='subtitle2' sx={{marginTop:"1%",marginLeft:"5%"}}>
           We will send a verification code to this number
           </Typography>
           <Button sx={{marginLeft:mediaViewPort?"5%":"5%",marginTop:"2%",
          border:"2px solid gray",
              marginBottom:"5%",
          width:mediaViewPort?"30%":"60%",
          color:"white",
           textTransform:"lowercase",
          backgroundColor:"green",
          ":hover":{
            backgroundColor:"green",
           
          }
         }}
         onClick={handleSubmit(onSubmit)}
     
         >send verification code</Button>
      </Box>
    </>
  )
}

export default EmployeeMobileVerification
