import React from 'react'
import {
    Box,
    Card,
    CardMedia,
    Divider,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import PhoneIcon from '@mui/icons-material/Phone';
  import MailIcon from '@mui/icons-material/Mail';
import { resume11data } from '../data/resume11data';
function Resume5() {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>
       <Box sx={{
        width:mediaViewPort?"40%":"90%",
        height:mediaViewPort?"100%":"100%",
        border:"5px solid aliceblue",
        borderRadius:10,
        marginTop:mediaViewPort?"15%":"17%",
        marginLeft:mediaViewPort?"25%":"5%",
        backgroundColor:"white"
       
     }}>
          <Card sx={{
            backgroundColor:"#2d5986",
            width:mediaViewPort?"50%":"50%",
            height:mediaViewPort?"1.5%":"0.2%",
           marginLeft:"25%",
           marginTop:"-1%"
          }}> </Card>
          <Grid container>
            <Grid md={3} xs={12} sm={12} sx={{marginLeft:"5%"}}>
              
              <CardMedia sx={{
                marginTop:"10%",
               width:"60%"
              }}
              component='img'
              image={resume11data.image}
              height='120'
              />
              <Divider sx={{marginTop:"9%",backgroundColor:"gray"}}/>
              <Card sx={{
            backgroundColor:"#2d5986",
            width:"85%",
            height:"1%",
           marginLeft:mediaViewPort?"1%":"-4%",
           marginTop:"-1%"
          }}> </Card>
            </Grid>
            <Grid md={7} xs={12} sm={12} sx={{marginLeft:mediaViewPort?"0%":"4%"}}>
                <Typography  sx={{fontWeight:"bold",
              marginTop:"3%",
              color:"#009999",
              fontSize:"19px"
             }}>{resume11data.name}</Typography>
             <Stack direction='row' sx={{marginTop:"3%"}}>
                <LocationOnIcon style={{height:"2%",width:"5%"}}/>
                <Typography sx={{ fontSize: "12px",marginLeft:"2%" }}>{resume11data.address}</Typography>
             </Stack>
             <Stack  direction='row' sx={{marginTop:"3%"}}>
                <PhoneIcon style={{height:"2%",width:"5%"}}/>
                <Typography sx={{ fontSize: "12px",marginLeft:"2%" }}>+91{resume11data.phone}</Typography>
             </Stack>
             <Stack  direction='row' sx={{marginTop:"3%"}}>
                <MailIcon style={{height:"2%",width:"5%"}}/>
                <Typography sx={{ fontSize: "12px",marginLeft:"2%" }}>{resume11data.email}</Typography>
             </Stack>
             <Divider sx={{marginTop:mediaViewPort?"6.8%":"2%",backgroundColor:"gray"}}/>
             
             </Grid>
                
              <Grid md={3} xs={12} sm={12} sx={{marginTop:"2%"}}>

              <Typography sx={{
              fontStyle:"oblique",
              fontSize:"14px",
              fontWeight:"bold",
              textAlign:"center",
             
              color:"#009999",
             }}>summary</Typography>
             <Divider sx={{marginTop:mediaViewPort?"58%":"2%",marginLeft:mediaViewPort?"15%":"1%" ,backgroundColor:"gray"}}/>
             <Card sx={{
            backgroundColor:"#2d5986",
            width:mediaViewPort?"90%":"50%",
            height:"2%",
           marginLeft:mediaViewPort?"15%":"1%",
           marginTop:mediaViewPort?"-1%":"0%"
          }}> </Card>
                </Grid>
                <Grid md={8} xs={12} sm={12} sx={{marginLeft:"2%",marginTop:"2%"}}>
                <Typography sx={{ fontSize: "12px" }}>{resume11data.summary}</Typography>
                <Divider sx={{backgroundColor:"gray"}}/>
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
            <Divider sx={{marginTop:mediaViewPort?"42%":"2%" ,marginLeft:"15%",backgroundColor:"gray"}}/>
            <Card sx={{
            backgroundColor:"#2d5986",
            width:mediaViewPort?"90%":"50%",
            height:"3%",
           marginLeft:mediaViewPort?"15%":"2%",
           marginTop:mediaViewPort?"-1%":"0%"
          }}> </Card>
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
              <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"12%":"2%",marginTop:"2%"  }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
            </Stack>
            <Divider sx={{backgroundColor:"gray",marginTop:"0%"}}/>
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
            <Divider sx={{marginTop:mediaViewPort?"90%":"2%" ,marginLeft:"15%",backgroundColor:"gray"}}/>
            <Card sx={{
            backgroundColor:"#2d5986",
            width:mediaViewPort?"90%":"50%",
            height:"2%",
           marginLeft:mediaViewPort?"15%":"2%",
           marginTop:mediaViewPort?"-1%":"0%"
          }}> </Card>
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
            <Divider sx={{backgroundColor:"gray"}}/>
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
            <Divider sx={{marginTop:mediaViewPort?"58%":"2%" ,marginLeft:"15%",backgroundColor:"gray"}}/>
            <Card sx={{
            backgroundColor:"#2d5986",
            width:mediaViewPort?"90%":"50%",
            height:"2%",
           marginLeft:mediaViewPort?"15%":"2%",
           marginTop:mediaViewPort?"-2%":"0%"
          }}> </Card>
                </Grid>
                <Grid md={8} xs={12}sm={12} sx={{marginLeft:"2%",marginTop:"3%"}}>
                <Typography
              sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold" }}
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
            <Divider sx={{backgroundColor:"gray"}}/>
            </Grid>
            <Grid md={3}xs={12} sm={12} sx={{marginTop:"5%"}}>
            <Typography   sx={{ fontWeight: "bold",
                fontSize: "14px",
                fontStyle:"oblique",
               marginLeft:"10%",
                marginTop: mediaViewPort ? "10%" : "2%",
                color:"#009999",
            }}>Technical skills</Typography>
            <Divider sx={{marginTop:mediaViewPort?"25%":"2%" ,marginLeft:"15%",backgroundColor:"gray"}}/>
            <Card sx={{
            backgroundColor:"#2d5986",
            width:mediaViewPort?"90%":"50%",
            height:"3%",
           marginLeft:mediaViewPort?"15%":"2%",
           marginTop:mediaViewPort?"-1%":"0%"
          }}> </Card>
            </Grid>
            <Grid md={8}xs={12} sm={12} sx={{marginTop:"3%"}}>
           
        <Stack direction='row'>
        <Typography sx={{fontSize:"13px",marginTop:"2%",marginLeft:"5%"}}>
        <li>{resume11data.technicalskills1}  </li> 
         <li>{resume11data.technicalskills2}</li>
         <li>{resume11data.technicalskills3}  </li></Typography>
         <Typography  sx={{fontSize:"13px",marginTop:"5%",marginLeft:"8%"}}>
           <li> {resume11data.technicalskills4}  </li>
         <li> {resume11data.technicalskills5} </li>
         </Typography>
         </Stack>
         <Divider  sx={{marginTop:mediaViewPort?"5%":"2%" ,marginLeft:"2%",backgroundColor:"gray"}}/>
         </Grid>
      <Grid md={3}xs={12} sm={12} sx={{marginTop:"5%"}}>
            <Typography
              sx={{ fontWeight: "bold",
                fontSize: "14px",
                fontStyle:"oblique",
                textAlign:"center",
                marginTop: mediaViewPort ? "6%" : "2%",
                color:"#009999",
            }}
            >
              Languages
            </Typography>
            </Grid>
            <Grid md={8}xs={12} sm={12} sx={{marginTop:"3%"}}>
            <Typography
              sx={{
                fontSize: "13px",marginTop:"5%",textAlign:"center"
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

export default Resume5
