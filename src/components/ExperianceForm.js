import { Button, Checkbox, FormControl, FormControlLabel, Grid, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import React, { useContext } from 'react'
import {  useForm, useFormState } from 'react-hook-form';
import styled from 'styled-components';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';

let renderCount=0;
const defaultValues={
jobtitle:"",
employer:"",
city:"",
country:"",
start_date:"",
end_date:"",
}

function ExperianceForm() {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  const form = useForm({ defaultValues });
  const { errors } = useFormState;
  const {register,handleSubmit}=form;
renderCount++;
  const navigate=useNavigate()
  const navigate1=useNavigate()
  const onSubmit=(data,e)=>{
    console.log("register",data);
    navigate('/AddEducation')
   
  }
  const onsubmit=(_data)=>{
    navigate1('/AddExperiance')
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
      
    <Typography sx={{fontSize:"30px",fontWeight:"bold",marginLeft:"6%",fontWeight:"bold",marginTop:mediaViewPort?"5%":"15%"}}>
    " let’s include your professional experience."
    </Typography>

    
    <Typography sx={{marginLeft:"6%"}}>
    "Begin with your current or latest job."
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
                    label="job title"
                    id="jobtitle"
                    name="jobtitle"
                    {...register("jobtitle", {
                      required: {
                        value: true,
                        message: "job title is required"
                      },
                    })}
                    error={errors?.jobtitle?.message}
                    helperText={errors?.jobtitle?.message}
                  />

                </Grid>
                <Grid md={6} xs={12}>
                  <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    label="employer"
                    variant="outlined"
                    margin="normal"
                    id="employer"
                    name="employer"
                    {...register("employer", {
                      required: {
                        value: true,
                        message: "employer is required"
                      },
                    }
                    )}
                    error={errors?.employer?.message}
                    helperText={errors?.employer?.message}
                  />
                </Grid>
              </Grid>
             
         
         <Grid container sx={{marginLeft:mediaViewPort?"25%":"5%"}}>
          <Grid item md={6} xs={12}>
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
      
          <Grid item md={6} sm={12}>
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
       
         </Grid>
         <Grid container sx={{marginLeft:mediaViewPort?"25%":"5%"}}>
                <Grid item md={5.9} xs={12}>
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Start Date" />
      </DemoContainer>
    </LocalizationProvider>
            
                </Grid>
                <Grid item md={5.9} xs={12} sx={{marginLeft:"1%"}} >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="End Date" />
      </DemoContainer>
    </LocalizationProvider>
                </Grid>
              </Grid>
       <FormControlLabel sx={{marginLeft:"23%",marginTop:"3%"}} control={<Checkbox  />} label="I  currently work here" />
        <Stack direction='row'>

         <Button sx={{marginLeft:mediaViewPort?"30%":"5%",marginTop:"10%",
          border:"2px solid gray",
          borderRadius:5,
          width:"20%",
          color:"black"
         }}
   onClick={handleSubmit(onsubmit)}
       
         >BACK</Button>
       
       
         <Button sx={{marginLeft:mediaViewPort?"15%":"5%",marginTop:"10%",
          border:"2px solid blue",
          borderRadius:5,
          width:"25%",
          color:"white",
           textTransform:"lowercase",
          backgroundColor:"blue",
          ":hover":{
            backgroundColor:"blue",
           
          }
         }}
     onClick={handleSubmit(onSubmit)}
       
         >Continue</Button>
        </Stack>
</FormControl>

  
    </>
  )
}

export default ExperianceForm;
