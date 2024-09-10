import React from 'react'
import {
    Box,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  import { resume11data } from "../data/resume11data";
function Resume10() {
    const mediaViewPort = useMediaQuery("(min-width:600px)");
  return (
    <>
       <Box
        sx={{
          width: mediaViewPort ? "35%" : "90%",
          height: mediaViewPort ? "100%" : "100%",
          border: "10px solid #4d79ff",
          borderRadius: 5,
          marginTop: mediaViewPort ? "5%" : "15%",
          marginLeft: mediaViewPort ? "25%" : "5%",
         
        }}
      >
  <Box
        sx={{
          width: mediaViewPort ? "96.5%" : "96%",
          height: mediaViewPort ? "90%" : "100%",
          border: "10px solid gray",
          borderRadius: 3,
          marginTop: mediaViewPort ? "%" : "%",
          marginLeft: mediaViewPort ? "" : "%",
        
        }}
      >

          <Grid container>
          <Grid md={4} xs={12} sm={12} sx={{marginLeft:mediaViewPort?"5%":"5%",
        marginTop:"3%"
    }}>
   
      <Stack direction='row' sx={{marginTop:"3%"}}>
      <Typography sx={{fontSize:"12px",
        fontWeight:"bold",
      }}>Address:</Typography>
      <Typography sx={{fontSize:"12px",
         marginLeft:"2%"
      }}>
        {resume11data.address}
      </Typography></Stack>
      <Stack direction='row'>
      <Typography sx={{fontSize:"12px",
        fontWeight:"bold"
      }}>Phone:</Typography>
      <Typography sx={{fontSize:"12px",
        marginLeft:"2%"
      }}>
     {resume11data.phone}
      </Typography></Stack>
      <Stack direction='row'>
      <Typography sx={{fontSize:"12px",
        fontWeight:"bold"
      }}>Email:</Typography>
      <Typography sx={{fontSize:"12px",
         marginLeft:"2%"
      }}>
    {resume11data.email}
      </Typography></Stack>
      
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
        marginTop:"5%"
      }}>LANGUAGES</Typography>
      <Typography sx={{
        fontSize:"13px",
      marginTop:"2%"
      }}>{resume11data.languages}</Typography>
    
      <Typography sx={{fontWeight:"bold",
        fontSize:"13px",
        marginTop:"5%"
      }}>HOBBIES</Typography>
        <Typography sx={{fontSize:"13px",marginTop:"2%"}}>
      <li>{resume11data.hobbies1} </li>
      <li>{resume11data.hobbies2} </li>
      <li>{resume11data.hobbies3}  </li>
      <li> {resume11data.hobbies4} </li>
      </Typography> 
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
    
          <Grid md={6} xs={12} sm={12} sx={{marginLeft:"8%",
        marginTop:"2%"
    }}>
      <Typography sx={{fontWeight:"bold"}}>{resume11data.name}</Typography>
    
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
        marginTop:"3%"
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
     
    </Grid>
          </Grid>

      </Box>
      </Box>
    </>
  )
}

export default Resume10
