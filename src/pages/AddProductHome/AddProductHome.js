import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';

const AddProductHome = () => {

    const [AddProductHome, setAddProductHome] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addMobile')
            .then(res => res.json())
            .then(data => setAddProductHome(data))
    }, [])
    const history = useHistory()
    const handelSingleProduct = id => {
        history.push(`/singleProduct/${id}`)
    }
    return (
        <div className="container mb-5 mt-6 " >
            {
                AddProductHome.map(AddProductHome => <div className="bike-containe">

                    <div className="card mb-3 img-bg shadow" data-aos="fade-up">
                        <img style={{ height: "190px", width: "90%" }} src={AddProductHome?.img} className="mx-auto mt-2 shadow rounded" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-dark">{AddProductHome?.name}</h5>
                            <p className="p-2">Price $ :{AddProductHome?.price}</p>
                            <Rating
                                initialRating={3}
                                fullSymbol="fas fa-star icon-color"
                                emptySymbol="far fa-star icon-color"
                                readonly></Rating>

                        </div>
                        <div> <button onClick={() => handelSingleProduct(AddProductHome._id)} type="button" className="btn btn-success mb-3">Book Now</button></div>
                    </div>
                </div>

                )
            }
        </div>
    );
};

export default AddProductHome;