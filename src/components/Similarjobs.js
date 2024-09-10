import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Rating,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  import React from "react";
  import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
  import PlaceIcon from "@mui/icons-material/Place";
  
  function Similarjobs(props) {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
    return (
      <>
        <Grid container>
          <Card
            sx={{
              width: "75%",
              height: "80%",
              border: "1px solid skyblue",
              boxShadow:"1px 1px 1px skyblue",
              borderRadius: 3,
              backgroundColor: "white",
              marginLeft: mediaViewPort?"35%":"17%",
              marginTop:"10%"
          
            
              
            }}
          >
            <Grid md={12} xs={12} sm={12}>
              <CardMedia
                sx={{
                  width: "30%",
                  marginTop: "3%",
                  marginLeft: "5%",
                }}
                component="img"
                image={props.image}
                height="30px"
              />
            </Grid>
            <Grid md={12} xs={12} sm={12}>
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", marginTop: "0px", 
                 }}
                >
                  {props.role}
                </Typography>
                <Typography variant="subtitle2">{props.companyname}</Typography>
                <Stack direction="row" sx={{marginTop:"2%"}}>
                <Typography variant="subtitle2" sx={{width:"50%"}}>
                  <Rating
                    max={5}
                    sx={{
                      fontSize: "12px",
                    }}
                  />
                  {props.rating}
                </Typography>
                <Typography sx={{ display: "flex", marginTop: "0%" }}>
                  <PlaceIcon
                    sx={{
                      width: "15px",
                      height: "15px",
  
                      marginTop: "2%",
                    }}
                  />
                  <Typography variant="subtitle2" sx={{marginTop:"-2px"}}>{props.location}</Typography>
                </Typography>
                
                </Stack>
                <Typography sx={{ display: "flex", marginTop: "-1%" }}>
                  <WorkOutlineIcon
                    sx={{
                      width: "15px",
                      height: "15px",
                      marginTop: "2%",
                      marginRight:"2%"
                    }}
                  />
                  <Typography variant="subtitle2" sx={{marginTop:"3px"}}>{props.experiance}</Typography>
                </Typography>
            
              </CardContent>
            </Grid>
  
           
          </Card>
        </Grid>
      </>
    );
   
  }
  
  export default Similarjobs
  