import React, { useEffect, useState } from "react";
import Data from '../Data/Data'
import '../Courses/Courses.css'
const Courses = () =>{
    const [data, setData] = useState([]);
    useEffect(() =>{
        fetch('./Data.JSON')
        .then(res => res.json())
        .then (data => setData(data))
    } ,[])
    return(
        <div>
            <h1 className='w-50 mx-auto'>All Of Our Courses</h1>

           <div  className='container'>
           {
               data.map(newData =><Data key={newData.name} newData={newData}></Data>) 
            }
           </div>
        </div>
    );
};

export default Courses;