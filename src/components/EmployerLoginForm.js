import React,{useState,useRef,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import { Stack } from '@mui/material';
import usePersist from '../hooks/usePersist.js';
import { setToken } from '../app/index.js';
import { useLoginMutation } from './features/auth/authApiSlice.js';
import { setCredentials } from './features/auth/authSlice.js';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function EmployerLoginForm() {
  const userRef = useRef();
  const errRef = useRef();

  const [EmailID,setEmailID] = useState();
  const [password,setPassword] = useState();
  const [errMsg,setErrMsg] = useState();
  const [persist, setPersist] = usePersist()
  const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, {data,  isLoading, isSuccess,isError,error }] = useLoginMutation()

    useEffect(() => {
      userRef.current.focus()
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [EmailID, password])

  useEffect(() => {
    console.log("error",isError)
    if(isSuccess){
      console.log("isSuccess",isSuccess)
    }else if(isError){
      console.log("error",error)
      toast.error(error.data.message)
    }
}, [isLoading])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const { accessToken } = await login({ EmailID, password }).unwrap()
        dispatch(setCredentials({ accessToken }));
        dispatch(setToken({accessToken}))
        setEmailID('')
        setPassword('')
        navigate('/dashboard')
    } catch (err) {
        if (!err.status) {
            toast.error('No Server Response');
        } else if (err.status === 400) {
            toast.error('Missing EmailID or Password')
        } else if (err.status === 401) {
            toast.error('Unauthorized');
        } else {
            setErrMsg(err.data?.message);
        }
        
    }
}

const handleUserInput = (e) => setEmailID(e.target.value)
const handlePwdInput = (e) => setPassword(e.target.value)
const handleToggle = () => setPersist(prev => !prev)
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Log in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              ref={userRef}
              required
              fullWidth
              id="emailid"
              label="Email ID"
              name="emailid"
              autoComplete="emailid"
              value={EmailID}
              onChange={handleUserInput}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={handlePwdInput}
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Stack direction="row">
            <FormControlLabel control={<Checkbox defaultChecked id="persist"
                            onChange={handleToggle}
                            checked={persist}/>} label="Trust this device" />
                            <NavLink to={'/EmployeeMobileVerification'}> <Typography sx={{marginTop:"8%",marginLeft:"0%"}}>
                              login with otp
                              </Typography>
                              </NavLink>
                              </Stack>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/RegistePage" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}