import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'


function AddExperiance() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
   
  return (
    <>
<Typography sx={{marginTop:"15%",marginLeft:"10%",fontSize:"20px"}}>well done!</Typography>
<Typography sx={{fontWeight:"bold",
    fontSize:"40px",
    marginLeft:"10%"
}}>
Now, let’s include your <br/>experience.
</Typography>

<Stack direction='row'>
  <NavLink to={'/HeaderForm'}>
         <Button sx={{marginLeft:mediaViewPort?"50%":"5%",marginTop:"75%",
          border:"2px solid gray",
          borderRadius:5,
          width:"200px",
          color:"black"
         }}>BACK</Button>
       </NavLink>
            <NavLink to={'/ExperianceForm'}>
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

export default AddExperiance
