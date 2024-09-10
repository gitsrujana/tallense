import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import { Accordion, AccordionDetails, AccordionSummary, alpha, Autocomplete, TextField, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const pages = ['jobs', 'companies', 'services'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const emp=[
  {label:"By online"},
  {label:"Tallenzz Hiring Suite"},
  {label:"Employer Login"}
]
const Search = styled('div')(() => ({
  position: 'relative',

}));

const SearchIconWrapper = styled('div')(() => ({
  padding: (0, 2),
  height: '30%',
  width:"100%",
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft:"-2%",
  borderRadius:10,
  border:"1px solid gray",
  marginTop:"13px"
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


function Navbar() {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{backgroundColor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <NavLink to={'/'} style={{textDecoration:'none' }}>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'blue',
              textDecoration: 'none',
            }}
          >
       talenzz
          </Typography>
</NavLink>
          
     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
     
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
           
            <Search>
            <SearchIconWrapper >
              <SearchIcon
             />
            </SearchIconWrapper>
            <StyledInputBase
            sx={{
              marginLeft:"6%",
              marginTop:"10%",
              fontSize:"12px"
            }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <NavLink to ={page} style={{textTransform:"none",textDecoration:"none"}}>
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <NavLink to={'/'} style={{textDecoration:'none' }}>
          <Typography
            variant="subtitle2"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              letterSpacing: '.0rem',
              color: 'blue',
              textDecoration: 'none',
              marginLeft:"5%"
            }}
          >
         tolenzz
          </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink to ={page} style={{textDecoration:"none", 
             }}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' , textTransform:"none"}}
              >
                {page}
              </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
             
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NavLink to={"EmployerLoginForm"} style={{textDecoration:"none"}}>
          <Typography sx={{color:"black",fontSize:"12px",marginRight:"3%",marginLeft:"-5%"}}>
            Employer Login</Typography></NavLink>
          <NavLink to="Login">
       <Button sx={{
        textTransform:"none",
        backgroundColor:"white",
        border:"1px solid blue",
        color:"blue",
        borderRadius:5,
        width:mediaViewPort?"60px":"0px",
        height:mediaViewPort?"30px":"5px",
        fontSize:mediaViewPort?"13px":"9px"
       }}>
        Login
       </Button>
       </NavLink>
       <NavLink to="Register">
       <Button sx={{
        textTransform:"none",
        fontSize:mediaViewPort?"13px":"9px",
        // backgroundColor:"orangered",
     marginLeft:"6px",
     marginRight:"35%",
      color:"blue",
        borderRadius:5,
        border:"1px solid blue",
        width:mediaViewPort?"100px":"2px",
        height:mediaViewPort?"30px":"15px",
        // ":hover":{
        //   backgroundColor:"orangered",
         
        //  },
       }}>
        Register
       </Button>
       </NavLink>
      
       {/* <Autocomplete
       disablePortal
      id="combo-box-demo"
      options={emp}
      sx={{ width: 300 }}
      renderInput={() => <Typography sx={{color:"black"}}>for Employer</Typography>}/>
       */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;