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
function Resume17() {
    const mediaViewPort = useMediaQuery("(min-width:600px)");
  return (
    <>
       <Box
        sx={{
          width: mediaViewPort ? "40%" : "90%",
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
              textAlign: "center",
              marginTop: "3%",
              color:"#0099cc",
              fontWeight:"bold"
             
            }}
          >
            {resume11data.name}
          </Typography>
          <Divider sx={{backgroundColor:"#0099cc",width:"80%",marginLeft:"10%"}}/>
        
          <Typography
              sx={{ fontSize: "12px",textAlign:"center" }}
            >
              {resume11data.address}
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
              {resume11data.email}
            </Typography>
           
              </Grid>
              <Grid
            md={12}
            xs={12}
            sm={12}
            sx={{ marginTop: "2%" }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "1%",textAlign:"center",color:"#0099cc" }}
            >
              summary
            </Typography>
            <Divider sx={{backgroundColor:"#0099cc"}}/>
            <Typography sx={{ fontSize: "12px",marginTop:"1%",marginLeft:"5%",marginRight:"5%" }}>{resume11data.summary}</Typography>
            </Grid>
            <Grid md={12} xs={12} sm={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                marginTop: mediaViewPort ? "3%" : "2%",
                 textAlign:"center",
              color:"#0099cc"
              }}
            >
              Skills
            </Typography>
            <Divider sx={{backgroundColor:"#0099cc"}}/>
            <Stack direction="row">
              <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"18%":"5%" }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
              <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"15%":"5%" }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
            </Stack>
            </Grid>
            <Grid md={12} xs={12} sm={12} >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "3%", textAlign:"center",
                color:"#0099cc" }}
            >
              Experiance
            </Typography>
            <Divider sx={{backgroundColor:"#0099cc"}}/>
            <Typography sx={{fontSize:"13px",marginLeft:"5%"}}>{resume11data.experiance}</Typography>
            <Stack direction="row">
              <Typography
                sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold" ,marginLeft:"5%"}}
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
              <Typography sx={{ fontSize: "13px", fontWeight: "bold",marginLeft:"5%" }}>
                Role:
              </Typography>
              <Typography sx={{ fontSize: "13px", marginLeft: "2%" }}>
                {resume11data.role}
              </Typography>
            </Stack>

            <Typography sx={{ fontSize: "13px", fontWeight: "bold",marginLeft:"5%" }}>
              job_description:
            </Typography>
            <Typography sx={{ fontSize: "13px" ,marginLeft:"5%",marginRight:"5%"}}>
              {resume11data.job_description}
            </Typography>
           </Grid>
           <Grid md={12} xs={12} sm={12} >
           <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "3%", textAlign:"center",
                color:"#0099cc" }}
            >
              Education and training
            </Typography>
            <Divider sx={{backgroundColor:"#0099cc"}}/>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "bold", marginTop: "1%" ,textAlign:"center"}}
            >
              {resume11data.education1}
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "12px" ,marginLeft:"38%"}}>{resume11data.cgpa1} CGPA</Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
               {resume11data.academic_year1}
              </Typography>
            </Stack>

            <Typography
              sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold",textAlign:"center" }}
            >
              {resume11data.education2}
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "12px",marginLeft:"38%" }}>{resume11data.cgpa2} CGPA</Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
              {resume11data.academic_year2}
              </Typography>
            </Stack>

            <Typography
              sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold" ,textAlign:"center"}}
            >
              {resume11data.education3}
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "12px",marginLeft:"38%" }}>{resume11data.cgpa3} CGPA</Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
               {resume11data.academic_year3}
              </Typography>
            </Stack>
            <Typography
              sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold",textAlign:"center" }}
            >
              {resume11data.education4}
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "12px" ,marginLeft:"38%"}}>{resume11data.cgpa4} CGPA</Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
               {resume11data.academic_year4}
              </Typography>
            </Stack>
            </Grid>
            <Grid md={12} xs={12} sm={12}  >

            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "3%" ,color:"#0099cc",textAlign:"center"}}
            >
             languages
            </Typography>
            <Divider sx={{backgroundColor:"#0099cc"}}/>
            <Typography
              sx={{
                fontSize: "13px",
                textAlign:"center",
                marginTop:"1%"
              }}
            >
              {resume11data.languages}
            </Typography>
           </Grid>
        
       
             <Grid md={12} xs={12} sm={12}  >
             <Typography  sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:mediaViewPort?"3%":"2%",
     textAlign:"center",
     color:"#0099cc"
      }}>Technical Skills</Typography>
      <Divider sx={{backgroundColor:"#0099cc"}}/>
      <Typography sx={{fontSize:"13px",marginLeft:"42%"}}>
        
        <li>{resume11data.technicalskills1}  </li>
        <li>{resume11data.technicalskills2}   </li>
        <li>{resume11data.technicalskills3}  </li>
        <li> {resume11data.technicalskills4}  </li>
        <li> {resume11data.technicalskills5} </li>
       
      </Typography>
      </Grid>


           </Grid>


      </Box>
    </>
  )
}

export default Resume17;
