import React from 'react'
import {Grid}  from '@mui/material'
import { descriotiondata } from '../data/descriptiondata';
import DescriptionPage from '../components/DescriptionPage';




function DescriptionSection() {
  return (
    <>
     <Grid Container sx={{marginTop:"100px"}}>
     {
       descriotiondata.map((item)=>{
            return(
                <Grid md={6} padding="15px" sx={{marginLeft:"10%"}}>
                    <DescriptionPage 
                role={item.role}
                  companyname={item.companyname}
                  rating={item.rating}
                  image={item.image}
                  experience={item.experience}
                  salary={item.salary}
                  location={item.location}
                  days={item.days}
                  openings={item.openings}
                  applicants={item.applicants}
                  description={item.description}
                  IndustryType={item.IndustryType}
                  Department={item.Department}
                  EmploymentType={item.EmploymentType}
                  RoleCategory={item.RoleCategory}
                  Education={item.Education}
                  aboutcompany={item.aboutcompany}


                   />
                </Grid>
            )
        })
     }
        </Grid> 
    </>
  )
}

export default DescriptionSection;
