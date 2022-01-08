import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BestProducts.css'


const BestProducts = ({ mobile }) => {
  const history = useHistory()
  const { img, name, price, rating, about } = mobile;


  const handelSingleMobile = id => {
    history.push(`/singleProduct/${id}`)
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    })
  }, []);
  return (
    <div>
      <div className="card mb-3 img-bg shadow" data-aos="fade-up">
        <img style={{ height: "310px", width: "90%" }} src={img} className="mx-auto mt-2 shadow rounded" alt="..." />
        <div className="card-body">
          <h4 className="card-title text-dark">{name}</h4>
          <h6 className="card-title text-dark">{about}</h6>
          <p className="p-2 text-dark">Price $ :{price}</p>
          <Rating
            initialRating={rating}
            fullSymbol="fas fa-star icon-color"
            emptySymbol="far fa-star icon-color"
            readonly></Rating>

        </div>
        <div> <button onClick={() => handelSingleMobile(mobile._id)} type="button" className="btn btn-success mb-3">Book Now</button></div>
      </div>
    </div>
  );
};

export default BestProducts;