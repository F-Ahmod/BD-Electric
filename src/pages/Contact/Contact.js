import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing: 'ease',
        })
      },[]);
    return (
        <div className="row mt-5 mb-5 ">
            <div className="col-md-6 " data-aos="fade-right">
                <h2 className="text-secondary mt-3 mb-3">Please Call</h2>
                <p className="">+8801717918508</p>
                <p className=""> +8801712724836</p>
            </div>
            <div className="col-md-6" data-aos="fade-left">
                <h2 className="text-secondary mt-3 mb-3">Email </h2>
                <p className="">bdelectic@gmail.com</p>
                <p className="">bdelectics24@gmail.com</p>
                
            </div> 
            
            
        </div>
    );
};

export default Contact;