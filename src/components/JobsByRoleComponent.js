import {
  Card,
  CardMedia,
  Checkbox,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function JobsByRoleComponent(props) {
  const mediaViewPort = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Card
        sx={{
          width: "80%",
          height: mediaViewPort ? "90%" : "95%",
          marginTop: mediaViewPort ? "5%" : "3%",
          marginLeft: mediaViewPort ? "50%" : "10%",
          marginRight: mediaViewPort ? "1%" : "15%",
          border: "1px solid skyblue",
          borderRadius: 3,
        }}
      >
        <Grid
          container
          sx={{
            margin: "5%",
          }}
        >
          <Grid md={4} xs={12} sm={12}>
            <CardMedia
              sx={{ margin: "4%",
               width: "90px",
                height: "90px",
                marginLeft:mediaViewPort?"":"30%"
               }}
              component="img"
              image={props.image}
              height="100%"
            />
          </Grid>
         
          <Grid
            md={6}
            xs={12}
            sm={12}
            sx={{ marginLeft: mediaViewPort ? "10%" : "25%" }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              {props.role}
            </Typography>
            <Typography sx={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                fresher:
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>
                {props.fresher}&nbsp;Posts
              </Typography>
            </Typography>
            <Typography sx={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                1-2yrs:
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>
                {props.twoyrs}&nbsp;Posts
              </Typography>
            </Typography>
            <Typography sx={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                2-5yrs:
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>
                {props.fiveyrs}&nbsp;Posts
              </Typography>
            </Typography>
            <Typography sx={{ display: "flex" }}>
        
              <ChevronRightIcon
                sx={{
                  fontSize: "20px",
                  marginTop: "1px",
                  marginLeft: "-4%",
                }}
              />
              <Typography
                sx={{ fontWeight: "bold", fontSize: "13px", marginTop: "1%" }}
              >
                5yrs:
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>
                {props.morethanfiveyrs}&nbsp;Posts
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default JobsByRoleComponent;
