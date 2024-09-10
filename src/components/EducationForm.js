import { Autocomplete, Button, Checkbox, FormControl, FormControlLabel, Grid, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

let renderCount=0;
const defaultValues={
    school_name:"",
    school_location:"",
    degree:"",
    field_of_study:"",
    graduation_date:"",
     month:"",
     year:"",

}
const degree=[
  {label:"Bsc"},
  {label:"Btech"},
  {label:"Pharmacy"},
  {label:"Bzc"},
  {label:"Bcom"},
  {label:"Arts"},
]
const month=[
  {label:"january"},
  {label:"febuary"},
  {label:"march"},
  {label:"april"},
  {label:"may"},
  {label:"june"},
  {label:"july"},
  {label:"august"},
  {label:"september"},
  {label:"october"},
  {label:"november"},
  {label:"december"},
]
const year=[
  {label:"2015"},
  {label:"2016"},
  {label:"2017"},
  {label:"2018"},
  {label:"2019"},
  {label:"2020"},
  {label:"2021"},
  {label:"2022"},
  {label:"2023"},
  {label:"2024"},
  {label:"2025"},
  {label:"2026"},
]


function EducationForm() {
 
    const mediaViewPort=useMediaQuery("(min-width:600px)")
    const form=useForm({defaultValues});
    const {register,handleSubmit}=form;
renderCount++;
    const {errors}=useFormState;
    const navigate=useNavigate()
    const navigate1=useNavigate()
    const onSubmit=(data,e)=>{
      console.log("register",data);
      navigate('/AddSkills')
   
    }
    const onsubmit=(_data)=>{
      navigate1('/AddEducation')
    }
 
      return (
    <>
        <Typography sx={{fontSize:"30px",fontWeight:"bold",marginLeft:"5%",fontWeight:"bold",marginTop:mediaViewPort?"5%":"15%"}}>
        "Now, let’s go over your academic history."
    </Typography>

    
    <Typography sx={{marginLeft:"6%"}}>
    "Let us know about any higher education institutions, vocational training, or courses you enrolled in. <br/>Include them all, regardless of completion."
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
                    label="School Name"
                    id="school_name"
                    name="school_name"
                    {...register("school_name", {
                      required: {
                        value: true,
                        message: "school name is required"
                      },
                    })}
                    error={errors?.school_name?.message}
                    helperText={errors?.school_name?.message}
                  />

                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    label="School Location"
                    variant="outlined"
                    margin="normal"
                    id="school_location"
                    name="school_location"
                    {...register("school_location", {
                      required: {
                        value: true,
                        message: "school location is required"
                      },
                    }
                    )}
                    error={errors?.school_location?.message}
                    helperText={errors?.school_location?.message}
                  />
                </Grid>
              </Grid>
              <Grid container  sx={{marginLeft:mediaViewPort?"25%":"5%",marginTop:"2%"}}>
                <Grid item md={10} xs={12} >
                <Autocomplete
                    options={degree}
                    renderInput={(params) => (
                      <TextField
                        sx={{ width: "98%" }}
                        {...params}
                        fullWidth
                        label="degree"
                        id="degree"
                        name="degree"
                        {...register("degree", {
                          required: {
                            value: true,
                            message: "degree is required"
                          },
                        })}
                        error={errors?.degree?.message}
                        helperText={errors?.degree?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{marginLeft:mediaViewPort?"25%":"5%",marginTop:"2%"}}>
                <Grid item md={12} xs={12}>
                <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    label=" Field of Study"
                    variant="outlined"
                    margin="normal"
                    id="field of study"
                    name="field of study"
                    {...register("field_of_study", {
                      required: {
                        value: true,
                        message: "field of studyis required"
                      },
                    }
                    )}
                    error={errors?.field_of_study?.message}
                    helperText={errors?.field_of_study?.message}
                  />
                </Grid>
              </Grid>

            <Grid container  sx={{marginLeft:mediaViewPort?"25%":"5%",marginTop:"2%"}}>
              <Grid item md={5}xs={12}>
              <Autocomplete
                    options={month}
                    renderInput={(params) => (
                      <TextField
                        sx={{ width: "98%" }}
                        {...params}
                        fullWidth
                       label="Month"
                        id="month"
                        name="month"
                        {...register("graduation_date")}
                         
                      />
                    )}
                  />
              </Grid>
              <Grid item md={5}xs={12} sx={{marginLeft:mediaViewPort?"15%":"%",marginTop:mediaViewPort?"0%":"2%"}} >
              <Autocomplete
                    options={year}
                    renderInput={(params) => (
                      <TextField
                        sx={{ width: "98%" }}
                        {...params}
                        fullWidth
                       label="Year"
                        id="year"
                        name="year"
                        {...register("graduation_date")}
                         
                      />
                    )}
                  />
              </Grid>
            </Grid>
            <FormControlLabel sx={{marginLeft:"23%",marginTop:"3%"}} control={<Checkbox  />} label="I am still enrolled" />
         <Typography sx={{marginLeft:mediaViewPort?"25%":"10%",color:"blue",marginTop:"5%"}}>+  Add course work or other details</Typography>
        
        
          <Stack direction='row'>
            <Button sx={{marginLeft:mediaViewPort?"30%":"5%",marginTop:"10%",
          border:"2px solid gray",
          borderRadius:5,
          width:"30%",
          color:"black"
         }}
       
        onClick={handleSubmit(onsubmit)}
         >BACK</Button>
       
         <Button sx={{marginLeft:mediaViewPort?"15%":"5%",marginTop:"10%",
          border:"2px solid blue",
          borderRadius:5,
          width:"30%",
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

export default EducationForm;
