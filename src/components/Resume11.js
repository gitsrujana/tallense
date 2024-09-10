import { Card } from '@mui/material'
import React from 'react'
import {
    Box,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  import { resume11data } from "../data/resume11data";
function Resume11() {
    const mediaViewPort = useMediaQuery("(min-width:600px)");
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
        <Card sx={{
           width: mediaViewPort ? "98" : "95%",
           height: mediaViewPort ? "10%" : "10%",
           border: "10px solid gray",
           borderRadius: 2,
           backgroundColor:"gray"

        }}>
 
        </Card>
        <Typography sx={{fontWeight:"bold",textAlign:"center",marginTop:"3%"}}>{resume11data.name}</Typography>
        <hr/>
        <Stack direction="row" sx={{ marginTop: "1%" }}>
          <Typography
            sx={{ fontSize: "12px", marginLeft: mediaViewPort ? "25%" : "12%" }}
          >
            {resume11data.email}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              marginLeft: "3%",
            }}
          >
            +91
            {resume11data.phone}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", marginLeft: mediaViewPort ? "3%" : "5%" }}
          >
            {resume11data.address}
          </Typography>
        </Stack>
        <hr/>
  <Grid container>
<Grid md={5} xs={12} sm={12} sx={{marginLeft:"10%"}}> 
<Typography sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:"5%"
      }}>SUMMARY</Typography>
     <Typography sx={{ fontSize: "12px" ,marginTop:"3%"}}>{resume11data.summary}</Typography>
  
     <Typography sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:"5%"
      }}>EDUCATION</Typography>
    
      <Typography sx={{fontSize:"12px",
       fontWeight:"bold",
       marginTop:"2%",
      }}>{resume11data.education1}</Typography> 
       <Stack direction="row">
      <Typography sx={{fontSize:"12px",
      }}>{resume11data.cgpa1} CGPA</Typography>
       <Typography  sx={{fontSize:"12px",
        marginLeft:"3%"
      }}>{resume11data.academic_year1}</Typography>
      </Stack>
     
      <Typography sx={{fontSize:"12px",
         marginTop:"2%",
         fontWeight:"bold"
      }}>{resume11data.education2}</Typography> 
       <Stack direction="row">
      <Typography sx={{fontSize:"12px",
      
      }}>{resume11data.cgpa2} CGPA</Typography>
      <Typography  sx={{fontSize:"12px",
        marginLeft:"3%"
      }}>{resume11data.academic_year2}</Typography>
      </Stack>
    
      <Typography sx={{fontSize:"12px",
        marginTop:"2%",
        fontWeight:"bold"
      }}>{resume11data.education3}</Typography> 
      <Stack direction="row">
      <Typography sx={{fontSize:"12px",
      }}>{resume11data.cgpa3} CGPA</Typography>
       <Typography  sx={{fontSize:"12px",
        marginLeft:"3%"
      }}>{resume11data.academic_year3}</Typography>
 </Stack>
 <Typography sx={{fontSize:"12px",
        marginTop:"2%",
        fontWeight:"bold"
      }}>{resume11data.education4}</Typography> 
      <Stack direction="row">
      <Typography sx={{fontSize:"12px",
      }}>{resume11data.cgpa4} CGPA</Typography>
       <Typography  sx={{fontSize:"12px",
        marginLeft:"3%"
      }}>{resume11data.academic_year4}</Typography>
     </Stack>
  

<Typography sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:"7%"
      }}>HOBBIES</Typography>
        <Typography sx={{fontSize:"13px",marginTop:"2%"}}>
      <li>{resume11data.hobbies1} </li>
      <li>{resume11data.hobbies2} </li>
      <li>{resume11data.hobbies3}  </li>
      <li> {resume11data.hobbies4} </li>
      </Typography> 
            </Grid> 
           <Grid md={4} xs={12} sm={12} sx={{marginLeft:"12%"}}>
           <Typography  sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:mediaViewPort?"7%":"2%"
      }}>SKILLS</Typography>
      <Typography sx={{fontSize:"13px",marginTop:"2%"}}>
        
        <li> {resume11data.skills1} </li>
        <li>{resume11data.skills2}  </li>
        <li>{resume11data.skills3}  </li>
        <li> {resume11data.skills4}</li>
        <li>{resume11data.skills5}  </li>
       
      </Typography>

      <Typography sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:mediaViewPort?"12%":"5%"
      }}>INTERNSHIP</Typography>
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

      <Typography sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:"5%"
      }}>LANGUAGES</Typography>
      <Typography sx={{
        fontSize:"13px",
      marginTop:"2%"
      }}>{resume11data.languages}</Typography>
      <Typography  sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:mediaViewPort?"5%":"2%"
      }}>TECHNICAL SKILLS</Typography>
      <Typography sx={{fontSize:"13px",marginTop:"2%"}}>
        
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

export default Resume11
