"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from "react-icons/fa";
// import { MdAttachEmail } from "react-icons/md";
import { FaInstagram } from 'react-icons/fa';
// import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    return (
        <Navbar expand="lg" style={{"backgroundColor":"black"}}>
            <Container fluid>
                <Navbar.Toggle className='text-white' aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className="font-normal text-[18px] leading-8 flex flex-end">
                            <div>
                                <p className='text-sm ml-5 text-white'>Price Change & Stock Availability Is Subject To Change At Any Time.</p>
                            </div>
                        </div>


                    </Nav>
                    <div className="flex justify-center items-center py-1 mr-2">
                        <a href="https://www.facebook.com/Changlutools.pk" className="hover:text-blue-500" onMouseEnter={() => setHoveredIcon('facebook')} onMouseLeave={() => setHoveredIcon(null)}>
                            <FaFacebook className={hoveredIcon === 'facebook' ? 'text-[#0866FF] mx-2' : 'text-white mx-2'} size={20} />
                        </a>

                        <a href="https://www.instagram.com/changlutools.pk/" className="hover:text-pink-500" onMouseEnter={() => setHoveredIcon('instagram')} onMouseLeave={() => setHoveredIcon(null)}>
                            <FaInstagram className={hoveredIcon === 'instagram' ? 'text-[#B606E7] mx-2' : 'text-white mx-2'} size={20} />
                        </a>

                    </div>
                    <div style={{"borderLeft":"1px solid black","borderLeftColor":"white","paddingLeft":"10px","marginRight":"30px"}}>
                        <p className='text-sm text-white'>Contact info: 03337009944</p>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;