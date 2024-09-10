import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PlaceIcon from "@mui/icons-material/Place";
import ArticleIcon from "@mui/icons-material/Article";
import CardMedia from "@mui/material/CardMedia";
import SaveIcon from "@mui/icons-material/Save";
import Rating from "@mui/material/Rating";
import { Grid, Stack, useMediaQuery } from "@mui/material";
import DescriptionSection from "../pages/DescriptionSection";
export default function CardComponent(props) {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
   <>
   
   <Card sx={
    {
   width:mediaViewPort?"530px":"300px",
    height: mediaViewPort ? '250px':'350px',
    border:"2px solid  skyblue",
    borderRadius:5,
    marginLeft:mediaViewPort?"11%":"12%"    
    }}>
     <Grid container sx={{margin:"10px"}}>
   <Grid md={6} xs={12} sm={12} >
 
        <CardContent>
     <Typography  sx={{
             fontSize: "18px", 
             fontWeight: "bold" 
             }}>
      {props.role}
     </Typography>
     <Typography sx={{
           fontSize: "15px",
    
             }}>
          {props.companyname}
         </Typography>
         <Typography>
         <Rating  sx={{
             fontSize: "15px",
              marginLeft: "3px"
               }} />
                {props.rating}
         </Typography>
<Stack direction="row">

          <WorkOutlineIcon sx={{
             width: "15px",
       marginTop:"-3px"
              }} />
          <Typography variant="subtitle2" sx={{
             
             }}>{props.experience}</Typography>


<CurrencyRupeeIcon
            sx={{ 
              width: "15px",
                 marginLeft: "5px",
                 marginTop:"-3px"
               }}
          />

<Typography variant="subtitle2" sx={{
    
              }}>{props.salary}</Typography>

          <PlaceIcon
            sx={{
               width: "15px",
              marginLeft: "5px" ,
              marginTop:"-3px"
                }}
          />
          <Typography variant="subtitle2" sx={{
            
              }}>{props.location}</Typography>
  

     </Stack>
          <Stack direction="row">
          <ArticleIcon sx={{ 
            width: "15px", 
            height: "15px" ,
            marginTop:"3px"
           
            }} />  <Typography variant="subtitle2">
            {props.requirements}
            </Typography>
            </Stack>
     
       
        <Typography variant="subtitle2"
         sx={{ 
           marginTop: "3px" 
           }}>
          {props.skills}
        </Typography>
        <Typography display="flex" sx={{
           marginTop: "8px"
            }}>
          <Typography variant="subtitle2"
          sx={{marginTop:"-5px"}}
          >posted:{props.days} days ago</Typography>
          <Typography variant="subtitle2" sx={{
            marginLeft:"10px",
            marginTop:"-5px"
          }}>Applicants:{props.applicants}</Typography>
           </Typography>
         
          </CardContent>
   </Grid>
   <Grid md={2} xs={12} sm={12}></Grid>
   <Grid md={3} xs={12} sm={12}
   sx={{ marginTop:mediaViewPort?"2%":"-5%",
   marginLeft:mediaViewPort?"5%":"70px"}}
   >
    <CardMedia
     sx={{ 
      width: "100px",
       height: "60px",
      
       }}
    component="img"
    image={props.image}
    />
    <Typography  sx={{ 
     color:"blue",
     fontSize:"11px",
     margin:"5px",
     marginLeft:"-4px"
       }}>
    Send me jobs like this</Typography>
   
           
      </Grid>
      <Stack direction="row"
           sx={{marginLeft:mediaViewPort?"14px":"15px",marginTop:"-2px"}}
           >
           <Button sx={{
  border:"1px solid blue",
  fontWeight:"bold",
  fontSize:"12px",
  textTransform:"none",
  borderRadius:2,
  width:"90px",
  height:"20px",
 }}>Save</Button>
              <Button sx={{
  border:"1px solid blue",
  borderRadius:2,
  
  backgroundColor:"blue",
  color:"white",
  textTransform:"none",
width:"130px",
height:"20px",
marginLeft:"1%",
 fontSize:"10px",
  ":hover":{
    backgroundColor:"blue",
  }
      }}>Apply on company site</Button>
           </Stack> 
       </Grid>
       
   </Card>
   
   <DescriptionSection/>
   
 
   </>
  );
}
