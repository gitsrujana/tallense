import { Grid } from '@mui/material'
import React from 'react'
import { jobsbyroledata } from '../data/jobsbyroledata'
import JobsByRoleComponent from '../components/JobsByRoleComponent'

function JobsByRolePage() {
  return (
    <>
    
      <Grid container>
        {
            jobsbyroledata.map((item)=>{
                return(
                    <Grid md={2.5} xs={12} sm={12} >
                        <JobsByRoleComponent
                        image={item.image}
                        role={item.role}
                        fresher={item.fresher}
                        twoyrs = {item.twoyrs}
                        fiveyrs={item.fiveyrs}
                        morethanfiveyrs={item.morethanfiveyrs}
                        />
                    </Grid>
                )
            })
}
      </Grid>
    </>
  )
}

export default JobsByRolePage
