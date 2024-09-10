import { Card, Grid,CardMedia, useMediaQuery,Typography } from '@mui/material'
import React from 'react'

function LocationByJobs(props) {
 const mediaViewPort=useMediaQuery("(min-width:600px)")
 const jobs=[
  {software:200},
  {finance:400},
  {banking:50},
  {Retail:20},
  {Hr:100}

]  
console.log(Object.keys(jobs[0])[0]);
console.log(Object.values(jobs[0])[0])
//const [firstKey, ...rest] = Object.keys(jobs[0])

  return (
    <>
      <Card
        sx={{
          width:mediaViewPort? "90%":"250px",
        height:mediaViewPort?"150px":"250px",
          border: "2px solid skyblue",
          borderRadius: 3,
         marginLeft:mediaViewPort?"50%":"20%",
          marginTop: "2%",
          
        }}

      >
        <Grid container>
       <Grid md={4} xs={12} sm={12} sx={{
        margin:"3%"
       }}>
     
          <CardMedia
          sx={{
            width:"90px",
            height:"90px",
            border:"2px solid whitesmoke",
            borderRadius:2,
            marginLeft:mediaViewPort?"":"30%"
          }}
          component="img"
          image={props.image}
          />
  <Typography sx={{fontWeight:"bold",
        fontSize:"15px",
        textAlign:"center"
       }}
       >
        {props.location}
       </Typography>
            
  
          </Grid>
          <Grid md={6} xs={12} sm={12} sx={{
            marginLeft:"1%"
          }}>
          <Typography sx={{
            marginTop:mediaViewPort?"10%":"1%",
            marginLeft:mediaViewPort?"15%":"20%"
            
            }}>
     <Typography variant='subtitle2'>software:&nbsp;<b>{props.software}</b>&nbsp;jobs</Typography>
     <Typography variant='subtitle2'>finance:&nbsp;<b>{props. finance}</b>&nbsp;jobs</Typography>
     <Typography variant='subtitle2'>Hr:&nbsp;<b>{props.Hr}</b>&nbsp;jobs</Typography>
     <Typography variant='subtitle2'>banking:&nbsp;<b>{props.banking}</b>&nbsp;jobs</Typography>
     <Typography variant='subtitle2'>Retail:&nbsp;<b>{props.Retail}</b>&nbsp;jobs</Typography>
  
     </Typography>

          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default LocationByJobs
