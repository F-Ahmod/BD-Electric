import React from 'react';
import AddProductHome from '../AddProductHome/AddProductHome';
import Banner from '../Banner/Banner';
import BestProduct from '../BestProduct/BestProduct';
import Explore from '../Explore/Explore';
import Banner2 from './../Banner2/Banner2';
import Clint from '../Clint/Clint';
import DReview from '../DReview/DReview';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <BestProduct></BestProduct>
            <AddProductHome></AddProductHome>
            <Explore></Explore>
            <Clint></Clint>
            <DReview></DReview>
            <Banner2></Banner2>
            
            
           
        </div>
    );
};

export default Home;