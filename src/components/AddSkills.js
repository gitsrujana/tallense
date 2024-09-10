import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'


import { Form, NavLink, useNavigate } from 'react-router-dom';

function AddSkills() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
   
  return (
    <>
<Typography sx={{marginTop:"15%",marginLeft:"10%",fontSize:"20px"}}>Great progress! Next up → Skills !</Typography>
<Typography sx={{fontWeight:"bold",
    fontSize:"40px",
    marginLeft:"10%"
}}>
Time to showcase<br/> your skills
</Typography>
<Typography sx={{marginTop:"1%",marginLeft:"10%",fontSize:"20px"}}>Use our pre-written suggestions to optimize* your skills section, and get<br/> your resume to the top of the pile.</Typography>

<Stack direction='row'>
<NavLink to={'/EducationForm'}>
         <Button sx={{marginLeft:mediaViewPort?"50%":"5%",marginTop:"75%",
          border:"2px solid gray",
          borderRadius:5,
          width:"200px",
          color:"black"
         }}>BACK</Button>
       </NavLink>
       <NavLink to={'/AddSummary'}>
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

export default AddSkills;
