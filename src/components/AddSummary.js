import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'


import { Form, NavLink, useNavigate } from 'react-router-dom';

function AddSummary() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
   
  return (
    <>
<Typography sx={{marginTop:"15%",marginLeft:"10%",fontSize:"20px"}}>Almost there! Next up → Summary !</Typography>
<Typography sx={{fontWeight:"bold",
    fontSize:"40px",
    marginLeft:"10%"
}}>
Let’s craft your<br/> professional summary
</Typography>
<Typography sx={{marginTop:"1%",marginLeft:"10%",fontSize:"20px"}}>
It’s your chance to grab an employer’s attention and make them say, <br/>“Wow, we need this incredible candidate on our team!”
</Typography>

<Stack direction='row'>
  <NavLink to={'/AddSkills'}>
         <Button sx={{marginLeft:mediaViewPort?"50%":"5%",marginTop:"75%",
          border:"2px solid gray",
          borderRadius:5,
          width:"200px",
          color:"black"
         }}>BACK</Button>
       </NavLink>
       <NavLink to={'/AdditionalDetails'}>
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

export default AddSummary;
