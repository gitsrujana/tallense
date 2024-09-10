import {
    Box,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
import React from 'react'
import { resume11data } from "../data/resume11data";

function Resume7() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>
       <Box
        sx={{
          width: mediaViewPort ? "40%" : "90%",
          height: mediaViewPort ? "100%" : "100%",
          border: "10px solid aliceblue",
          borderRadius: 5,
          backgroundColor:"whitesmoke",
          marginTop: mediaViewPort ? "5%" : "15%",
          marginLeft: mediaViewPort ? "25%" : "3%",
        }}
      >
        <Box sx={{
             width: mediaViewPort ? "100%" : "100%",
             height: mediaViewPort ? "10%" : "6%",
             backgroundColor:"#006699",
             border:"2px solid white",
             borderRadius:5
        }}>
               <Typography 
                sx={{
                  fontWeight: "bold",
                  fontSize:mediaViewPort?"30px":"20px",
                  textTransform: "lowercase",
                   marginTop:"3%",
                   marginLeft:"5%",
                   color:"white",
                   textAlign:"center"
                }}
              >
                {resume11data.name}
              </Typography>
              <Stack direction="row" sx={{ marginTop: "1%"}}>
              <Typography sx={{ fontSize: "12px", marginLeft:mediaViewPort?"27%":"5%" ,color:"white"}}>
            {resume11data.address}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color:"white",
              marginLeft:"2%"
            }}
          >
            +91
            {resume11data.phone}
          </Typography>
          <Typography sx={{ fontSize: "12px", marginLeft: "2%",color:"white" }}>
            {resume11data.email}
          </Typography>
         
        </Stack>
        <Grid
            md={12}
            xs={12}
            sm={12}
            sx={{ marginLeft: "6%", marginTop: "7%" }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px",
                color:"#006699",
                marginTop: mediaViewPort?"4%":"15%" }}
            >
              SUMMARY
            </Typography>
            <Typography sx={{ fontSize: "12px",marginTop:"1%" }}>{resume11data.summary}</Typography>
            </Grid>
            <Grid md={12} xs={12} sm={12} sx={{marginLeft:"6%"}}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                marginTop: mediaViewPort ? "3%" : "2%",
                color:"#006699",
              }}
            >
              SKILLS
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"5%":"3%" }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
              <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"15%":"3%" }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
            </Stack>
            </Grid>
            <Grid md={12} xs={12} sm={12}  sx={{marginLeft:"6%"}}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", 
                color:"#006699",
                marginTop: "3%" }}
            >
              EXPERIANCE
            </Typography>
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
              sx={{ fontWeight: "bold", fontSize: "13px", 
                color:"#006699",
                marginTop: "3%" }}
            >
              EDUCATION AND TRAINING
            </Typography>

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
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "3%",color:"#006699", }}
            >
              LANGUAGES
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
              }}
            >
              {resume11data.languages}
            </Typography>
           </Grid>
        
         <Grid md={4} xs={12} sm={12}  sx={{marginLeft:"6%"}}>
             <Typography  sx={{fontWeight:"bold",
        fontSize:"13px",
        color:"#006699",
        marginTop:mediaViewPort?"5%":"2%"
      }}>SKILLS</Typography>
      <Typography sx={{fontSize:"13px"}}>
        
        <li> {resume11data.skills1} </li>
        <li>{resume11data.skills2}  </li>
        <li>{resume11data.skills3}  </li>
        <li> {resume11data.skills4}</li>
        <li>{resume11data.skills5}  </li>
       
      </Typography>
             </Grid>
             <Grid md={6} xs={12} sm={12}  sx={{marginLeft:"6%"}}>
             <Typography  sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:mediaViewPort?"5%":"2%",
        color:"#006699",
        marginLeft:"3%"
      }}>TECHNICAL SKILLS</Typography>
      <Typography sx={{fontSize:"13px",marginLeft:"8%"}}>
        
        <li>{resume11data.technicalskills1}  </li>
        <li>{resume11data.technicalskills2}   </li>
        <li>{resume11data.technicalskills3}  </li>
        <li> {resume11data.technicalskills4}  </li>
        <li> {resume11data.technicalskills5} </li>
       
      </Typography>
      </Grid>


        </Box>
      </Box>
    </>
  )
}

export default Resume7
