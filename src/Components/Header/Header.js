import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'


const Header = () =>{
    const image = ['https://preview.colorlib.com/theme/onlineedu/assets/img/hero/xheroman.png.pagespeed.ic.-tVCH9AISL.webp']
    return(
       <div>
            <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><i class="fas fa-book-reader"></i> E-Learing</Navbar.Brand>
    <Nav className="me-auto">
    <Navbar.Brand><NavLink
  to="/Home"
  activeStyle={{
    fontWeight: "bold",
    color: "white"
  }}
>
  Home
</NavLink></Navbar.Brand>
<Navbar.Brand><NavLink
  to="/Courses"
  activeStyle={{
    fontWeight: "bold",
    color: "white"
  }}
>
  Courses
</NavLink></Navbar.Brand>
<Navbar.Brand><NavLink
  to="/Aboutus"
  activeStyle={{
    fontWeight: "bold",
    color: "white"
  }}
>
  AboutUs
</NavLink></Navbar.Brand>
<Navbar.Brand><NavLink
  to="/Contact"
  activeStyle={{
    fontWeight: "bold",
    color: "white"
  }}
>
  Contact
</NavLink></Navbar.Brand>
      
    </Nav>
    </Container>
  </Navbar>
        </div>
        <div className='d-flex align-items-center header'>
            <div className='m-5'>
            <h1>
                    <strong>The New Way To</strong>
                </h1>
                <h1>
                    <strong> Learn Properly </strong>
                </h1>
                <h1>
                    <strong>With Us!</strong>
                </h1>
                <button className='btn btn-secondary p-3'>Get Started <i class="fas fa-arrow-right"></i></button>
            </div>
            <div>
        <Image src={image} fluid />
        </div>
        </div>
       </div>
    );
};

export default Header;