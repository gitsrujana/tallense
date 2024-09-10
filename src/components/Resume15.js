import React from "react";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { resume11data } from "../data/resume11data";
function Resume15() {
  const mediaViewPort = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{
          width: mediaViewPort ? "40%" : "90%",
          height: mediaViewPort ? "100%" : "100%",
          border: "10px solid aliceblue",
          borderRadius: 6,
          backgroundColor: "whitesmoke",
          marginTop: mediaViewPort ? "5%" : "15%",
          marginLeft: mediaViewPort ? "25%" : "3%",
        }}
      >
        <Grid container>
          <Grid md={12} sm={12} xs={12}>
            <Divider
              sx={{
                backgroundColor: "gray",
                width: "85%",
                marginLeft: "8%",
                marginTop: "4%",
              }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                marginTop: "2%",
                textAlign: "center",
              }}
            >
              {resume11data.name}
            </Typography>
            <Divider
              sx={{
                backgroundColor: "gray",
                width: "85%",
                marginLeft: "8%",
                marginTop: "1%",
              }}
            />
            <Stack direction="row">
              <Typography
                sx={{
                  fontSize: "12px",
                  marginLeft: mediaViewPort ? "25%" : "15%",
                }}
              >
                +91
                {resume11data.phone}
              </Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "1%" }}>
                {resume11data.email}
              </Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "1%" }}>
                {resume11data.address}
              </Typography>
            </Stack>
            <Divider
              sx={{
                backgroundColor: "gray",
                width: "85%",
                marginLeft: "8%",
                marginTop: "1%",
              }}
            />
          </Grid>
          <Grid md={12} xs={12} sm={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                textAlign: "center",
                textTransform: "lowercase",
              }}
            >
              SUMMARY
            </Typography>
            <Divider
              sx={{
                backgroundColor: "gray",
                width: "85%",
                marginLeft: "8%",
                marginTop: "%",
              }}
            />
            <Typography
              sx={{
                fontSize: "12px",
                marginTop: "1%",
                marginLeft: "9%",
                marginRight: "6%",
              }}
            >
              {resume11data.summary}
            </Typography>
          </Grid>
          <Divider
            sx={{
              backgroundColor: "gray",
              width: "85%",
              marginLeft: "8%",
              marginTop: "1%",
            }}
          />
          <Grid md={12} xs={12} sm={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                marginTop: mediaViewPort ? "%" : "2%",
                textAlign: "center",
                textTransform: "lowercase",
              }}
            >
              SKILLS
            </Typography>
            <Divider
              sx={{ backgroundColor: "gray", width: "85%", marginLeft: "8%" }}
            />
            <Stack direction="row">
              <Typography
                sx={{
                  fontSize: "13px",
                  marginLeft: mediaViewPort ? "10%" : "5%",
                }}
              >
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  marginLeft: mediaViewPort ? "15%" : "2%",
                }}
              >
                <li> {resume11data.skills1} </li>
                <li>{resume11data.skills2} </li>
                <li>{resume11data.skills3} </li>
                <li> {resume11data.skills4}</li>
                <li>{resume11data.skills5} </li>
              </Typography>
            </Stack>
            <Divider
              sx={{ backgroundColor: "gray", width: "85%", marginLeft: "8%" }}
            />
          </Grid>
          <Grid md={12} xs={12} sm={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                textAlign: "center",
                textTransform: "lowercase",
              }}
            >
              EXPERIANCE
            </Typography>
            <Divider
              sx={{ backgroundColor: "gray", width: "85%", marginLeft: "8%" }}
            />
            <Typography sx={{ fontSize: "13px", marginLeft: "10%" }}>
              {resume11data.experiance}
            </Typography>
            <Stack direction="row" sx={{ marginLeft: "10%" }}>
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

            <Stack direction="row" sx={{ marginLeft: "10%" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
                Role:
              </Typography>
              <Typography sx={{ fontSize: "13px", marginLeft: "2%" }}>
                {resume11data.role}
              </Typography>
            </Stack>

            <Typography
              sx={{ fontSize: "13px", fontWeight: "bold", marginLeft: "10%" }}
            >
              job_description:
            </Typography>
            <Typography sx={{ fontSize: "13px", marginLeft: "10%" ,marginRight:"8%"}}>
              {resume11data.job_description}
            </Typography>
          </Grid>
          <Divider
            sx={{ backgroundColor: "gray", width: "85%", marginLeft: "8%" }}
          />
          <Grid md={12} xs={12} sm={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                textAlign: "center",
                textTransform: "lowercase",
              }}
            >
              EDUCATION AND TRAINING
            </Typography>
            <Divider
              sx={{ backgroundColor: "gray", width: "85%", marginLeft: "8%" }}
            />
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                marginTop: "1%",
                textAlign: "center",
              }}
            >
              {resume11data.education1}
            </Typography>
            <Stack direction="row">
              <Typography
                sx={{
                  fontSize: "12px",
                  marginLeft: mediaViewPort ? "38%" : "32%",
                }}
              >
                {resume11data.cgpa1} CGPA
              </Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "2%" }}>
                {resume11data.academic_year1}
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: "12px",
                marginTop: "1%",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {resume11data.education2}
            </Typography>
            <Stack direction="row">
              <Typography
                sx={{
                  fontSize: "12px",
                  marginLeft: mediaViewPort ? "38%" : "32%",
                }}
              >
                {resume11data.cgpa2} CGPA
              </Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
                {resume11data.academic_year2}
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontSize: "12px",
                marginTop: "1%",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {resume11data.education3}
            </Typography>
            <Stack direction="row">
              <Typography
                sx={{
                  fontSize: "12px",
                  marginLeft: mediaViewPort ? "38%" : "32%",
                }}
              >
                {resume11data.cgpa3} CGPA
              </Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
                {resume11data.academic_year3}
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontSize: "12px",
                marginTop: "1%",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {resume11data.education4}
            </Typography>
            <Stack direction="row">
              <Typography
                sx={{
                  fontSize: "12px",
                  marginLeft: mediaViewPort ? "38%" : "32%",
                }}
              >
                {resume11data.cgpa4} CGPA
              </Typography>
              <Typography sx={{ fontSize: "12px", marginLeft: "3%" }}>
                {resume11data.academic_year4}
              </Typography>
            </Stack>
          </Grid>
          <Divider
            sx={{ backgroundColor: "gray", width: "85%", marginLeft: "8%" }}
          />
          <Grid md={12} xs={12} sm={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                textAlign: "center",
                textTransform: "lowercase",
              }}
            >
              LANGUAGES
            </Typography>
            <Divider
              sx={{ backgroundColor: "gray", width: "85%", marginLeft: "8%" }}
            />
            <Typography
              sx={{
                fontSize: "13px",
                textAlign: "center",
                marginTop: "2%",
              }}
            >
              {resume11data.languages}
            </Typography>
          </Grid>
         
       
          <Divider
            sx={{ backgroundColor: "gray", width: "85%", marginLeft: "8%",marginTop:"2%" }}
          />
          <Grid md={12} xs={12} sm={12}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                textAlign: "center",
                textTransform: "lowercase",
              }}
            >
              TECHNICAL SKILLS
            </Typography>
            <Divider
              sx={{ backgroundColor: "gray", width: "85%", marginLeft: "8%" }}
            />
            <Typography sx={{ fontSize: "13px", marginLeft: "35%" }}>
              <li>{resume11data.technicalskills1} </li>
              <li>{resume11data.technicalskills2} </li>
              <li>{resume11data.technicalskills3} </li>
              <li> {resume11data.technicalskills4} </li>
              <li> {resume11data.technicalskills5} </li>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Resume15;
