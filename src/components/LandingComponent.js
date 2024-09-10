import { Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material';
const Search = styled('div')(() => ({
    position: 'relative',
  
  }));
  
  const SearchIconWrapper = styled('div')(() => ({
    padding: (0, 2),
    height: '50px',
    width:"98%",
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:"1%",
    
   borderRadius:20,
    border:"1px solid gray",
  }));
  
  const StyledInputBase = styled(InputBase)(() => ({
    color: 'red',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: (1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${(4)})`,
     
    },
  }));
function LandingComponent() {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>
      <Typography sx={{marginTop:mediaViewPort?"6%":"18%",
      textAlign:"center",
      fontSize:mediaViewPort?"20px":"12px",
      fontWeight:"bold"
      }}>Discover your ideal career opportunity today.</Typography>
      <Typography sx={{
        fontSize:mediaViewPort?"15px":"12px",
        textAlign:"center",
        fontWeight:"bold",
        marginTop:"1%",
        marginBottom:"3%"
      }}>2 lakh+ jobs for you to explore</Typography>
    
<Search>
<SearchIconWrapper>
            <Button sx={{marginLeft:"80%",
        fontWeight:"bold",
        textTransform:"none",
        backgroundColor:"white",
        color:"blue",
        borderRadius:4,
        width:"100px"
,        }}>Search</Button>
             
            </SearchIconWrapper>
            <StyledInputBase
            sx={{
              marginLeft:"11%",
             
              marginTop:"15px",
              fontSize:"15px",
              color:"black"
            }}
              placeholder="Enter skills/designations/companies"
            
              inputProps={{ 'aria-label': 'search' }}
            />
          
          </Search>
    </>
  )
}

export default LandingComponent
