import { Box, Grid, Button, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormControl, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const defaultValues = {
  full_name:"",
  official_email_ID:"",
  create_password:"",
}

function DetailsForms() {
  const form = useForm({ defaultValues });
  const { register,  handleSubmit,formState } = form;
  const { errors } = formState;
  
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
  const onSubmit = (data,e ) => {
    console.log("form submitted", data);
    console.log("register",data);
    register(data);
  };
  return (
   
    <Box
    sx={{
      border:"2px solid gray",
      backgroundColor:"white",
      width:"630px",
      height:"500px",
      margin:"5%",
  }}
    >

        <Grid container sx={{margin:"5%"}}>
        <ContactEmergencyIcon sx={{marginLeft:"40%",}}/>
            <Grid md={10}  xs={12} sm={6}>
      <Typography
        sx={{
          fontSize: "15px",
          marginLeft:"7%",
        
        }}
      >
         we need thease to identify you and create your account
         </Typography>
         <Grid  md={10}  xs={12} sm={6}>
         <Typography   sx={{
          fontSize: "15px",
          fontWeight:"bold",
         marginLeft:"8%"
     
       
       
        }}>
            mobile:
         </Typography>
         </Grid>
         <Grid  md={10}  xs={12} sm={6}>
      <Typography
       sx={{
        fontSize: "16px",
        fontWeight:"bold",
      marginLeft:"8%",
     marginTop:"10px"
      }}
      >
        you are creating account as a:
      </Typography>
      </Grid>
      <RadioGroup
        sx={{
            fontSize: "15px",
           
         marginLeft:"6%"
          }}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Company/business" />
        <FormControlLabel value="male" control={<Radio />} label="individual/proprietor" />
      </RadioGroup>
      </Grid>
    
        <FormControl>
        <Grid md={12}  xs={12} sm={6}>
           <TextField
            label="full_name"
            id="full_name"
            name="full_name"
            {...register("full_name",
          {
            required:{
              value:true,
              message:"full name is required",
            },
          })}
          sx={{ marginLeft: "7%", width:"500px" }}
        error={errors?.full_name?.message}
        helperText={errors?.full_name?.message}
          />  
         
 </Grid>
 <Grid md={12}  xs={12} sm={6}> 
          <TextField
           
            fullWidth
            label="Official email ID"
            id="Official email ID"
            name="Official email ID"
            {...register("official_email_ID",
          {
            required:{
              value:true,
              message:"email id is required",
            },
          })}
          sx={{ marginLeft: "7%",
        marginTop:"10px" }}
          error={errors?.official_email_ID?.message}
          helperText={errors?.official_email_ID?.message}
          />
 </Grid>
 <Grid md={12}  xs={12} sm={6}>
          <TextField
         
            fullWidth
            label="Create password"
            id="create password"
            name="create password"
            {...register("create_password",
          {
            required:{
              value:true,
              message:"password is required",
            }
          })}
          sx={{ marginLeft: "7%",marginTop:"10px" }}
            error={errors?.create_password?.message}
          helperText={errors?.create_password?.message}
          />
 </Grid>

  <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "gray",
              fontWeight: "bold",
              marginLeft: "30%",
              textTransform: "none",
              marginTop: "15px",
              width:"200px"
            }}
            onClick={handleSubmit(onSubmit)}
          >
           continue
          </Button>
    
          </FormControl>
      </Grid>
    </Box>
    
    
  );
}

export default DetailsForms;
