import React from "react";
import '../Contact/Contact.css'

const Contact = () =>{
    return(
       <div>
           <div>
               <p className='about'>Contact</p><hr/>
           </div>
            <div className='d-flex'>
            <div className='contact'>
            <h1>Address</h1>
                <p>FFS-53 First Floor RDA Complex, New Rajendra Nagar Raipur (C.G.)</p>
            </div>
                <div className='contact'>
            <h1>Contact</h1>
                <p>+91 8518070809</p>
                <p>+91 0771-4918898</p>
            </div> 
                <div className='contact'>
            <h1>Email</h1>
                <p>dkirteshsolutions@-gmail.com</p>
                <p>info@dkirteshsolution.com</p>
            </div>
            <div className='contact'>
                <h1>Have Any Questions?</h1>
                <p>If you have any query about our service please contact with us..</p>
            </div>
        </div>
       </div>
    );
};

export default Contact;