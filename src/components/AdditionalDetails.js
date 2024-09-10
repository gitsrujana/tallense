import { Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import WebIcon from '@mui/icons-material/Web';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { NavLink } from 'react-router-dom';

function AdditionalDetails() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
   
  return (
    <>
<Typography sx={{marginTop:"15%",marginLeft:"10%",fontSize:"20px"}}>Last but not least..</Typography>
<Typography sx={{fontWeight:"bold",
    fontSize:"40px",
    marginLeft:"10%"
}}>
Share more about<br/> yourself
</Typography>
<Typography sx={{marginTop:"1%",marginLeft:"10%",fontSize:"15px"}}>
Show your expertise and passion! Here are some popular ones included by other candidates.
</Typography>
<Grid container>
<Grid md={4} xs={12} sm={12} >
<Stack direction='row' sx={{marginTop:"5%"}}>
<LanguageIcon sx={{marginLeft:mediaViewPort?"30%":"1%"}}/>
<Typography>Language</Typography>
</Stack>
</Grid>
<Grid md={4} xs={12} sm={12}>
<Stack direction='row' sx={{marginTop:"5%"}}>
<EmojiEventsIcon />
<Typography>
Awards, Accomplishments,
and Honors
</Typography>
</Stack>
</Grid>
</Grid>

<Grid container>
<Grid md={4} xs={12} sm={12} >
<Stack direction='row' sx={{marginTop:"5%"}}>
<WebIcon sx={{marginLeft:mediaViewPort?"30%":"1%"}}/>
<Typography>
Websites and Social Links
</Typography>
</Stack>
</Grid>
<Grid md={4} xs={12} sm={12}>
<Stack direction='row' sx={{marginTop:"5%"}}>
<RocketLaunchIcon/>
<Typography>Referances</Typography>
</Stack>
</Grid>
</Grid>
<Grid container>
    <Grid md={4} xs={12} sm={12}>
        <Stack direction='row' sx={{marginTop:"5%"}}>
        <WorkspacePremiumIcon sx={{marginLeft:mediaViewPort?"30%":"1%"}}/>
        <Typography>
        Certifications and Licenses
        </Typography>
        </Stack>
    </Grid>
    <Grid md={4} xs={12} sm={12}>
        <Stack direction='row' sx={{marginTop:"5%"}}>
        <LocalActivityIcon/>
        <Typography>
        Activities
        </Typography>
        </Stack>
    </Grid>

</Grid>
        <Stack direction='row'>
        <NavLink to={'/AddSummary'}>
         <Button sx={{marginLeft:mediaViewPort?"40%":"5%",marginTop:"75%",
          border:"2px solid gray",
          borderRadius:5,
          width:"200px",
          color:"black"
         }}>BACK</Button>
           </NavLink>
       <NavLink to={'/AddMoreDetails'}>
         <Button sx={{marginLeft:mediaViewPort?"45%":"5%",marginTop:"75%",
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

export default AdditionalDetails;
