import { Box, Button, CardMedia, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function EmployerCard(props) {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>
      <Box sx={{
        width:mediaViewPort?"80%":"80%",
        height:mediaViewPort?"100%":"820px",
        border:"2px solid whitesmoke",
        marginLeft:"10%",
        marginTop:"5%"
      }}>
        <Grid container>
        <Typography sx={{fontSize:"25px",fontWeight:"bold",letterSpacing:"1px",marginTop:"2%",marginLeft:"5%"}}>
                   {props.title}
                </Typography>
            <Grid md={6} xs={12} sm={12} sx={{marginLeft:"4%",}}>
              
                <Stack direction='row'sx={{marginTop:"2%"}}>
                <ChevronRightIcon/>
             <Typography>
              {props.requirement1}
             </Typography>
             </Stack>
             <Stack direction='row' sx={{marginTop:"2%"}}>
                <ChevronRightIcon/>
             <Typography>
              {props.requirement2}
             </Typography>
             </Stack>
             <Stack direction='row' sx={{marginTop:"2%"}}>
                <ChevronRightIcon/>
             <Typography>
              {props.requirement3}
             </Typography>
             </Stack>
             <Stack direction='row' sx={{marginTop:"2%"}}>
                <ChevronRightIcon/>
             <Typography>
              {props.requirement4}
             </Typography>
             </Stack>
            </Grid>
            <Grid md={3} xs={12} sm={12} sx={{marginLeft:mediaViewPort?"20%":"5%",
                marginRight:mediaViewPort?"0%":"5%"}}>
             <CardMedia
             component='img'
             image={props.image}
             height="250"
             />
       </Grid>
        </Grid>
        <Button sx={{
            width:mediaViewPort?"20%":"50%",
            border:"2px solid skyblue",
            textTransform:"none",
            marginLeft:"5%",
            fontWeight:"bold",
            marginTop:mediaViewPort?"2%":"2%"
        }}>Buy Now</Button>
      </Box>
    </>
  )
}

export default EmployerCard
