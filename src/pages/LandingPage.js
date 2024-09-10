import React from 'react'

import LandingComponent from '../components/LandingComponent'
import { Typography, useMediaQuery } from '@mui/material'
import ThumbnailSlider from '../components/ThumbanailSlider'
import { jobsintresteddata } from "../data/jobsintresteddata";
import {topcompanieshiringdata} from "../data/topcompanieshiringdata";
import TopCompaniesSlider from '../components/TopCompaniesSlider'
import JobsByRolePage from './JobsByRolePage'
import JobsByLocationPage from './JobsByLocationPage'
import JobsByIndustry from '../components/JobsByIndustry'
import LocationByJobsPage from './LocationByJobsPage'
import Similarjobs from '../components/Similarjobs';
import SimilarjobsPage from './SimilarjobsPage';





function LandingPage() {
  const mediaViewPort=useMediaQuery("(min-width:600px)")
  return (
    <>
    <LandingComponent/>
    <Typography sx={{fontWeight:"bold",
    color:"black",
    fontSize:mediaViewPort?"18px":"13px",
    textAlign:"center",
    marginTop:mediaViewPort?"5%":"10%"
    }}>Jobs you may be interested in</Typography>
   <ThumbnailSlider
   data={jobsintresteddata}
   />
   <Typography
    sx={{fontWeight:"bold",
    color:"black",
    fontSize:mediaViewPort?"18px":"13px",
    textAlign:"center",
    marginTop:mediaViewPort?"5%":"20%"
    }}
   >
    top companies hiring now
   </Typography>
 <TopCompaniesSlider
 data={topcompanieshiringdata}/> 
    <Typography
    sx={{
      fontSize:mediaViewPort?"18px":"13px",
      fontWeight:"bold",
      marginTop:mediaViewPort?"3%":"10%",
      textAlign:"center"
    }}
    >Jobs by roles</Typography>
  <JobsByRolePage/>
  <Typography
    sx={{
      fontSize:mediaViewPort?"18px":"13px",
      fontWeight:"bold",
      marginTop:mediaViewPort?"1%":"2%",
      textAlign:"center"
    }}
    >Jobs by location</Typography>
  <JobsByLocationPage/>
  
  <Typography
    sx={{
      fontSize:mediaViewPort?"18px":"13px",
      fontWeight:"bold",
      marginTop:mediaViewPort?"-2%":"2%",
      textAlign:"center"
    }}
    >Jobs by industry</Typography>
     <JobsByIndustry/>
  


     <Typography
    sx={{
      fontSize:mediaViewPort?"18px":"13px",
      fontWeight:"bold",
      marginTop:mediaViewPort?"3%":"3%",
      textAlign:"center"
    }}
    >Location by jobs</Typography>
  <LocationByJobsPage/>

  <Typography
    sx={{
      fontSize:mediaViewPort?"18px":"13px",
      fontWeight:"bold",
      marginTop:mediaViewPort?"3%":"3%",
      textAlign:"center"
    }}
    >similar jobs</Typography>

       <SimilarjobsPage/>
  
 
    </>
  )
}

export default LandingPage
