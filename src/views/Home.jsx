import React, {useEffect, useState} from "react";
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';
import First from "../components/home/First";
import Second from "../components/home/Second";
import Third from "../components/home/Third";
import Fourth from "../components/home/Fourth";
import Five from "../components/home/Five";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Home = () => {

  return (
    <div className='bg-[#FAFAFA] w-full'>
      <div>
        <Header />
        <First />
      </div>
      <AnimationOnScroll initiallyVisible={false} animateIn="animate__slideInLeft" duration={1} className='mt-10'>
        <Second />
      </AnimationOnScroll>
      <AnimationOnScroll initiallyVisible={false} animateIn="animate__fadeInRight" duration={1}>
        <Third />
      </AnimationOnScroll>
        <AnimationOnScroll initiallyVisible={false} animateIn="animate__slideInLeft" duration={1} className='mt-10'>
        <Five/>
        <Fourth />
        </AnimationOnScroll>
        <Footer />
    </div>
  )
}

export default Home