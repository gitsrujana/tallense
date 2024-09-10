import { Card, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function TopCompaniesComponent(props) {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <div>
    <Grid container>
      
        <Card
           sx={{
            width: "100%",
            height: "120px",
            border: "1px solid skyblue",
            boxShadow:"1px 1px 1px skyblue",
            borderRadius: 3,
            backgroundColor: "white",
            marginLeft: "3%",
            paddingLeft:"8px",
             }}
        >
          
           <Grid md={12} xs={12} sm={12}>
            <Typography sx={{display:"flex"}}> 
          <Typography
             variant="body2"
             sx={{ fontWeight: "bold", marginTop: "10px",
             marginLeft:mediaViewPort?"2%":"8%"
            }}
          >
            {props.title}
          </Typography>
          <Typography><ChevronRightIcon sx={{fontSize:"20px",marginTop:"9px"}}/></Typography>
          </Typography>
          <Typography
             variant="body2"
             sx={{
           marginLeft:mediaViewPort?"2%":"8%"
             }}
          >
            {props.hiring}&nbsp;&nbsp;are actively hiring
          </Typography>
          </Grid>

          <Grid md={12} xs={12} sm={12}
          sx={{display:"flex"}}
          >
            
           <CardMedia
             sx={{
              width: "20%",
              marginTop: "3%",
              marginLeft:mediaViewPort?"2%":"8%"
              
            }}
           component="img"
           image={props.image}
           height="50px"
           />
      
         
           </Grid>
           </Card>

        </Grid>
      
   
    </div>
  )
}

export default TopCompaniesComponent
