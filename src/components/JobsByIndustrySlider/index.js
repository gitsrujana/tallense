
import React, { useRef, useState } from 'react';
import { Box,  Grid, useMediaQuery } from "@mui/material";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { Navigation, Autoplay, Pagination, Grid as SwiperGrid } from 'swiper/modules';
//import { EffectFlip,Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css/effect-flip';
import JobsByIndustryComponent from "../JobsByIndustryComponent";
import { jobsbyindustrydata } from "../../data/jobsbyindustrydata";

 function JobsByIndustrySlider(props) {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
    const ProgressCircle = useRef(null);
    const ProgressContent = useRef(null);
     const onAutoplayTimeLeft = (s, time, progress) => {
        ProgressCircle.current.style.setProperty('--progress', 1);
        ProgressContent.current.textContent = '${math.cell(time/1000)}$';
    }

    return (
        <>
            <Box sx={{ paddingLeft: mediaViewPort? '10%':"5%",
            paddingRight:mediaViewPort?"10%":"5%",
            marginTop:"8%" ,
           }}>
                <Swiper
                       //// effect={'flip'}

                    slidesPerView={mediaViewPort?3:1}
                   // slidesPerView={3}
                    grid={{
                        rows:2,
                        fill:'row'
                    }}
                    spaceBetween={9}
                    loop={true}
                    //slidesPerColumn={2}
                   // slidesPerGroup={3}
                
                    //slidesPerColumnFill="row"
                    grabCursor={true}
                   navigation={true}
                    autoplay={{
                        delay: 1800,
                        disableOnInteraction: false,
                    }}
                   
                  //  modules={[Pagination, Navigation, Autoplay,EffectFlip]}
                    modules={[Pagination, Navigation,Autoplay, SwiperGrid]}
                className="mySwiper">
                   
                     {jobsbyindustrydata.map(item=>{
                       return  <SwiperSlide>
                  <JobsByIndustryComponent
                  image={item.image}
                  industry={item.industry}
                  posts={item.posts}
                  >
                  </JobsByIndustryComponent>    
                      </SwiperSlide>
 
                    })}
                 
                </Swiper>
            </Box>
        </>
    )
}
export default JobsByIndustrySlider;