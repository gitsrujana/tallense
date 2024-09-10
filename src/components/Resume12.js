import React from 'react'
import {
    Box,
    Card,
    Divider,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
import { resume11data } from '../data/resume11data';
function Resume12() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>
       <Box
        sx={{
          width: mediaViewPort ? "40%" : "90%",
          height: mediaViewPort ? "100%" : "100%",
          border: "10px solid whitesmoke",
          borderRadius: 5,
          marginTop: mediaViewPort ? "5%" : "15%",
          marginLeft: mediaViewPort ? "25%" : "3%",
         
        }}
      >
      <Card  sx={{
          width: mediaViewPort ? "97%" : "95%",
          height: mediaViewPort ? "100%" : "100%",
          border: "10px solid gray",
          borderRadius: "25px 25px 0px 0px",
          backgroundColor:"gray",
        }}>
           <Stack direction="row" sx={{ marginTop: "3%" }}>
          <Typography
            sx={{ fontSize: "12px", marginLeft: mediaViewPort ? "25%" : "12%",color:"white" }}
          >
            {resume11data.email}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              marginLeft: "3%",
              color:"white"
            }}
          >
            +91
            {resume11data.phone}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", marginLeft: mediaViewPort ? "3%" : "5%" ,color:"white"}}
          >
            {resume11data.address}
          </Typography>
        </Stack>
      </Card>
      <Card sx={{
           width: mediaViewPort ? "97%" : "95%",
           height: mediaViewPort ? "2%" : "100%",
           border: "10px solid  #006666",
           marginTop: mediaViewPort ? "-1%" : "-1%",

           
          
      }}>
       </Card>

       <Typography sx={{fontWeight:"bold",textAlign:"center",marginTop:"3%",marginBottom:"5%"}}>{resume11data.name}</Typography>
       <Divider sx={{backgroundColor:"#006666"}}/>
      <Grid container>
    
              <Grid md={3} xs={12} sm={12} sx={{marginTop:mediaViewPort?"3%":"1"}}>

              <Typography sx={{
              fontStyle:"oblique",
              fontSize:"14px",
              fontWeight:"bold",
              textAlign:"center",
             
              color:"#009999",
             }}>summary</Typography>
        <Divider sx={{backgroundColor:"#006666",marginTop:mediaViewPort?"58.5%":"2%"}}/> 
                </Grid>
            
                <Grid md={8} xs={12} sm={12} sx={{marginLeft:"2%",marginTop:"2%"}}>

                <Typography sx={{ fontSize: "12px" }}>{resume11data.summary}</Typography>
              <Divider sx={{backgroundColor:"#006666",marginTop:"2%",marginLeft:"-3%"}}/> 
            </Grid>
              <Grid md={3} xs={12} sm={12} sx={{marginTop:"3%"}}>
                <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                fontStyle:"oblique",
                textAlign:"center",
                marginTop: mediaViewPort ? "10%" : "2%",
                color:"#009999",
              }}
            >
              Skills
            </Typography>
            <Divider sx={{backgroundColor:"#006666",marginTop:mediaViewPort?"47%":"2%"}}/> 
                </Grid>
              <Grid md={8} xs={12} sm={12} sx={{marginLeft:"2%",marginTop:"2%"}}>
                <Stack direction="row">
              <Typography sx={{ fontSize: "13px",marginTop:"2%" }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
              <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"12%":"1%",marginTop:"2%"  }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
            </Stack>
            <Divider sx={{backgroundColor:"#006666",marginTop:"2%",marginLeft:"-3%"}}/> 
             </Grid> 
             <Grid md={3} xs={12} sm={12} sx={{marginTop:"3%"}}>
             <Typography
              sx={{ fontWeight: "bold",
                fontSize: "14px",
                fontStyle:"oblique",
                textAlign:"center",
                marginTop: mediaViewPort ? "20%" : "2%", 
                color:"#009999",
            }}
            >
              Experiance
            </Typography>
            <Divider sx={{backgroundColor:"#006666",marginTop:mediaViewPort?"95.2%":"2%"}}/> 
             </Grid>
                <Grid md={8} xs={12} sm={12} sx={{marginLeft:"2%",marginTop:"3%"}}>
                <Typography sx={{fontSize:"13px",marginTop:"2%"}}>{resume11data.experiance}</Typography>
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
            <Divider sx={{backgroundColor:"#006666",marginTop:"2%",marginLeft:"-3%"}}/> 
                </Grid>
                <Grid md={3} xs={12}sm={12} sx={{marginTop:"3%"}}>
                <Typography
              sx={{ fontWeight: "bold",
                fontSize: "14px",
                fontStyle:"oblique",
                textAlign:"center",
                marginTop: mediaViewPort ? "20%" : "2%",
                color:"#009999",
            }}
            >
              Education and training
            </Typography>
            <Divider sx={{backgroundColor:"#006666",marginTop:mediaViewPort?"63.2%":"2%"}}/> 
                </Grid>
                <Grid md={8} xs={12}sm={12} sx={{marginLeft:"2%",marginTop:"3%"}}>
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
            <Divider sx={{backgroundColor:"#006666",marginTop:"2%",marginLeft:"-3%"}}/> 
            </Grid>
            <Grid md={3}xs={12} sm={12} >
            <Typography
              sx={{ fontWeight: "bold",
                fontSize: "14px",
                fontStyle:"oblique",
                textAlign:"center",
                marginTop: mediaViewPort ? "1%" : "1%",
                color:"#009999",
            }}
            >
              Languages
            </Typography>
            </Grid>
            <Grid md={8}xs={12} sm={12}>
            <Typography
              sx={{
                fontSize: "13px",marginTop:mediaViewPort?"1%":"%",textAlign:"center"
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

export default Resume12
