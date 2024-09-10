
import { Box, CardMedia, Grid, useMediaQuery } from "@mui/material";
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
 
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
//import { EffectFlip,Navigation, Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import TopCompaniesComponent from "./TopCompaniesComponent";

//import 'swiper/css/effect-flip';

 function TopCompaniesSlider(props) {
    const mediaViewPort=useMediaQuery("(min-width:600px)")
    const ProgressCircle = useRef(null);
    const ProgressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        ProgressCircle.current.style.setProperty('--progress', 1);
        ProgressContent.current.textContent = '${math.cell(time/1000)}$';
    }

    return (
        <>
            <Box sx={{ height: '100px', paddingLeft: mediaViewPort? '10%':"5%",paddingRight:mediaViewPort?"10%":"5%",marginTop:"1%"  }}>
                <Swiper
                       //// effect={'flip'}

                    slidesPerView={mediaViewPort?4:1}
                    spaceBetween={2.5}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                   
                  //  modules={[Pagination, Navigation, Autoplay,EffectFlip]}
                    modules={[Pagination, Navigation, Autoplay]}

                    className="mySwiper">
                     <Grid container>
                     {props.data.map(item=>{
                       return <Grid md={12} xs={12} >
                        <SwiperSlide>
                          <TopCompaniesComponent
                      
                           image={item.image}
                           picture={item.picture}
                           image3={item.image3}
                           image4={item.image4}
                           title={item.title}
                           hiring={item.hiring}
                             />
                           
                      </SwiperSlide>
                 
                        </Grid>
                    })}
                        </Grid>   
                   
                  
            
                </Swiper>
            </Box>

        </>
    )

}
export default TopCompaniesSlider;