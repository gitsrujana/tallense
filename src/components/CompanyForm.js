import { Box, Button, Checkbox, FormControl, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import { useForm, useFormState } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
 const defaultValues={
   company:"",
   numberofemployees:"",
   your_designation:"",
   pin_code:"",
   company_address:"",
 }

function CompanyForm() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
    const form=useForm({defaultValues});
    const {register,handleSubmit}=form;
    const Navigate=useNavigate();
    const {errors}=useFormState;
    const onSubmit=(data,e)=>{
        console.log("register",data);
        Navigate('/EmployerCard')
     
      }

  return (
    <>
      <Box sx={{
        width:"50%",
        marginTop:"10%",
        marginLeft:"10%"
        
      }}>
        <Typography >
       we use this information to know about the company 
       you are hiring for and to genarate an invoice 
        </Typography>

           <Typography sx={{fontWeight:"bold",marginTop:"2%"}}>
           You’re here to hire for:
           </Typography>
           <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Company/business" control={<Radio />} label="your Company" />
        <FormControlLabel value="Individual/proprietor" control={<Radio />} label="as a consultant" />

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
                    label="Company"
                    placeholder=''
                    id="company"
                    name="company"
                    {...register("company", {
                      required: {
                        value: true,
                        message: "company name is required"
                      },
                    })}
                    error={errors?.company?.message}
                    helperText={errors?.company?.message}
                  />
                   <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    //InputLabelProps={{style: {fontSize:12, color:"blue"}}} // font size of input label
                    variant="outlined"
                    margin="normal"
                    label="Number Of Employees"
                    placeholder=''
                    id="numberofemployees"
                    name="numberofemployees"
                    {...register("numberofemployees", {
                      required: {
                        value: true,
                        message: " numberofemployees is required"
                      },
                    })}
                    error={errors?.numberofemployees?.message}
                    helperText={errors?.numberofemployees?.message}
                  />
                   <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    //InputLabelProps={{style: {fontSize:12, color:"blue"}}} // font size of input label
                    variant="outlined"
                    margin="normal"
                    label="your designation"
                    placeholder=' your_designation'
                    id="your_designation"
                    name="your_designation"
                    {...register("your_designation", {
                      required: {
                        value: true,
                        message: "designation  is required"
                      },
                    })}
                    error={errors?.your_designation?.message}
                    helperText={errors?.your_designation?.message}
                  />
                   <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    //InputLabelProps={{style: {fontSize:12, color:"blue"}}} // font size of input label
                    variant="outlined"
                    margin="normal"
                    label="Pincode"
                    placeholder=' pincode'
                    id="pin_code"
                    name="pin_code"
                    {...register("pin_code", {
                      required: {
                        value: true,
                        message: "pincode  is required"
                      },
                    })}
                    error={errors?.pin_code?.message}
                    helperText={errors?.pin_code?.message}
                  />
                   <TextField
                    sx={{ width: "98%" }}
                    fullWidth
                    //InputLabelProps={{style: {fontSize:12, color:"blue"}}} // font size of input label
                    variant="outlined"
                    margin="normal"
                    label="company address"
                    placeholder=' company address'
                    id="company_address"
                    name="company_address"
                    {...register("company_address", {
                      required: {
                        value: true,
                        message: "company_address  is required"
                      },
                    })}
                    error={errors?.company_address?.message}
                    helperText={errors?.company_address?.message}
                  />
            </Grid>
        </Grid>
        <FormControlLabel sx={{marginTop:"3%"}} control={<Checkbox/>} label="I agree
        SMS or other services to receive important updates by whatsapp " />

        
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

export default CompanyForm;
