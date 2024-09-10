import { Avatar, Box,  Grid, Typography } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Profile() {
  return (
    <>
  <Box >
    <Grid container>
        <Grid md={3} xs={12} sm={12}>
 <Typography>Srujana Badepally</Typography>
        </Grid>
        <Grid md={3} xs={12} sm={12}>
 <Avatar >SB</Avatar>
</Grid>

<Grid md={6}></Grid>
      <Accordion>
      <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
            <Grid>
            <EmailIcon/> </Grid>
            <Grid>
            <Typography>srujanabadepally123@gmail.com</Typography>
            </Grid>&nbsp;&nbsp;&nbsp;
          <Grid><PhoneIcon/> </Grid>
          <Grid> <Typography>9603151561</Typography></Grid>&nbsp;&nbsp;&nbsp;
          <Grid><PlaceIcon/></Grid>
          <Grid><Typography>hyderabad</Typography></Grid>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </AccordionSummary>
        <AccordionDetails>
        
        </AccordionDetails>
      </Accordion>
    </Grid>
  </Box>
   
    </>
  )
}

export default Profile
