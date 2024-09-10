import { CheckBox } from '@mui/icons-material';
import { Autocomplete, Box, Card, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
 const defaultValues={
    fullname:"",
    mobilenumber:"",
    emailaddress:"",
    currentcity:"",
    country:"",
    keyskills:"",
    experiance:"",
    Education:"",
    projects:"",
 }
 const experiance = [
  { label: '0 years'},
  { label: '1 year' },
  { label: '2 years' },
  { label: '3 years' },
  { label: '4 years' },
  { label: '5 years' },
  { label: '>6 years'},
 ];
function Resume() {
    const mediaViewPort = useMediaQuery("(min-width:600px)");
    const form = useForm({ defaultValues });
    const {register}=form;
  return (
    <>
      <Box
       sx={{
        backgroundColor: "white",
        width: mediaViewPort ? "50%" : "600px",
        height: "100%",
       
        marginLeft: mediaViewPort ? "2%" : "-2%",
        marginTop: mediaViewPort ? "5%" : "6%",
      }}
      >
       <Typography>Personal Details</Typography>
       <Grid md={12} xs={12} sm={12} sx={{
        margin:"2%"
       }}>
       <TextField
      label="fullName"
      placeholder="full Name"
      {...register("fullname")}
       />
       </Grid>
       <Grid md={12} xs={12} sm={12} sx={{
        margin:"2%"
       }}>
        <TextField
      label="email address"
      placeholder="email address"
      {...register("emailaddress")}
       />
       </Grid>
        <Grid md={12} xs={12} sm={12} sx={{
        margin:"2%"
       }}>
        <TextField
      label="mobile number"
      placeholder="mobile number"
      {...register("mobilenumber")}
       />
       </Grid>
        <Grid md={12} xs={12} sm={12} sx={{
        margin:"2%"
       }}>
        <TextField
      label="current city"
      placeholder="current city"
      {...register("currentcity")}
       />
       </Grid>
        <Grid md={12} xs={12} sm={12} sx={{
        margin:"2%"
       }}>
        <TextField
      label="country"
      placeholder="country"
      {...register("country")}
       />
       </Grid>
       <Typography>experiance level</Typography>
       <RadioGroup
       row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
       <FormControlLabel value="Fresher" control={<Radio />} label="Fresher" />
        <FormControlLabel value="Experiance" control={<Radio />} label="Experiance" />
        </RadioGroup>
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={experiance}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="0 years" />}
    />
   
    <Grid md={12} sm={12} xs={12}>
    <Typography>key skills</Typography>
   <TextField 
   {...register("keyskills")}
   />
   </Grid>
   <Grid md={12} sm={12} xs={12}>
    <Typography> Work Experiance</Typography>
    <TextField 
   {...register("experiance")}
   />
  </Grid>
  <Grid md={12} sm={12} xs={12}>
    <Typography> Projects</Typography>
    <TextField 
     sx={{
     
   }}
   {...register("projects")}
  
   />
  </Grid>
  <Grid md={12} sm={12} xs={12}>
    <Typography>Education</Typography>
    <TextField 
   {...register("Education")}
   />
  </Grid>
      </Box>
    </>
  )
}

export default Resume
