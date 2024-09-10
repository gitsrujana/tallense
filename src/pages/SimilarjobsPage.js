import { Grid } from '@mui/material'
import React from 'react'
import Similarjobs from '../components/Similarjobs'
import { similarjobsdata } from '../data/similarjobsdata'

function SimilarjobsPage() {
  return (
    <div>
         <Grid container >
        {
            similarjobsdata.map((item)=>{
                return(
                    <Grid md={2.7} xs={12} sm={12}  >
                        <Similarjobs
                         image={item.image}
                         role={item.role}
                         companyname={item.companyname}
                         rating={item.rating}
                         location={item.location}
                         experiance={item.experiance}
                      
                        
                        />

                    </Grid>
                )
            })
        }
      </Grid>
    </div>
  )
}

export default SimilarjobsPage
