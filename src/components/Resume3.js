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
import { resume11data } from "../data/resume11data";

function Resume3() {
  const mediaViewPort = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{
          width: mediaViewPort ? "45%" : "90%",
          height: mediaViewPort ? "100%" : "100%",
          border: "5px solid gray",
          borderRadius: 5,
          marginTop: mediaViewPort ? "15%" : "15%",
          marginLeft: mediaViewPort ? "25%" : "5%",
          backgroundColor: "whitesmoke",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", marginTop: "3%", textAlign: "center" }}
        >
          {resume11data.name}
        </Typography>
        <Stack direction="row" sx={{ marginTop: "1%", marginLeft: "10%" }}>
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
        <Divider sx={{backgroundColor:"gray"}} />

        <Grid container>
          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "wheat",
                border: "2pX solid wheat",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "oblique",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "1%",
                }}
              >
                summary
              </Typography>
            </Card>
          </Grid>

          <Grid md={8} xs={12} sm={12} sx={{ marginLeft: "2%",marginTop:"2%" }}>
            <Typography sx={{ fontSize: "12px" }}>{resume11data.summary}</Typography>
            <Divider sx={{backgroundColor:"gray"}} />
          </Grid>

          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "wheat",
                border: "2pX solid wheat",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "10%" : "2%",
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
          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "wheat",
                border: "2pX solid wheat",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "20%" : "2%",
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
          </Grid>
          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "wheat",
                border: "2pX solid wheat",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "20%" : "2%",
                }}
              >
                Education and training
              </Typography>
            </Card>
          </Grid>
          <Grid md={8} xs={12} sm={12} sx={{ marginLeft: "2%" }}>
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
            <Divider sx={{backgroundColor:"gray"}}/>
          </Grid>
          <Grid md={3} xs={12} sm={12}>
            <Card
              sx={{
                height: "90%",
                backgroundColor: "wheat",
                border: "2pX solid wheat",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontStyle: "oblique",
                  textAlign: "center",
                  marginTop: mediaViewPort ? "12%" : "2%",
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
                marginTop: "5%",
                textAlign: "center",
              }}
            >
              {resume11data.languages}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Resume3;
