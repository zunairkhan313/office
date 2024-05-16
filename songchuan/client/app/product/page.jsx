"use client"

import React, { useState } from 'react'
import "../Components/hr.css"
import Image from 'next/image';
import slide1 from "../../public/Images/slide1.jpg";
import slide2 from "../../public/Images/slide2.JPG";
import slide3 from "../../public/Images/slide3.JPG";
import slide4 from "../../public/Images/slide4.JPG";
import slide5 from "../../public/Images/slide5.JPG";
import slide6 from "../../public/Images/slide6.JPG";
import slide7 from "../../public/Images/slide7.JPG";
import slide8 from "../../public/Images/slide8.JPG";
import slide9 from "../../public/Images/slide9.JPG";
import { useRouter } from "next/navigation";

const Product = () => {



    return (
        <>
            <style>{`
                body {
                    background-color: white;
                }
            `}</style>

            <div>

                <div className="container mt-5">



                    <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText ">
                        <h1 className="heading text-black font-bold">Our Products</h1>

                    </div>


                    <div className="hr-products"></div>
                    <div className="flex flex-wrap justify-around">
                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={slide1}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Tools Set</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button style={{ backgroundColor: "#ff3333" }} type="button" class="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button onClick={() => { addToCart("tools", "$500", { slide1 }) }} type="button" class="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>

                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={slide2}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Sockets Series</h4>
                                <br />

                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button style={{ backgroundColor: "#ff3333" }} type="button" class="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button onClick={() => { addToCart("socket", "$500", { slide2 }) }} type="button" class="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={slide3}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Screwdriver Series</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button style={{ backgroundColor: "#ff3333" }} type="button" class="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button onClick={() => { addToCart("Screwdriver", "$500", { slide3 }) }} type="button" class="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={slide4}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Wrench Series</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button style={{ backgroundColor: "#ff3333" }} type="button" class="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button onClick={() => { addToCart("wrench", "$500", { slide4 }) }} type="button" class="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={slide5}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Pliers Series</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button style={{ backgroundColor: "#ff3333" }} type="button" class="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button onClick={() => { addToCart("Pliers", "$500", { slide5 }) }} type="button" class="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={slide6}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Cutting Tools Series</h4>
                                <br />
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button style={{ backgroundColor: "#ff3333" }} type="button" class="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button onClick={() => { addToCart("cutting", "$500", { slide6 }) }} type="button" class="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={slide7}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-3'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Knocking Trimming Tools</h4>
                            </div>
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button style={{ backgroundColor: "#ff3333" }} type="button" class="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button onClick={() => { addToCart("Trimming", "$500", { slide7 }) }} type="button" class="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                        <div style={{ "height": "100%", "width": 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>

                                <Image
                                    style={{ "height": "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    src={slide8}
                                    alt={"tshirts"}
                                />
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Measuring Tools</h4>
                            </div>
                            <br />
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button style={{ backgroundColor: "#ff3333" }} type="button" class="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button onClick={() => { addToCart("Measuring", "$500", { slide8 }) }} type="button" class="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>

                        </div>
                        <div style={{ height: "100%", width: 300 }} className='mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
                            <div className='flex flex-wrap justify-around'>
                                {/* {picture && ( */}
                                <Image
                                    style={{ height: "250px" }}
                                    className='rounded object-cover'
                                    width={300}
                                    height={300}
                                    src={slide9}
                                    alt="tshirts"
                                />
                                {/* )} */}
                            </div>
                            <div className='mt-4'>
                                <h4 className='text-2xl text-center font-bold tracking-wider'>Measuring Tools</h4>
                            </div>
                            <br />
                            <div className="mt-2">
                                <hr />
                            </div>
                            <div className='flex flex-wrap justify-around mt-3'>
                                <div>
                                    <button style={{ backgroundColor: "#ff3333" }} type="button" class="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
                                </div>
                                <div>
                                    <button onClick={() => { addToCart("Measuring", "$500", { slide9 }) }} type="button" class="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
