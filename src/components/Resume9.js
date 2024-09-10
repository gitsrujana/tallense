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
  import { resume11data } from "../data/resume11data";
function Resume9() {
    const mediaViewPort = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{
          width: mediaViewPort ? "43%" : "90%",
          height: mediaViewPort ? "100%" : "100%",
          border: "5px solid whitesmoke",
          borderRadius: 5,
          marginTop: mediaViewPort ? "15%" : "15%",
          marginLeft: mediaViewPort ? "25%" : "5%",
          backgroundColor: "whitesmoke",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", marginTop: "3%",textAlign:"center" }}
        >
          {resume11data.name}
        </Typography>
        <Stack direction="row" sx={{ marginTop: "1%", marginLeft:mediaViewPort? "25%":"10%" }}>
          <Typography
            sx={{
              fontSize: "12px",
            }}
          >
            +91
            {resume11data.phone}
          </Typography>
          <Typography sx={{ fontSize: "12px", marginLeft: "5%" }}>
            {resume11data.email}
          </Typography>
          <Typography sx={{ fontSize: "12px", marginLeft: "5%" }}>
            {resume11data.address}
          </Typography>
        </Stack>
        <Divider sx={{backgroundColor:"gray",marginTop:"2%"}} />

        <Grid container>
          <Grid md={3} xs={12} sm={12} sx={{marginTop:"0.1%"}}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#009999",
                border: "2pX solid #009999",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "oblique",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop:mediaViewPort? "10%":"2%",
                  color:"whitesmoke"
                }}
              >
                summary
              </Typography>
            </Card>
          </Grid>

          <Grid md={8} xs={12} sm={12} sx={{ marginLeft: "2%",marginTop:"3%" }}>
            <Typography sx={{ fontSize: "12px" }}>{resume11data.summary}</Typography>
            <Divider sx={{backgroundColor:"gray"}} />
          </Grid>

          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#009999",
                border: "2pX solid #009999",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "10%" : "2%",
                  color:"whitesmoke"
                }}
              >
                Skills
              </Typography>
            </Card>
          </Grid>
          <Grid md={8} xs={12} sm={12} sx={{ marginLeft: "2%" }}>
            <Stack direction="row">
              <Typography sx={{ fontSize: "13px", marginTop: "2%" }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  marginLeft: mediaViewPort ? "12%" : "2%",
                  marginTop: "2%",
                }}
              >
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
            </Stack>
            <Divider sx={{backgroundColor:"gray"}}/>
          </Grid>
          {/* <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#009999",
                border: "2pX solid #009999",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "20%" : "2%",
                  color:"whitesmoke"
                }}
              >
                Experiance
              </Typography>
            </Card>
          </Grid>
          <Grid md={8} xs={12} sm={12} sx={{ marginLeft: "2%" }}>
            <Typography sx={{ fontSize: "13px", marginTop: "2%" }}>
              {resume11data.experiance}
            </Typography>
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
          </Grid> */}

        

          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#009999",
                border: "2pX solid #009999",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "20%" : "2%",
                  color:"whitesmoke"
                }}
              >
                Education 
              </Typography>
            </Card>
          </Grid>
          <Grid md={8} xs={12} sm={12} sx={{ marginLeft: "2%" }}>
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

          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#009999",
                border: "2pX solid #009999",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "9%" : "2%",
                  color:"whitesmoke"
                }}
              >
             Internship
              </Typography>
            </Card>
             </Grid>
             <Grid md={8} xs={12} sm={12} sx={{ marginLeft: "3%" }}>
             <Stack direction='row'>
      <Typography sx={{fontSize:"14px",
      marginTop:"2%",
        fontWeight:"bold",
      }}>Company name:</Typography>
      <Typography sx={{fontSize:"14px",
      marginTop:"2%",
         marginLeft:"2%"
      }}>{resume11data.companyname}</Typography>
      </Stack>
      <Stack direction='row'>
      <Typography sx={{fontSize:"14px",
        fontWeight:"bold",
      }}>Role:</Typography>
      <Typography sx={{fontSize:"14px",
         marginLeft:"2%"
      }}>{resume11data.role}</Typography>
      </Stack>
      <Stack direction='row'>
      <Typography sx={{fontSize:"14px",
        fontWeight:"bold",
      }}>Duration:</Typography>
      <Typography sx={{fontSize:"14px",
         marginLeft:"2%"
      }}>{resume11data.duration}</Typography>
      </Stack>
            <Divider sx={{backgroundColor:"gray",marginTop:"4%"}}/>
          </Grid>
          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#009999",
                border: "2pX solid #009999",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "9%" : "2%",
                  color:"whitesmoke"
                }}
              >
                Languages
              </Typography>
            </Card>
             </Grid>
          <Grid md={8} xs={12} sm={12} sx={{ marginLeft: "2%" }}>
            <Typography
              sx={{
                fontSize: "13px",
                marginTop: "2%",
                textAlign: "center",
              }}
            >
              {resume11data.languages}
            </Typography>
            <Divider sx={{backgroundColor:"gray"}}/>
          </Grid>

          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#009999",
                border: "2pX solid #009999",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "10%" : "2%",
                  color:"whitesmoke"
                }}
              >
              Technical Skills
              </Typography>
            </Card>
          </Grid>
          <Grid md={8} xs={12} sm={12} sx={{ marginLeft: "2%" }}>
            <Stack direction="row">
            <Typography sx={{fontSize:"13px",marginLeft:"15%"}}>
            <li> {resume11data.technicalskills4}  </li>
            <li> {resume11data.technicalskills5} </li>
        <li>{resume11data.technicalskills1}  </li>
        <li>{resume11data.technicalskills2}   </li>
        <li>{resume11data.technicalskills3}  </li>
       
       
      </Typography>
      <Typography sx={{fontSize:"13px",marginLeft:"15%"}}>
        
        <li>{resume11data.technicalskills1}  </li>
        <li>{resume11data.technicalskills2}   </li>
        <li>{resume11data.technicalskills3}  </li>
        <li> {resume11data.technicalskills4}  </li>
        <li> {resume11data.technicalskills5} </li>
       
      </Typography>
            </Stack>
            <Divider sx={{backgroundColor:"gray"}}/>
          </Grid>
          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "95%",
                backgroundColor: "#009999",
                border: "2pX solid #009999",
                
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "10%" : "2%",
                  color:"whitesmoke"
                }}
              >
            Hobbies
              </Typography> </Card>
             
      </Grid>
        <Grid md={8} xs={12} sm={12} >
        <Typography sx={{fontSize:"13px", marginLeft: "30%",marginTop:"2%"}}>
      <li>{resume11data.hobbies1} </li>
      <li>{resume11data.hobbies2} </li>
      <li>{resume11data.hobbies3}  </li>
      <li> {resume11data.hobbies4} </li>
      </Typography>
           
            
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Resume9
