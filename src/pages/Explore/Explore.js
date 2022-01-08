import React from 'react';

import img from '../../imges/Sumsung Galaxy A BIG.jpg'
import img1 from '../../imges/Sumsung Galaxy m21 BIG.jpg'
import img2 from '../../imges/Sumsung Galaxy s21 BIG.jpg'

import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ExploreBike = () => {
    return (
        <div className="m-5  round-5">
         <Carousel fade>
  <Carousel.Item>
    <img style={{width:"100%",height:"550px"}}
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:"100%",height:"550px"}}
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
   
  </Carousel.Item>
  
  <Carousel.Item>
    <img style={{width:"100%",height:"550px"}}
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

  
  </Carousel.Item>
  
</Carousel>
<div  className="mt-2">
<NavLink to="/exploreBikes"><button type="button" class="btn btn-success">See More Products</button></NavLink>
</div>



            
        </div>
    );
};

export default ExploreBike;