import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

function JobsByIndustryComponent(props) {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>        
    <Card sx={{width:"100%",
 height:mediaViewPort?"80px":"150px",
    border:"2px solid skyblue",
    borderRadius:3,
    margin:"5%",
    marginTop:mediaViewPort?"1%":"1%"
    
    }}>
        <Grid container sx={{marginTop:mediaViewPort?"12%":"2%"}}>
          <Grid md={4} xs={12} sm={12}>  
              <CardMedia sx={{
        width:mediaViewPort?"80%":"50%",
        height:"80%",
        border:"2px solid whitesmoke",
        borderRadius:3,
        marginLeft:mediaViewPort?"3%":"20%"
      }}
      component="img"
      image={props.image}
      /></Grid>
    
 <Grid md={4} xs={12} sm={12} sx={{marginLeft:mediaViewPort?"2%":"40%",
  marginTop:mediaViewPort?"0%":"-5%"
 }}>
        <Typography sx={{fontSize:"13px",
     fontWeight:"bold",
     marginLeft:mediaViewPort?"":"-10%"
    
    }}>
    {props.industry}
    </Typography>
        <Typography variant='subtitle2' sx={{marginTop:"-4%",
        marginLeft:mediaViewPort?"":"-10%"
    }}> 
        {props.posts}&nbsp;jobs
        </Typography>
        </Grid>
        </Grid>
      </Card>
   
    
    
    </>
  )
}

export default JobsByIndustryComponent;
