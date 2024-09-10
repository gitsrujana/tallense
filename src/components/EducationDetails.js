import React, { useState } from 'react'
import { Box, Grid, Button, Typography, useMediaQuery} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormControl, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const defaultValues={
  higest_qualification:"",
  course:"",
  course_type:"",
  specialization:"",
  university_institute:"",
  starting_year:"",
  passing_year:"",
  select_grading_system:"",
  key_skills:"",
}
function EducationDetails() {
  const navigate=useNavigate()
    const mediaViewPort=useMediaQuery("(min-width:600px)")
    const form = useForm({ defaultValues });
    const { register,  handleSubmit,formState } = form;
    const [reviewFormData, setReviewFormData] = useState();
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
      const onSubmit = (data, e) => {
        console.log("register", data);
        setReviewFormData(data);
      navigate("/LandingPage")
       
      };
  return (
    <>
        <Box
        sx={{
          backgroundColor: "white",
          width:mediaViewPort? "40%":"490px",
          height: mediaViewPort ? "100%" : "1450px",
          border:"0px solid white",
        marginTop:mediaViewPort?"6%":"17%",
          marginLeft:mediaViewPort?"20%":"5%"
        }}
      >
 <Typography sx={{
    fontWeight:"bold",
    textAlign:"start",
    marginLeft:"5%",

 }}>
    Education Details
 </Typography>
 <Typography sx={{
    marginLeft:"5%",
    marginTop:"1%",
 }}>
    Thease details help recruiters identify your background
 </Typography>
                <FormControl>
                    <Grid container sx={{marginLeft:"10%",
                    }}>
                        <Grid md={12} xs={12} sm={12}  >

              <TextField 
              label=" highest  qualification/currently persuing"
              {...register("higest_qualification")}
              
              sx={{marginTop:"2%", width: "300px" 
         
              }}
              /></Grid>
              <Grid md={12} xs={12} sm={12}>
            
              <TextField 
              label=" course"
              {...register("course")}
              sx={{marginTop:"2%", width: "300px" 
          
              }}
              />
             </Grid>
              <TextField 
              label=" course type"
              {...register("course_type")}
              sx={{marginTop:"2%",width: "300px" 
           
              }}
              />
               
              <Grid md={12} xs={12} sm={12}>
              <TextField  
              label="  specialization"
              {...register("specialization")}
              sx={{marginTop:"2%",width: "300px" 
           
          }}
          />
              </Grid>

              
              <Grid md={12} xs={12} sm={12}>
              <TextField 
              label=" university/institute"
              {...register("university_institute")}
              sx={{marginTop:"2%",width: "300px" 
          
              }}
              />
              </Grid>
              
              <Grid md={12} xs={12} sm={12}>
              <TextField 
              label="starting year"
              {...register("starting_year")}
              sx={{marginTop:"2%",width: "300px" 
           
              }}
              />
              </Grid>
             
              <Grid md={12} xs={12} sm={12}>
              <TextField 
              label=" passing year"
              {...register("passing_year")}
              sx={{marginTop:"2%",width: "300px" 
         
              }}
              />
              </Grid>
              <Grid md={12} xs={12} sm={12}>
              <TextField 
              label="  select grading system"
              {...register("select_grading_system")}
              sx={{marginTop:"2%",width: "300px" 
          
              }}
              />
              </Grid>
              <Grid md={12} xs={12} sm={12}>
              <TextField 
              label="   key skills"
              {...register("key_skills")}
              sx={{marginTop:"2%",width: "300px" 
          
              }}
              />
              </Grid>
      </Grid>
      
       <Button
              sx={{
                textTransform: "none",
                backgroundColor: "blue",
                color: "white",
                marginLeft: mediaViewPort ? "18%" : "18%",
               marginTop:"3%",
                fontWeight: "bold",
                borderRadius: 5,
                width: "200px",
                ":hover": {
                  backgroundColor: "blue",
                },
              }}
              onClick={handleSubmit(onSubmit)}
            >
              save and continue
            </Button>
            </FormControl>
      </Box>
    </>
  )
}

export default EducationDetails
