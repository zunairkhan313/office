import React from 'react'
import "../Components/hr.css"
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Admin = () => {
    return (
        <>
            <style>{`
                body {
                    background-color: white;
                }
            `}</style>
            <div className="container mt-5">

                <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText ">
                    <h1 className="heading text-black font-bold">Admin Panel</h1>

                </div>
                <div className='hr-admin'></div><br /><br />
                <div className='flex justify-around'>

                    <div className="col-lg-6 col-md-4">

                        <div style={{ border: "1px solid black" }} className='container mt-5 p-4 rounded'>
                            <h1 className='text-3xl font-bold text-center mb-1'>Add Product</h1>
                            <hr /><br />
                            <label >Title</label><br />
                            <input className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded' type="text" placeholder='Title' />
                            <br /><br />
                            <label >Description</label>
                            <input className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded' type="text" placeholder='Description' />
                            <br /><br />
                            <label >Price</label>
                            <input className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded' type="text" placeholder='Price' />
                            <br /><br />

                            <label for="file-upload" className="custom-file-upload1 w-[100%]">
                                <div className='flex justify-between'>
                                    <div>Image Upload</div>
                                    <div>  <ControlPointIcon /></div>
                                </div>

                            </label>
                            <input id="file-upload" type="file" className='w-[100%]' />
                            <br />


                            <div class="container px-10 mx-0 min-w-full flex flex-col items-center">
                                <button class="mt-3 bg-[#ff3333] text-white hover:bg-black font-bold py-2 px-4 rounded">Upload</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin

