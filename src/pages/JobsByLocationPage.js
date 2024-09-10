import { Grid } from '@mui/material'
import React from 'react'
import { jobsbylocationdata } from '../data/jobsbylocationdata'
import JobsByLocationComponent from '../components/JobsByLocationComponent'

function JobsByLocationPage() {
  return (
    <>
      <Grid container >
        {
            jobsbylocationdata.map((item)=>{
                return(
                    <Grid md={1.8} xs={12} sm={12}>
                        <JobsByLocationComponent
                        image={item.image}
                        place={item.place}
                        />
                    </Grid>
                )
            })
        }
      </Grid>
    </>
  )
}

export default JobsByLocationPage
