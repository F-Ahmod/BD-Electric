import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51KFv2GLrL1EnXa50lGmel8irQoBc3BSeBP21Q1vdc9gUJEB79FKnM3a5RzSrc0jdZCA0AmLFZfhyziWaDTOJyK2p00oBouXCdE');
;

const Pay = () => {
    const params=useParams()
    
    const [product,setProduct]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/bookMobile/${params.pid}`)
        .then(res=>res.json())
        .then(data =>setProduct(data))
       
    },[])
    return (
        <div className="mt-5">
            
            
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        product={product}
                    />
                </Elements>
            
        </div>
    );
};

export default Pay;