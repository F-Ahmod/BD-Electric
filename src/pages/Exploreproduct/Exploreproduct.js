import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import Rating from 'react-rating';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BannerExpro from '../BannerExpro/BannerExpro';


const Exploreproduct = () => {
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        
        fetch('http://localhost:5000/mobile')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const history =useHistory()
    

    
    const handelsingleProduct=id=>{
        history.push(`/singleProduct/${id}`)   
    }
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing: 'ease',
        })
      },[]);
    return (

        <div >
            
            <div className="container mb-5 mt-5" >
            {
               product.map(product => <div data-aos="fade-up">
                   <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
               <Card.Img variant="top" className="mx-auto mt-2 rounded shadow" style={{height:"190px",width:"90%"}} src={product.img} width="300" />
                 <Card.Body>
                 <Card.Title className="text-dark">{product?.name}</Card.Title>
                 
                 <Card.Text className="text-dark">Price $ {product?.price}
                 
                 </Card.Text>            
                
               </Card.Body>
               
               <Rating
                initialRating={product?.rating}
                fullSymbol="fas fa-star icon-color"
                emptySymbol="far fa-star icon-color"
                readonly></Rating>
              <div className="mb-3 mt-2"> <button onClick={()=>handelsingleProduct(product._id)} type="button" class="btn btn-success">See Details</button>
             <NavLink className="ms-3" to="/"><button type="button" class="btn btn-success">Go Back</button></NavLink></div>
             </Card>
            
               </div>
                )
           }
           
            </div>
            <div>
                <BannerExpro></BannerExpro>
            </div>
        </div>
       
    );
};

export default Exploreproduct;