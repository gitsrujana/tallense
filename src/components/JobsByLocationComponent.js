import { Box, Card, CardContent, CardMedia, useMediaQuery } from "@mui/material";
import React from "react";

function JobsByLocationComponent(props) {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>
   
   
    <Card
        sx={{
          width:mediaViewPort? "50%":"45%",
          height:mediaViewPort? "65%":"75%",
          border: "2px solid skyblue",
          borderRadius: 3,
          marginLeft:mediaViewPort? "50%":"25%",
          marginTop:mediaViewPort? "5%":"2%",
        }}
      >
        <CardMedia
          sx={{
            width:mediaViewPort? "80%":"60%",
            height: "50%",
            border: "2px solid grey",
            borderRadius: 2,
            marginLeft:mediaViewPort? "10%":"19%",
            marginTop: "6%",
          }}
          component="img"
          image={props.image}
        />
        <CardContent
          sx={{
            textAlign: "center",
          fontSize:"15px",
            fontFamily: "sans-serif",
            marginTop:mediaViewPort?"1%":"-3%"
          }}
        >
          {props.place}
        </CardContent>
      </Card>
    
     
    </>
  );
}

export default JobsByLocationComponent;
