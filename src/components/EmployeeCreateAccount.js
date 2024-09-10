import { Box, Button, FormControl, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import { useForm, useFormState } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
 const defaultValues={
    full_name:"",
    official_emailid:"",
    create_password:"",
 }

function EmployeeCreateAccount() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
    const form=useForm({defaultValues});
    const {register,handleSubmit}=form;
    const {errors}=useFormState;
    const navigate=useNavigate()
    const onSubmit=(data,e)=>{
        console.log("register",data);
        navigate('/CompanyForm')
         }
        

  return (
    <>
      <Box sx={{
        width:"50%",
        marginTop:"10%",
        marginLeft:"10%"
        
      }}>
        <Typography sx={{color:"black",
        }}>
        We need these details to identify you
        and create your account
        </Typography>
           <Typography sx={{fontWeight:"bold",marginTop:"2%"}}>
            mobile:+9603151561
           </Typography>
           <Typography>
           You’re creating account as a:
           </Typography>
           <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Company/business" control={<Radio />} label="Company/business" />
        <FormControlLabel value="Individual/proprietor" control={<Radio />} label="Individual/proprietor" />

      </RadioGroup>
      <FormControl>
        <Grid container>
            <Grid>
            <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    //InputLabelProps={{style: {fontSize:12, color:"blue"}}} // font size of input label
                    variant="outlined"
                    margin="normal"
                    label="FullName"
                    placeholder='Name as per PAN'
                    id="full_name"
                    name="full_name"
                    {...register("full_name", {
                      required: {
                        value: true,
                        message: "fullname name is required"
                      },
                    })}
                    error={errors?.full_name?.message}
                    helperText={errors?.full_name?.message}
                  />
                   <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    //InputLabelProps={{style: {fontSize:12, color:"blue"}}} // font size of input label
                    variant="outlined"
                    margin="normal"
                    label="OfficialEmailId"
                    placeholder='enter email id'
                    id="official_emailid"
                    name="official_emailid"
                    {...register("official_emailid", {
                      required: {
                        value: true,
                        message: "official emailid name is required"
                      },
                    })}
                    error={errors?.official_emailid?.message}
                    helperText={errors?.official_emailid?.message}
                  />
                   <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    //InputLabelProps={{style: {fontSize:12, color:"blue"}}} // font size of input label
                    variant="outlined"
                    margin="normal"
                    label="create password"
                    placeholder=' enter new password'
                    id="create_password"
                    name="create_password"
                    {...register("create_password", {
                      required: {
                        value: true,
                        message: "password  is required"
                      },
                      pattern:{
                        
                      }
                    })}
                    error={errors?.create_password?.message}
                    helperText={errors?.create_password?.message}
                  />
            </Grid>
        </Grid>
        <Button sx={{marginLeft:mediaViewPort?"15%":"15%",marginTop:"8%",
          border:"2px solid blue",
          borderRadius:5,
          width:"50%",
          color:"white",
           textTransform:"lowercase",
          backgroundColor:"blue",
          ":hover":{
            backgroundColor:"blue",
           
          }
         }}
         onClick={handleSubmit(onSubmit)}
     
         >Continue</Button>
         
      </FormControl>
      </Box>
    </>
  )
}

export default EmployeeCreateAccount
