import { Grid } from '@mui/material'
import React from 'react'
import { resume1data } from '../data/resume1data'
import Resume1 from '../components/Resume1'
import Resume2 from '../components/Resume2'
import Resume3 from '../components/Resume3'
import Resume5 from '../components/Resume5'
import Resume7 from '../components/Resume7'
import Resume4 from '../components/Resume4'
import Resume6 from '../components/Resume6'

function Resume1Page() {
  return (
    <>
       <Grid container>
        {
          resume1data.map((item)=>{
            return(
                <Grid>
                    {/* <Resume1
                    image={item.image}
                    name={item.name}
                    summary={item.summary}
                    education1={item.education1}
                    education2={item.educatiom2}
                 education3={item.education3}
                 education4={item.education4}
                    languages={item.languages}
                    hobbies1={item.hobbies1}
                   hobbies2={item.hobbies2}
                    hobbies3={item.hobbies3}
                   hobbies4={item.hobbies4}
                   companyname={item.companyname}
                   role={item.role}
                   duration={item.duration}
                   address={item.address}
                   email={item.email}
                   phone={item.phone}
                   technicalskills1={item.technicalskills1}
                   technicalskills2={item.technicalskills2}
                   technicalskills3={item.technicalskills3}
                   technicalskills4={item.technicalskills4}
                   technicalskills5={item.technicalskills5}
                   skills1={item.skills1}
                   skills2={item.skills2}
                   skills3={item.skills3}
                   skills4={item.skills4}
                   skills5={item.skills5}
                    />  */}
                     {/* <Resume2
                      fname={item.fname}
                    lname={item.lname}
                     summary={item.summary}
                     education1={item.education1}
                     education2={item.educatiom2}
                  education3={item.education3}
                  education4={item.education4}
                     languages={item.languages}
                     hobbies1={item.hobbies1}
                    hobbies2={item.hobbies2}
                     hobbies3={item.hobbies3}
                    hobbies4={item.hobbies4}
                    companyname={item.companyname}
                    role={item.role}
                    duration={item.duration}
                    address={item.address}
                    email={item.email}
                    phone={item.phone}
                    technicalskills1={item.technicalskills1}
                    technicalskills2={item.technicalskills2}
                    technicalskills3={item.technicalskills3}
                    technicalskills4={item.technicalskills4}
                    technicalskills5={item.technicalskills5}
                    skills1={item.skills1}
                    skills2={item.skills2}
                    skills3={item.skills3}
                    skills4={item.skills4}
                    skills5={item.skills5}
                    experiance={item.experiance}
                  job_description={item.job_description}
                     />  */}


           {/* <Resume3
                name={item.name}
                 summary={item.summary}
                 education1={item.education1}
                 education2={item.educatiom2}
              education3={item.education3}
              education4={item.education4}
                 languages={item.languages}
               
                companyname={item.companyname}
                role={item.role}
                duration={item.duration}
                address={item.address}
                email={item.email}
                phone={item.phone}
                skills1={item.skills1}
                skills2={item.skills2}
                skills3={item.skills3}
                skills4={item.skills4}
                skills5={item.skills5}
                experiance={item.experiance}
              job_description={item.job_description}
            /> */}
            {/* <Resume4
             image={item.image}
             name={item.name}
              summary={item.summary}
              education1={item.education1}
              education2={item.educatiom2}
           education3={item.education3}
           education4={item.education4}
              languages={item.languages}
              hobbies1={item.hobbies1}
             hobbies2={item.hobbies2}
              hobbies3={item.hobbies3}
             hobbies4={item.hobbies4}
             companyname={item.companyname}
             role={item.role}
             duration={item.duration}
             address={item.address}
             email={item.email}
             phone={item.phone}
             technicalskills1={item.technicalskills1}
             technicalskills2={item.technicalskills2}
             technicalskills3={item.technicalskills3}
             technicalskills4={item.technicalskills4}
             technicalskills5={item.technicalskills5}
             skills1={item.skills1}
             skills2={item.skills2}
             skills3={item.skills3}
             skills4={item.skills4}
             skills5={item.skills5}
             experiance={item.experiance}
           job_description={item.job_description}
            />  */}
            {/* <Resume5
                   image={item.image}
                   name={item.name}
                   summary={item.summary}
                   education1={item.education1}
                   education2={item.educatiom2}
                education3={item.education3}
                education4={item.education4}
                   languages={item.languages}
                   hobbies1={item.hobbies1}
                  hobbies2={item.hobbies2}
                   hobbies3={item.hobbies3}
                  hobbies4={item.hobbies4}
                  companyname={item.companyname}
                  role={item.role}
                  duration={item.duration}
                  address={item.address}
                  email={item.email}
                  phone={item.phone}
                  technicalskills1={item.technicalskills1}
                  technicalskills2={item.technicalskills2}
                  technicalskills3={item.technicalskills3}
                  technicalskills4={item.technicalskills4}
                  technicalskills5={item.technicalskills5}
                  skills1={item.skills1}
                  skills2={item.skills2}
                  skills3={item.skills3}
                  skills4={item.skills4}
                  skills5={item.skills5}
                  job_description={item.job_description}
                 />  */}
           {/* <Resume6
              name={item.name}
              summary={item.summary}
              education1={item.education1}
              education2={item.educatiom2}
           education3={item.education3}
           education4={item.education4}
              languages={item.languages}
              hobbies1={item.hobbies1}
             hobbies2={item.hobbies2}
              hobbies3={item.hobbies3}
             hobbies4={item.hobbies4}
             companyname={item.companyname}
             role={item.role}
             duration={item.duration}
             address={item.address}
             email={item.email}
             phone={item.phone}
             technicalskills1={item.technicalskills1}
             technicalskills2={item.technicalskills2}
             technicalskills3={item.technicalskills3}
             technicalskills4={item.technicalskills4}
             technicalskills5={item.technicalskills5}
             skills1={item.skills1}
             skills2={item.skills2}
             skills3={item.skills3}
             skills4={item.skills4}
             skills5={item.skills5}
             experiance={item.experiance}
           job_description={item.job_description}
            />  */}
               
                         <Resume7
                                    name={item.name}
                                    summary={item.summary}
                                    education1={item.education1}
                                    education2={item.educatiom2}
                                 education3={item.education3}
                                 education4={item.education4}
                                    languages={item.languages}
                                    hobbies1={item.hobbies1}
                                   hobbies2={item.hobbies2}
                                    hobbies3={item.hobbies3}
                                   hobbies4={item.hobbies4}
                                   companyname={item.companyname}
                                   role={item.role}
                                   duration={item.duration}
                                   address={item.address}
                                   email={item.email}
                                   phone={item.phone}
                                   technicalskills1={item.technicalskills1}
                                   technicalskills2={item.technicalskills2}
                                   technicalskills3={item.technicalskills3}
                                   technicalskills4={item.technicalskills4}
                                   technicalskills5={item.technicalskills5}
                                   skills1={item.skills1}
                                   skills2={item.skills2}
                                   skills3={item.skills3}
                                   skills4={item.skills4}
                                   skills5={item.skills5}
                                   job_description={item.job_description}
                               /> 
                </Grid>
            )
          })
        }
       </Grid>
    </>
  )
}

export default Resume1Page
