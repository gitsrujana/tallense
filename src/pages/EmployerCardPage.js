import { Grid } from '@mui/material'
import React from 'react'
import { employercarddata } from '../data/employercarddata'
import EmployerCard from '../components/EmployerCard'

function EmployerCardPage() {
  return (
    <>
      <Grid container>
        {
            employercarddata.map((item)=>{
                return(
                    <Grid md={7} sm={12} xs={12} marginTop={"3%"}>
                        <EmployerCard
                        image={item.image}
                        title={item.title}
                        requirement1={item.requirement1}
                       requirement2={item.requirement2}
                        requirement3={item.requirement3}
                        requirement4={item.requirement4}
                        />
                    </Grid>
                )
            })
        }
      </Grid>
    </>
  )
}

export default EmployerCardPage
