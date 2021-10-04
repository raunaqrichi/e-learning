import React from 'react';
import '../Data/Data.css'

const Data = (props) => {
     const {img, name, rating, reviews, fee} = props.newData;
    return(
        <div className='course'>
        <img className='img' src={img} alt=''/>
        <h1>{name}</h1>
        <h4>Rating: {rating}</h4>
        <h4>Review: {reviews}</h4>
        <h4>Fee: ${fee}</h4>
        <button className='btn btn-secondary p-2 m-5'><i class="fas fa-shopping-cart"></i> Buy Course</button>
    </div>
    );
};

export default Data;