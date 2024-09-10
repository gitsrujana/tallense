import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PlaceIcon from "@mui/icons-material/Place";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

import Rating from "@mui/material/Rating";
import { Box, Divider, useMediaQuery } from "@mui/material";
function DescriptionPage(props) {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>
      <Box sx={{
        border:"2px solid skyblue",
        borderRadius:5,
        width:mediaViewPort?"600px":"300px",
        height:"1000px",
      marginLeft:mediaViewPort?"43%":"-1%",
      marginTop:"-27.5%"
       
      }}>
      <Card
        sx={{
          width:mediaViewPort? "550px":"270px",
          height: "700px",
          marginTop: "20px",
          borderRadius: 2,
          border:"1px solid whitesmoke",
          marginLeft:"4%",
        
     
        }}
      >
        <Box
          sx={{ backgroundColor: "white", marginLeft:"4%",marginTop:"3%",height: "90px" }}
        >
          <Typography sx={{ marginLeft: "2%", fontWeight: "bold" }}>
            
            Job highlights
          </Typography>

          <Typography sx={{ margin: "10px", fontSize: "14px" }}>
            {props.experience}:years of experience in Web Application
            Development
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "5%" }}>
          <Typography sx={{ fontWeight: "bold", marginTop: "5px" }}>
            Job description
          </Typography>
          <Typography
            sx={{
              marginRight: "5%",
              marginBottom: "3%",
              fontSize: "14px",
            }}
          >
            {props.experience}
            {props.description}
          </Typography>
          <Typography>
            <Typography sx={{ fontSize: "14px", marginTop: "5px" }}>
              <b>Role:</b>
              {props.role}
            </Typography>
            <Typography sx={{ fontSize: "14px", marginTop: "5px" }}>
              <b>Department:</b>
              {props.Department}
            </Typography>
            <Typography sx={{ fontSize: "14px", marginTop: "5px" }}>
              <b> IndustryType:</b>
              {props.IndustryType}
            </Typography>
            <Typography sx={{ fontSize: "14px", marginTop: "5px" }}>
              <b>EmploymentType:</b>
              {props.EmploymentType}
            </Typography>
            <Typography sx={{ fontSize: "14px", marginTop: "5px" }}>
              <b>RoleCategory:</b>
              {props.RoleCategory}
            </Typography>
          </Typography>
        </Box>
        <Typography
          sx={{ fontWeight: "bold", marginTop: "5%", marginLeft: "5%" }}
        >
          Key Skills
        </Typography>
        <Button>{props.button1}</Button>
      
      </Card>
      <Card
        sx={{
          height: "200px",
          width:mediaViewPort? "550px":"270px",
          borderRadius: 2,
          border:"1px solid whitesmoke",
          marginTop: "2%",
          marginLeft:"4%"
          
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            marginLeft: "5%",
            marginTop: "2%",
          }}
        >
          About company
        </Typography>
        <Typography
          sx={{ fontSize: "14px", marginLeft: "5%", marginRight: "5%" }}
        >
          {props.aboutcompany}
        </Typography>
   </Card> 
      </Box>

  
    
    </>
  );
}

export default DescriptionPage;
