import React from 'react'
import {Grid}  from '@mui/material'

import CardComponent from '../components/CardComponent'
import { carddata } from '../data/carddata'       

function CardPage() {
  return (
    <>
     <Grid Container sx={{marginTop:"100px"}}>
     {
       carddata.map((item)=>{
            return(
                <Grid md={3}  >
                    <CardComponent 
                role={item.role}
                  companyname={item.companyname}
                  rating={item.rating}
                  image={item.image}
                  experience={item.experience}
                  salary={item.salary}
                  location={item.location}
                  requirements={item.requirements}
                  skills={item.skills}
                  days={item.days}
                  applicants={item.applicants}

                   />
                </Grid>
            )
        })
     }
        </Grid> 
    </>
  )
}

export default CardPage
