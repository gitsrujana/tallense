import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'


import { Form, NavLink, useNavigate } from 'react-router-dom';

function AddEducation() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
   
  return (
    <>
<Typography sx={{marginTop:"15%",marginLeft:"10%",fontSize:"20px"}}> Great job!</Typography>
<Typography sx={{fontWeight:"bold",
    fontSize:"40px",
    marginLeft:"10%"
}}>
Now, let’s add  your<br/> education


</Typography>

<Stack direction='row'>
  <NavLink to={'/ExperianceForm'}>
         <Button sx={{marginLeft:mediaViewPort?"50%":"5%",marginTop:"75%",
          border:"2px solid gray",
          borderRadius:5,
          width:"200px",
          color:"black"
         }}>BACK</Button>
       </NavLink>
       <NavLink to={'/EducationForm'}>
         <Button sx={{marginLeft:mediaViewPort?"55%":"5%",marginTop:"75%",
          border:"2px solid blue",
          borderRadius:5,
          width:"200px",
          color:"white",
           textTransform:"lowercase",
          backgroundColor:"blue",
          ":hover":{
            backgroundColor:"blue",
           
          }
         }}
   
         >Continue</Button>
         </NavLink>
        </Stack>
    </>
  )
}

export default AddEducation;
