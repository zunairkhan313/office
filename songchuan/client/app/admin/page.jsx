"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';

import "../Components/hr.css";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  // const [allImage, setAllImage] = useState([]);

  const router = useRouter();

  const imagebase64 = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };

  // const fetchimage = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8080/");
  //     if (!res.ok) throw new Error("Failed to fetch images");
  //     const data = await res.json();
  //     setAllImage(data.data || []);
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching images:", error);
  //   }
  // };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    const image = await imagebase64(file);
    setImg(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (img) {
      try {
        const res = await fetch("http://localhost:8080/upload", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ img }),
        });
        const data = await res.json();
        console.log(data);
        if (data.success) {
          alert(data.message);
          setImg("");
   
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    try {
      const res = await fetch("http://localhost:3000/apis/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        alert("ok");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.error("Error creating topic:", error);
    }
  };

  // useEffect(() => {
  //   fetchimage();
  // }, []);

  return (
    <>
      <style>{`
        body {
          background-color: white;
        }
      `}</style>
      <div className="container mt-5">
        <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText">
          <h1 className="heading text-black font-bold">Admin Panel</h1>
        </div>
        <div className="hr-admin"></div><br /><br />
        <div className="flex justify-around">
          <div className="col-lg-6 col-md-4">
            <form onSubmit={handleSubmit}>
              <div style={{ border: "1px solid black" }} className="container mt-5 p-4 rounded">
                <h1 className="text-3xl font-bold text-center mb-1">Add Product</h1>
                <hr /><br />
                <label>Title</label><br />
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                  type="text"
                  placeholder="Title"
                />
                <br /><br />
                <label>Description</label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                  type="text"
                  placeholder="Description"
                />
                <br /><br />
                <label htmlFor="file-upload" className="custom-file-upload1 w-[100%]">
                  <div className="flex justify-between">
                    <div>Image Upload</div>
                    <div><ControlPointIcon /></div>
                  </div>
                </label>
                <input id="file-upload" type="file" className="w-[100%]" onChange={handleUploadImage} />
                <br />
                <div className="container px-10 mx-0 min-w-full flex flex-col items-center">
                  <button
                    type="submit"
                    className="mt-3 bg-[#ff3333] text-white hover:bg-black font-bold py-2 px-4 rounded"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Admin;
