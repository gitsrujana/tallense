import React from 'react'
import {
    Box,
    Divider,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
import { resume11data } from '../data/resume11data';
function Resume18() {
    const mediaViewPort = useMediaQuery("(min-width:600px)");
  return (
    <>
       <Box
        sx={{
          width: mediaViewPort ? "45%" : "90%",
          height: mediaViewPort ? "100%" : "100%",
          border: "10px solid aliceblue",
          borderRadius: 5,
          backgroundColor:"white",
          marginTop: mediaViewPort ? "5%" : "15%",
          marginLeft: mediaViewPort ? "25%" : "3%",
        }}
      >
           <Grid container>
            <Grid md={12} sm={12} xs={12}>
            <Typography
            sx={{
              fontSize: "20px",
              textAlign: "end",
              marginTop: "3%",
              marginRight:"4%",
              color:"#239090",
              fontWeight:"bold"
             
            }}
          >
            {resume11data.name}
          </Typography>
          <Divider sx={{backgroundColor:"#239090",width:"80%",marginLeft:"20%"}}/>
          <Divider sx={{backgroundColor:"#239090",width:"80%",marginLeft:"20%"}}/>
          <Stack direction="row" sx={{ marginTop: "3%" }}>
          <Typography
            sx={{ fontSize: "12px", marginLeft: mediaViewPort ? "40%" : "5%",color:"black" }}
          >
            {resume11data.email}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              marginLeft: "1%",
              color:"black"
            }}
          >
            +91
            {resume11data.phone}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", marginLeft: mediaViewPort ? "1%" : "1%" ,color:"black"}}
          >
            {resume11data.address}
          </Typography>
        </Stack>
        
           
              </Grid>
              <Grid
            md={12}
            xs={12}
            sm={12}
            sx={{ marginLeft: "6%", marginTop: "2%" }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "1%" ,color:"#239090"}}
            >
           Profile Summary
            </Typography>
            <Divider sx={{width:"20%",backgroundColor:"#239090"}}/>
            <Divider sx={{width:"20%",backgroundColor:"#239090"}}/>
            <Typography sx={{ fontSize: "12px",marginTop:"1%" }}>{resume11data.summary}</Typography>
            </Grid>
            <Grid container>
            <Grid md={6} xs={12} sm={12} >
             <Typography  sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:mediaViewPort?"1%":"2%",
        marginLeft:mediaViewPort?"12%":"5%",
        color:"#239090"
      }}>Technical Skills</Typography>
       <Divider sx={{width:"40%",backgroundColor:"#239090", marginLeft:mediaViewPort?"12%":"5%",}}/>
       <Divider sx={{width:"40%",backgroundColor:"#239090", marginLeft:mediaViewPort?"12%":"5%",}}/>
      <Typography sx={{fontSize:"13px",marginLeft:mediaViewPort?"12%":"5%"}}>
        
        <li>{resume11data.technicalskills1}  </li>
        <li>{resume11data.technicalskills2}   </li>
        <li>{resume11data.technicalskills3}  </li>
        <li> {resume11data.technicalskills4}  </li>
        <li> {resume11data.technicalskills5} </li>
       
      </Typography>
      </Grid>
      <Grid md={5} xs={12} sm={12} sx={{marginLeft:mediaViewPort?"6%":"6%"}}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                marginTop: mediaViewPort ? "1%" : "2%",
                color:"#239090"
              }}
            >
             Skills
            <Divider sx={{width:"20%",backgroundColor:"#239090"}}/>
            <Divider sx={{width:"20%",backgroundColor:"#239090"}}/>
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"%":"%" }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
              {/* <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"15%":"2%" }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography> */}
            </Stack>
            </Grid>
            </Grid>
            <Grid md={12} xs={12} sm={12}  sx={{marginLeft:"6%"}}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "1%" ,color:"#239090"}}
            >
         Experiance
            </Typography>
            <Divider sx={{width:"20%",backgroundColor:"#239090"}}/>
            <Divider sx={{width:"20%",backgroundColor:"#239090"}}/>
            <Typography sx={{fontSize:"13px"}}>{resume11data.experiance}</Typography>
            <Stack direction="row">
              <Typography
                sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold" }}
              >
                Company name:
              </Typography>
              <Typography
                sx={{ fontSize: "13px", marginTop: "1%", marginLeft: "2%" }}
              >
                {resume11data.companyname}
              </Typography>
            </Stack>

            <Stack direction="row">
              <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                Role:
              </Typography>
              <Typography sx={{ fontSize: "13px", marginLeft: "2%" }}>
                {resume11data.role}
              </Typography>
            </Stack>

            <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
              job_description:
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>
              {resume11data.job_description}
            </Typography>
           </Grid>
           <Grid md={12} xs={12} sm={12}  sx={{marginLeft:"6%"}}>
           <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "1%" ,color:"#239090"}}
            >
              Education and Training
            </Typography>
            <Divider sx={{width:"40%",backgroundColor:"#239090"}}/>
            <Divider sx={{width:"40%",backgroundColor:"#239090"}}/>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "bold", marginTop: "1%" }}
            >
              {resume11data.education1}
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "12px" }}>{resume11data.cgpa1} CGPA</Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
               {resume11data.academic_year1}
              </Typography>
            </Stack>

            <Typography
              sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold" }}
            >
              {resume11data.education2}
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "12px" }}>{resume11data.cgpa2} CGPA</Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
              {resume11data.academic_year2}
              </Typography>
            </Stack>

            <Typography
              sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold" }}
            >
              {resume11data.education3}
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "12px" }}>{resume11data.cgpa3} CGPA</Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
               {resume11data.academic_year3}
              </Typography>
            </Stack>
            <Typography
              sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold" }}
            >
              {resume11data.education4}
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "12px" }}>{resume11data.cgpa4} CGPA</Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
               {resume11data.academic_year4}
              </Typography>
            </Stack>
            </Grid>
          
            <Grid md={12} xs={12} sm={12}  sx={{marginLeft:"6%"}}>

            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "1%",color:"#239090" }}
            >
             Languages
            </Typography>
            <Divider sx={{width:"20%",backgroundColor:"#239090"}}/>
            <Divider sx={{width:"20%",backgroundColor:"#239090"}}/>
            <Typography
              sx={{
                fontSize: "13px",
                marginBottom:"5%"
              }}
            >
              {resume11data.languages}
            </Typography>
           </Grid>
         


           </Grid>


      </Box>
    </>
  )
}

export default Resume18;
