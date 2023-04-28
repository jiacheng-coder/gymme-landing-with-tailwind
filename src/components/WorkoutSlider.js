import React from 'react';
import {workouts} from '../data'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import '../workoutSlider.css'

import {Navigation} from 'swiper'

const WorkoutSlider = () => {
  const {programs} = workouts
  return <Swiper slidesPerView={2} spaceBetween={32} navigation={true} breakpoints={{
    768:{
      slidesPerView:3
    },
    1024:{
      slidesPerView:4
    },
  }} modules={[Navigation]} className='workoutSlider'>
    {programs.map((program,idx)=>{
      const {image,name}=program
      return <SwiperSlide key={idx} className='max-w-[320px] max-h-[320px] relative'>
        <img src={image} alt="" className='w-full h-full object-cover'/>
        <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[1px]'>
          <div className='font-primary font-semibold text-sm text-neutral-500'>{name}</div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>;
};

export default WorkoutSlider;
