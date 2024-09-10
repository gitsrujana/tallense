import React from 'react'
import LocationByJobs from '../components/LocationByJobs'
import { locationbyjobsdata } from '../data/locationbyjobsdata'
import { Grid } from '@mui/material'

function LocationByJobsPage() {
  return (
    <>
       <Grid container >
        {
            locationbyjobsdata.map((item)=>{
                return(
                    <Grid md={2.5} xs={12} sm={12}  >
                        <LocationByJobs
                        image={item.image}
                        location={item. location}
                        software={item.software}
                        finance={item.finance}
                        banking={item.banking}
                        Retail={item.Retail}
                       Hr={item.HR}
                      
                        
                        />

                    </Grid>
                )
            })
        }
      </Grid>
    </>
  )
}

export default LocationByJobsPage
