import {
    Box,
    Divider,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  import React from "react";
  import { resume11data } from "../data/resume11data";
  
  function Resume14() {
    const mediaViewPort = useMediaQuery("( min-width:600px)");
    return (
      <>
        <Box
          sx={{
            width: mediaViewPort ? "38%" : "90%",
            height:mediaViewPort? "100%":"100%",
            border: "10px solid aliceblue",
            borderRadius: 5,
            marginTop: mediaViewPort ? "6%" : "15%",
            marginLeft: mediaViewPort ? "30%" : "5%",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              textAlign: "center",
              marginTop: "3%",
              color:"#009999"
            }}
          >
            {resume11data.name}
          </Typography>
          <Divider sx={{backgroundColor:"gray",width:"80%",marginLeft:"10%"}}/>
        
            <Typography
              sx={{ fontSize: "12px",textAlign:"center" }}
            >
              {resume11data.email}
            </Typography>
  
            <Typography
              sx={{
                fontSize: "12px",
              textAlign:"center"
              }}
            >
              +91
              {resume11data.phone}
            </Typography>
            <Typography
              sx={{ fontSize: "12px",textAlign:"center" }}
            >
              {resume11data.address}
            </Typography>
         
          <Stack direction="row">
            <Divider
              style={{
                backgroundColor: "gray",
                width: mediaViewPort ? "42%" : "35%",
                marginTop: mediaViewPort ? "4.5%" : "6%",
                marginLeft: mediaViewPort ? "2%" : "4%",
              }}
            />
            <Typography
              sx={{ marginTop: "1%", marginLeft: "1%", fontFamily: "monospace",color:"#009999" }}
            >
              summary
            </Typography>
            <Divider
              style={{
                backgroundColor: "gray",
                width: mediaViewPort ? "42%" : "35%",
                marginTop: mediaViewPort ? "4.5%" : "6%",
                marginLeft: "1%",
              }}
            />
          </Stack>
          <Typography
            sx={{
              fontSize: "12px",
              marginTop: "1%",
              marginLeft: mediaViewPort ? "2%" : "5%",
              textAlign: "justify",
              marginRight: mediaViewPort ? "2%" : "7%",
            }}
          >
            {resume11data.summary}
          </Typography>
          <Stack direction="row">
            <Divider
              style={{
                backgroundColor: "gray",
                width: mediaViewPort ? "42%" : "35%",
                marginTop: mediaViewPort ? "4.5%" : "6%",
                marginLeft: mediaViewPort ? "2%" : "4%",
              }}
            />
            <Typography
              sx={{ marginTop: "1%", marginLeft: "1%", fontFamily: "monospace" , fontWeight:"bold",color:"#009999"}}
            >
             skills
            </Typography>
            <Divider
              style={{
                backgroundColor: "gray",
                width: mediaViewPort ? "42%" : "35%",
                marginTop: mediaViewPort ? "4.5%" : "6%",
                marginLeft: "1%",
              }}
              />
              </Stack>
              <Stack direction="row">
                <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"15%":"3%",marginTop:"2%" }}>
                  <li> {resume11data.skills1} </li>
                  <li>{resume11data.skills2} </li>
                  <li>{resume11data.skills3} </li>
                  <li> {resume11data.skills4}</li>
                  <li>{resume11data.skills5} </li>
                </Typography>
                <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"20%":"3%",marginTop:"2%" }}>
                  <li> {resume11data.skills1} </li>
                  <li>{resume11data.skills2} </li>
                  <li>{resume11data.skills3} </li>
                  <li> {resume11data.skills4}</li>
                  <li>{resume11data.skills5} </li>
                </Typography>
              </Stack>
              <Stack direction="row">
            <Divider
              style={{
                backgroundColor: "gray",
                width: mediaViewPort ? "37%" : "35%",
                marginTop: mediaViewPort ? "4.5%" : "6%",
                marginLeft: mediaViewPort ? "3%" : "4%",
              }}
            />
            <Typography
              sx={{ marginTop: "1%", fontWeight:"bold",marginLeft: "1%", color:"#009999",fontFamily: "monospace" ,fontSize:"15px"}}
            >
              Education 
            </Typography>
            <Divider
              style={{
                backgroundColor: "gray",
                width: mediaViewPort ? "37%" : "35%",
                marginTop: mediaViewPort ? "4.5%" : "6%",
                marginLeft: "1%",marginRight:"3%"
              }}
            />
          </Stack>
          
          <Typography
                sx={{ fontSize: "12px", fontWeight: "bold", marginTop: "1%" ,textAlign:"center"}}
              >
                {resume11data.education1}
              </Typography>
              <Stack direction="row">
                <Typography sx={{ fontSize: "12px", marginLeft: "40%"}}>{resume11data.cgpa1} CGPA</Typography>
                <Typography sx={{ fontSize: "12px", marginLeft: "5%" }}>
                {resume11data.academic_year1}
                </Typography>
              </Stack>
  
              <Typography
                sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold" ,textAlign:"center"}}
              >
                {resume11data.education2}
              </Typography>
              <Stack direction="row">
                <Typography sx={{ fontSize: "12px", marginLeft: "40%" }}>{resume11data.cgpa2} CGPA</Typography>
                <Typography sx={{ fontSize: "12px", marginLeft: "5%" }}>
                 {resume11data.academic_year2}
                </Typography>
              </Stack>
  
              <Typography
                sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold",textAlign:"center" }}
              >
                {resume11data.education3}
              </Typography>
              <Stack direction="row">
                <Typography sx={{ fontSize: "12px" , marginLeft: "40%"}}>{resume11data.cgpa3} CGPA</Typography>
                <Typography sx={{ fontSize: "12px", marginLeft: "5%" }}>
               {resume11data.academic_year3}
                </Typography>
              </Stack>
              <Typography
                sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold" ,textAlign:"center"}}
              >
                {resume11data.education4}
              </Typography>
              <Stack direction="row" >
                <Typography sx={{ fontSize: "12px", marginLeft: "40%" }}>{resume11data.cgpa4} CGPA</Typography>
                <Typography sx={{ fontSize: "12px", marginLeft: "5%" }}>
                 {resume11data.academic_year4}
                </Typography>
              </Stack>
  
  
          
        <Stack direction="row">
            <Divider
              style={{
                backgroundColor: "gray",
                width: mediaViewPort ? "37%" : "35%",
                marginTop: mediaViewPort ? "4.5%" : "6%",
                marginLeft: mediaViewPort ? "2%" : "4%",
              }}
            />
            <Typography
              sx={{ marginTop: "1%", marginLeft: "1%", fontFamily: "monospace",color:"#009999" }}
            >
             languages
            </Typography>
            <Divider
              style={{
                backgroundColor: "gray",
                width: mediaViewPort ? "37%" : "35%",
                marginTop: mediaViewPort ? "4.5%" : "6%",
                marginLeft: "1%",
              }}
            />
          </Stack>
          <Typography sx={{
          fontSize:"13px",
      textAlign:"center",
      marginTop:"2%"
        }}>{resume11data.languages}</Typography>
  
       <Stack direction="row">
            <Divider
              style={{
                backgroundColor: "gray",
                width: mediaViewPort ? "30%" : "25%",
                marginTop: mediaViewPort ? "4.5%" : "6%",
                marginLeft: mediaViewPort ? "3%" : "4%",
              }}
            />
            <Typography
              sx={{ marginTop: "1%", marginLeft: "1%", fontFamily: "monospace",color:"#009999" }}
            >
            technicalskills
            </Typography>
            <Divider
              style={{
                backgroundColor: "gray",
                width: mediaViewPort ? "34%" : "30%",
                marginTop: mediaViewPort ? "4.5%" : "6%",
                marginLeft: "1%",
              }}
            />
          </Stack>
          <Typography sx={{fontSize:"13px",marginLeft:mediaViewPort?"40%":"40%",marginTop:"1%"}}>
          
          <li>{resume11data.technicalskills1}  </li>
          <li>{resume11data.technicalskills2}   </li>
          <li>{resume11data.technicalskills3}  </li>
          <li> {resume11data.technicalskills4}  </li>
          <li> {resume11data.technicalskills5} </li>
         
        </Typography>
  
      
        </Box>
      </>
    );
  }
  
  export default Resume14;
  