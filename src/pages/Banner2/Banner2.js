import React from 'react';
import './Banner2.css'
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';



const Banner2 = () => {
    
   
    return (
        <>
        <div className="containe bgtext" >
       
        <NavLink  style={{ textDecoration: 'none' }}to="/about">
         <Button className="fs-5 fixed-bottom" variant="text">About BD Electronic</Button>
         </NavLink>
           
        </div>
        
        </>
    );
};

export default Banner2;