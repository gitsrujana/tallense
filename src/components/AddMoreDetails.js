import { Button, Card, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import WebIcon from '@mui/icons-material/Web';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { NavLink } from 'react-router-dom';
function AddMoreDetails() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>
      <Typography sx={{fontWeight:"bold",
    fontSize:"40px",
    marginLeft:"10%",
    marginTop:"5%"
}}>
      Add More Details
      </Typography>
      <Typography sx={{marginLeft:"10%",fontSize:"15px"}}>
      This is an opportunity to highlight qualifications that don't fit into standard resume sections.
</Typography>

<Card sx={{width:mediaViewPort?"50%":"100%",marginLeft:"5%",marginTop:"5%"}}>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           <Stack direction='row' >
<LanguageIcon sx={{marginLeft:mediaViewPort?"5%":"1%"}}/>
<Typography>Language</Typography>
</Stack>
       
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
</Card>
<Card sx={{width:mediaViewPort?"50%":"100%",marginLeft:"5%",marginTop:"2%"}}>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <Stack direction='row' >
        <LocalActivityIcon/>
        <Typography>
        Activities
        </Typography>
        </Stack>
       
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
</Card>
<Card sx={{width:mediaViewPort?"50%":"100%",marginLeft:"5%",marginTop:"2%"}}>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           <Stack direction='row' >
<EmojiEventsIcon />
<Typography>
Awards, Accomplishments,
and Honors
</Typography>
</Stack>
       
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
</Card>
<Card sx={{width:mediaViewPort?"50%":"100%",marginLeft:"5%",marginTop:"2%"}}>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           <Stack direction='row' sx={{marginTop:"%"}}>
<WebIcon sx={{marginLeft:mediaViewPort?"%":"1%"}}/>
<Typography>
Websites and Social Links
</Typography>
</Stack>
       
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
</Card>
<Card sx={{width:mediaViewPort?"50%":"100%",marginLeft:"5%",marginTop:"2%"}}>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           <Stack direction='row' sx={{marginTop:"%"}}>
<RocketLaunchIcon/>
<Typography>Referances</Typography>
</Stack>
       
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
</Card>
<Card sx={{width:mediaViewPort?"50%":"100%",marginLeft:"5%",marginTop:"2%"}}>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           <Stack direction='row' sx={{marginTop:"%"}}>
        <WorkspacePremiumIcon sx={{marginLeft:mediaViewPort?"%":"1%"}}/>
        <Typography>
        Certifications and Licenses
        </Typography>
        </Stack>
       
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
</Card>
<Stack direction='row'>
        <NavLink to={'/AdditionalDetails'}>
         <Button sx={{marginLeft:mediaViewPort?"11%":"5%",marginTop:"75%",
          border:"2px solid gray",
          borderRadius:5,
          width:"200px",
          color:"black"
         }}>BACK</Button>
       </NavLink>
       
         <Button sx={{marginLeft:mediaViewPort?"3%":"5%",marginTop:"10%",
          border:"2px solid blue",
          borderRadius:5,
          width:"15%",
          color:"white",
           textTransform:"lowercase",
          backgroundColor:"blue",
          ":hover":{
            backgroundColor:"blue",
           
          }
         }}
   
         >Continue</Button>
        </Stack>
    </>
  )
}

export default AddMoreDetails
