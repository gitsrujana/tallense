import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { MenuItem, InputLabel, Select, FormControl, FormLabel, RadioGroup, Radio, FormHelperText } from '@mui/material';


let renderCount = 0;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// function getStyles(name, role, theme) {
//     return {
//         fontWeight:
//             person.indexOf(name) === -1
//                 ? theme.typography.fontWeightRegular
//                 : theme.typography.fontWeightMedium,
//     };
// }
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function IndividualSignup(props) {
    const {register,errors} = props;
    const { ref } = register("gender")
    const { refPersist } = register("persist")
    return (
      
                   
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                       <Grid container spacing={2}>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={errors.firstname?.message}
                                    autoComplete="given-name"
                                    name="firstname"
                                    required
                                    fullWidth
                                    id="firstname"
                                    label="First Name"

                                    {...register("firstname", {
                                        required: {
                                            value: true,
                                            message: "Firstname is required."
                                        }
                                    })}
                                    autoFocus
                                    helperText={errors.firstname?.message}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={errors.lastname?.message}
                                    fullWidth
                                    id="lastname"
                                    label="Last Name"
                                    name="lastname"
                                    {...register("lastname", {
                                        required: {
                                            value: true,
                                            message: "Lastname is required."
                                        }
                                    })}
                                    autoComplete="family-name"
                                    helperText={errors.lastname?.message}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={errors.surname?.message}
                                    autoComplete="given-name"
                                    name="surname"
                                    required
                                    fullWidth
                                    id="surname"
                                    label="surname"
                                    {...register("surname", {
                                        required: {
                                            value: true,
                                            message: "Surname is required"
                                        }
                                    })}
                                    helperText={errors.surname?.message}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={errors.lastname?.message}
                                    required
                                    fullWidth
                                    id="username"
                                    label="username"
                                    name="username"
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: "Surname is required"
                                        }
                                    })}
                                    autoComplete="username"
                                    helperText={errors.lastname?.message}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/* <FormControl sx={{ m: 1, width:"300px", marginLeft:'-3px' }}>
                <InputLabel id="demo-multiple-name-label" >Name</InputLabel>
                <Select
                 
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value = {genderName}
                  
                  {...register("gender")}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {gender.map((gender) => (
                    <MenuItem
                      key={gender}
                      value={gender}
                      style={getStyles(gender, genderName, theme)}
                    >
                      {gender}
                    </MenuItem>
                  ))}
                </Select>
                
              </FormControl> */}
                                <FormControl sx={{ minWidth: '300px' }}>
                                    <FormLabel id="demo-radio-buttons-group-label" error={errors.gender?.message}>Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        id='gender'
                                        name="gender"
                                        {...register("gender", {
                                            required: {
                                                value: true,
                                                message: "Gender is required"
                                            }
                                        })}
                                    >
                                        <FormControlLabel ref={ref} value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel ref={ref} value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel ref={ref} value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                    <FormHelperText error={errors.gender?.message}>{errors.gender?.message}</FormHelperText>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    error={errors.email?.message}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
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
                                        // validate:{
                                        //     emailAvailable: async (fieldValue) => {

                                        //             const response = await fetch(`http://localhost:7001/v1/api/auth/verifyEmailExists?email=${fieldValue}`)
                                        //             console.log(response)
                                        //             if(response.status === 400)
                                        //             return "Email already exists";  
                                        //       },
                                        // }

                                    })}
                                    autoComplete="email"
                                    helperText={errors.email?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={errors.mobile?.message}
                                    required
                                    fullWidth
                                    id="mobile"
                                    label="mobile"
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
                                    autoComplete="mobile"
                                    helperText={errors.mobile?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={errors.password?.message}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$~`%^&*_])[a-zA-Z0-9!@#$~`%^&*_]{8,15}$/,
                                            message: "The Password must have capital letter, number, small letter and a special character"
                                        }
                                    })}
                                    autoComplete="new-password"
                                    helperText={errors.password?.message}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                <TextField
                error = {errors.password?.message}
                  required
                  fullWidth
                  name="facebook"
                  label="facebook"
                  type="facebook"
                  id="facebook"
                  {...register("social.facebook",{
                    required:{
                        value:true,
                        message:"Your facebook link"
                    },
                    pattern:{
                        value:/^(?=.*[a-z0-9A-z!@#$~`%^&*_])[a-zA-Z0-9!@#$~`%^&*_]{8,15}$/,
                        message:"The Password must have capital letter, number, small letter and a special character"
                    }
                  })}
                  autoComplete="new-password"
                  helperText = {errors.password?.message}
                />
              </Grid> */}
                            <Grid item xs={12}>
                                <FormControlLabel
                                    name="persist"    {...register("persist")}
                                    control={<Checkbox ref={refPersist} value={true} id="persist" defaultChecked color="primary" />}
                                    label="I trust this device"
                                />
                            </Grid>
                            </Grid>
           </Box>
                     
     
    );
}