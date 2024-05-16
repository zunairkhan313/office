import React from 'react';
import "../Components/hr.css";
import about1 from "../../public/Images/slide6.JPG";
import Image from 'next/image';

const About = () => {
    return (
        <>
            <style>{`
                body {
                    background-color: white;
                }
            `}</style>
            <div className='bg-white'>

                <div className='bg-white mt-5 container p-3'>
                    <div className=" flex">
                        <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText ">
                            <h1 className="heading text-black font-bold">About Us</h1>
                        </div>
                    </div>
                    <div className="hr-about"></div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">
                            <h1 style={{ "color": "#ff3333" }} className="text-lg font-bold text-green-800 tracking-widest mt-4">COMPANY PROFILE</h1>
                            <h3 className="text-4xl font-bold text-black">WHO WE ARE</h3><br />
                            <p className="text-[16px]">The satisfaction of building something with your own hands has been a cornerstone of human ingenuity. At Songchuan Tools, we believe the journey of creation should be fueled by both precision and passion. That's why we offer a comprehensive selection of hand tools and power tools. <br /><br />
                                Our meticulously curated collection of hand tools boasts timeless classics like hammers, screwdrivers, saws, and wrenches, all crafted from the finest materials for exceptional durability and control. <br /><br />
                                But for those seeking to leverage the power of technology, we also offer a robust lineup of power tools. From high-performance drills and impact drivers to versatile saws and sanders, our selection empowers you to tackle demanding tasks with efficiency and accuracy. <br /><br />
                                We understand that every project is unique, and that's why we go beyond just tools. We offer a wealth of resources, including instructional guides and expert tips, to help you navigate your project with confidence.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={about1}
                                className='object-cover'
                                width={"100px"}
                                style={{ "height": "570px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
