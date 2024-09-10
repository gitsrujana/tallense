import {
  Box,
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import {  orange } from "@mui/material/colors";
import { resume11data } from "../data/resume11data";
function Resume2() {
  const mediaViewPort = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{
          width: mediaViewPort ? "43%" : "90%",
          height: mediaViewPort ? "100%" : "100%",
          border: "5px solid gray",
          borderRadius: 3,
          marginTop: mediaViewPort ? "5%" : "15%",
          marginLeft: mediaViewPort ? "25%" : "5%",
        }}
      >
        <Grid container>
          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height:mediaViewPort? "99%":"100%",

                border: "4px solid whitesmoke",
                borderRadius:1,
                }}
            >
              <Avatar
                sx={{ bgcolor: orange[500] }}
                variant="square"
                style={{
                  width:mediaViewPort? "50%":"30%",
                  height:mediaViewPort? "10%":"30%",
                  marginLeft:mediaViewPort? "28%":"30%",
                  marginTop:mediaViewPort? "14%":"0%",
                  fontSize: "30px",
                  color: "green",
                }}
              >
                S
              </Avatar>
              <Typography 
                sx={{
                  fontWeight: "bold",
                  fontSize:"14px",
                  color: "green",
                 textAlign:"center",
                //   marginRight:mediaViewPort? "25%":"45%",
                  textTransform: "lowercase",
                   marginTop:mediaViewPort?"3%":"1%"
                }}
              >
                {resume11data.fname}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize:"14px",
                  color: "green",
                  textAlign: "center",
                //   marginRight:mediaViewPort? "25%":"42%",
                  textTransform: "lowercase",
                  marginTop:mediaViewPort?"2%":"1%"
                }}
              >
                {resume11data.lname}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                 marginTop: mediaViewPort?"5%":"1%",
                  textAlign: "center"
                }}
              >
                {resume11data.phone}
              </Typography>
              <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
                {resume11data.email}
              </Typography>
              <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
                {resume11data.address}
              </Typography>
            </Card>
          </Grid>

          <Grid
            md={7}
            xs={12}
            sm={12}
            sx={{ marginLeft: "6%", marginTop: "2%" }}
          >
            <Divider sx={{backgroundColor:"gray"}}/>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "3%" }}
            >
              SUMMARY
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>{resume11data.summary}</Typography>
            <Divider sx={{backgroundColor:"gray"}}/>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                marginTop: mediaViewPort ? "3%" : "2%",
              }}
            >
              SKILLS
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "13px" }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
              <Typography sx={{ fontSize: "13px", marginLeft: mediaViewPort?"12%":"5%" }}>
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
            </Stack>
            <Divider sx={{backgroundColor:"gray"}} />
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "3%" }}
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
            <Divider sx={{backgroundColor:"gray"}}/>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "3%" }}
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
               {resume11data.education3}
              </Typography>
            </Stack>
            <Typography
              sx={{ fontSize: "12px", marginTop: "1%", fontWeight: "bold" }}
            >
              {resume11data.education4}
            </Typography>
            <Stack direction="row">
              <Typography sx={{ fontSize: "12px" }}> {resume11data.cgpa4}CGPA</Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
               {resume11data.academic_year4}
              </Typography>
            </Stack>
            <Divider />

            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "3%" }}
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
        
            {/* <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "3%" }}
            >
              HOBBIES
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>
              <li>{resume11data.hobbies1} </li>
              <li>{resume11data.hobbies2} </li>
              <li>{resume11data.hobbies3} </li>
              <li> {resume11data.hobbies4} </li>
            </Typography>
            <Divider></Divider>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "3%" }}
            >
              INTERNSHIP
            </Typography>
            <Stack direction="row">
              <Typography
                sx={{ fontSize: "14px", marginTop: "2%", fontWeight: "bold" }}
              >
                Company name:
              </Typography>
              <Typography
                sx={{ fontSize: "14px", marginTop: "2%", marginLeft: "2%" }}
              >
                {resume11data.companyname}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                Role:
              </Typography>
              <Typography sx={{ fontSize: "14px", marginLeft: "2%" }}>
                {resume11data.role}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                Duration:
              </Typography>
              <Typography sx={{ fontSize: "14px", marginLeft: "2%" }}>
                {resume11data.duration}
              </Typography>
            </Stack> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Resume2;
