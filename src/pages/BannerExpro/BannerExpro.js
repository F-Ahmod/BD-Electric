import React from 'react';
import img1 from '../../imges/dp5.jpg'
import img2 from '../../imges/dp4.jpg'
import img3 from '../../imges/dp3.jpg'
import { NavLink } from 'react-router-dom';

const BannerExpro = () => {
  return (
    <div className="m-5  round-5">

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style={{ height: "450px" }} src={img1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">


            </div>
          </div>
          <div class="carousel-item">
            <img style={{ height: "450px" }} src={img2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">


            </div>
          </div>
          <div class="carousel-item">
            <img style={{ height: "450px" }} src={img3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mt-2">
        <NavLink to="/"><button type="button" class="btn btn-success">See More</button></NavLink>
      </div>

    </div>
  );
};

export default BannerExpro;