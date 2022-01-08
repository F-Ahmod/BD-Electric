import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { NavLink } from 'react-router-dom';
import './SingleProduct.css'


const SingleProduct = () => {
  const {user}=useAuth();
    const {id}=useParams();
    const [singleProduct,setSingleProduct]=useState({});
        useEffect(()=>{
        fetch(`http://localhost:5000/bike/${id}`)
        .then(res=>res.json())
        .then(data =>setSingleProduct(data))
       
    },[])

    const addToCard = ()=>{
        
        singleProduct.status='panding'
        singleProduct.email=user.email
        fetch(`http://localhost:5000/bookBike`,{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(singleProduct)
  
      })
      .then(res => res.json())
      .then(data=>{console.log(data)})
      }

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
      // console.log(data);
        axios.post('http://localhost:5000/bike',data)
        .then(res =>{
          if(res.data.insertedId){
              alert('added successfully');
              reset();
          }

      })



    };
    return (
        <div className="newBg ">
           
             <div classname="container  ">
           <div className="row">
            <div className="col-md-6">
            <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
               <Card.Img variant="top" src={singleProduct.img} width="300" />
                 <Card.Body>
                 <Card.Title className="text-dark">{singleProduct.name}</Card.Title>
                 
                 <Card.Text className="text-dark">Price $ {singleProduct.price}
                 </Card.Text>            
                
               </Card.Body>
              
             </Card>
            </div>
             <div className="col-md-6">
             <div className="mt-5 mx-auto mb-2 bg-light " style={{width:"350px",height:"300px"}}>
            <h4 className="text-success">Please Confirm your order </h4>
            <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 ">
            <input defaultValue={user.displayName} className="w-50 mb-1 mt-3 h-3" {...register("name")} Placeholder="Name" />
            <br />
            <input  defaultValue={user.email} className="w-50 mb-1" type="text" {...register("email")} Placeholder="Email"/>
            <br />
            <input   className="w-50 mb-1" type="text" {...register("address")} Placeholder="Address"/>
            <br />
            <select className="w-50 mb-1" {...register("ticket-type")}>
                                <option value="Select Type">Delivery Type</option>
                                <option value="expensive">Quick</option>
                                <option value="normal">normal</option>
                            </select>
            <br />
           
           
            <button onClick={addToCard} type="button" class="btn btn-success ">Add to Card</button>
          </form>
            </div>
        </div>
             </div>
             </div>
           
        </div>
        
       <div className="text-center"> 
       <NavLink to="/"><button  type="button" className="btn btn-success mb-3 "><i class="fas fa-backward"></i> Go Home</button></NavLink>
       </div>

        </div>
    );
};

export default SingleProduct;