import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import BestProducts from '../BestProducts/BestProducts';
import './BestProduct.css'

const BestProduct = () => {
    const [mobile, setMobile] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/mobile")
            .then(res => res.json())
            .then(data => setMobile(data))
    }, [])

    return (
        <div >
            {mobile.length === 0 ?
                <Spinner animation="border" variant="success" />
                :
                <div className="container mb-5 mt-5">
                    {
                        mobile.map(mobile => <BestProducts
                            mobile={mobile}></BestProducts>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default BestProduct;