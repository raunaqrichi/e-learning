import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Footer = () =>{
    return(
        <div className='bg-dark mt-5'>
            <div className='w-50 mx-auto p-5'>
                <div>
                    <h1 className='text-secondary'>Stay Updated</h1>
                    <InputGroup className="mb-3">
    <FormControl
      placeholder="Your Email Address"
      aria-label="Your Email Address"
      aria-describedby="basic-addon2"
    />
    <Button variant="secondary" id="button-addon2">
      Subscribe Now
    </Button>
  </InputGroup>
                </div>
                <div>
                    <h1 className='text-secondary'>
                        Lets Get Social
                    </h1>
                   <h1>
                   <strong>
                    <i class="fab fa-facebook-square mx-3 text-white"></i>
                    <i class="fab fa-instagram-square mx-3 text-white"></i>
                    <i class="fab fa-twitter-square mx-3 text-white"></i>
                    <i class="fab fa-whatsapp-square mx-3 text-white"></i>
                    <i class="fab fa-youtube-square mx-3 text-white"></i>
                    </strong>
                   </h1>
                </div>
                <h3 className='text-secondary'>Copyright ©2021 All rights reserved by E-Learning</h3>
            </div>
           
        </div>
    );
};

export default Footer;