import React from 'react'
import Sphoto from './Slidephoto.json'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from '@material-ui/core';

import "./Carosuel.css"

function  Carousel() {
    
    
    const settings ={
       
        dots :true,
        fade:true,
        infinite :true,
        speed :500,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1
        
  
    };



    return (
        <div  >
        <Box width="96%" p="2%" >
           <Slider {...settings} >
                {Sphoto.map((photo) => {
                return( <div > <img alt=""  width= "100%" src={photo.image}/></div>)}
                
                )}
            </Slider>
           
        </Box>
        
        </div>
    )
}

export default Carousel
