import React from "react";
import '../About-Us/AboutUs.css'

const AboutUs = () =>{
    return(
       <div>
           <div className='about'>
               <p>About Us</p>
           </div><hr/>
            <div className='d-flex'>
            
            <div className='contact'>
                   <h1 className='name'>Our Vision</h1>
                    <p>No matter which industry you belong to, every business must become digital Our main aim is to develop consistently and become a leading performer in this competitive global marketplace. Fortunately, we have been able to gather a crew of professionals that can shape and mold their collective experiences, all of them possess outstanding talent that can help to accelerate your organization.</p>
            </div>
            <div className='contact'>
             <h1 className='name'>Our Mission</h1>
             <p>Our mission is to enhance the business growth of our customers with creative design, development and to deliver market-defining high-quality solutions that create value and reliable competitive advantage to customers around the globe. our mission is to create the best for you where we can work easily.</p>
            </div>
           
                 
                </div>
       </div>
    );
};

export default AboutUs;