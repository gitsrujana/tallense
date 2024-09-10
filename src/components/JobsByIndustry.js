import { Box, Card, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import JobsByIndustrySlider from './JobsByIndustrySlider'

function JobsByIndustry() {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>
    <Box sx={{
      
        width:mediaViewPort?"60%":"70%",
        height:mediaViewPort?"60%":"60%",
        marginLeft:"20%",
        border:"2px solid whitesmoke",
        borderRadius:6
    }}>
      <Grid container>
       <Grid md={4} xs={12} sm={12} 
        sx={{
        
             width:mediaViewPort?"100%":"98%",
             height:mediaViewPort?"290px":"",
             
        }}>
            <CardMedia
                    sx={{ height: 200, width:230 ,marginTop:2,marginLeft:4}}
                    image="https://i2.wp.com/fribly.com/wp-content/uploads/2019/04/Free-Industry-Vector-Icons.jpg?fit=1440%2C960&ssl=1"
                    title="green iguana"
            
/>
            <Typography sx={{
                textAlign:"center",
                marginTop:"8%",
                fontWeight:"bold"
            }}>
                jobs by industry
            </Typography>
       
       </Grid>
       <Grid md={8} xs={12} sm={12} sx={{border:"0.5px solid whitesmoke"}}>
        <JobsByIndustrySlider/>
        {/* <Card sx={{
            border:"2px solid whitesmoke",
           // width:"609px",
            height:"295px",
            marginLeft:"-15%"
        }}>
       <JobsByIndustrySlider>

       </JobsByIndustrySlider>
       </Card> */}
</Grid>
      </Grid>
      </Box>
    </>
  )
}

export default JobsByIndustry
