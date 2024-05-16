import Image from "next/image";
import CarouselPage from "./Components/Banner";
import image1 from '../public/Images/company.JPG'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import CateSliders from "./Components/CategorySlider";
import Special from "./Components/SpecialOffers";


export default function Home() {
  return (
    <>
      <style>{`
                body {
                    background-color: white;
                }
            `}</style>
      <div className="bg-white">

        <div>
          <CarouselPage />
        </div>
        <br />
        <div className="container mt-5">

          <div className="flex flex-wrap justify-around">
            <div className="flex gap-3">
              <div className="font-bold text-6xl">1.</div>
              <div>
                <p className="font-bold mt-2">SHOP WITH CONFIDENCE</p>
                <p className="text-sm mt-1">Shipping all over Pakistan</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="font-bold text-6xl">2.</div>
              <div>
                <p className="font-bold mt-2">
                  NATIONWIDE DELIVERY</p>
                <p className="text-sm mt-1">For query email:info@totaltool.pk</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="font-bold text-6xl">3.</div>
              <div>
                <p className="font-bold mt-2">FRIENDLY ONLINE SUPPORT</p>
                <p className="text-sm mt-1">100% original products</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <Image
                style={{ "height": "570px", "width": "100%" }}
                className="img-fluid"
                objectFit="cover"
                src={image1}
                alt='logo'
              />
            </div>
            <div className="col-lg-6">
              <h1 style={{ "color": "#ff3333" }} className="text-lg font-bold tracking-wider">COMPANY PROFILE</h1><br />
              <h3 style={{ "color": "#ff3333" }} className="text-2xl font-bold"><span className="text-black">ABOUT</span> SONGCHUAN</h3><br />
              <p className="text-lg">The satisfaction of building something with your own hands has been a cornerstone of human ingenuity. At Songchuan Tools, we believe the journey of creation should be fueled by both precision and passion. That's why we offer a comprehensive selection of hand tools and power tools.Our meticulously curated collection of hand tools boasts timeless classics like hammers, screwdrivers, saws, and wrenches, all crafted from the finest materials for exceptional durability and control.
              </p><br />
              <h3 style={{ "color": "#ff3333" }} className="text-2xl font-bold">SONGCHUAN <span className="text-black">Offers:</span></h3> <br />
              <div className="flex">
                <CheckCircleIcon style={{ "color": "#ff3333" }} />
                <p className="text-lg font-bold ml-4">Affordable Price</p>
              </div>
              <div className="flex">
                <CheckCircleIcon style={{ "color": "#ff3333" }} />
                <p className="text-lg font-bold ml-4">Promotion Support</p>
              </div>
              <div className="flex">
                <CheckCircleIcon style={{ "color": "#ff3333" }} />
                <p className="text-lg font-bold ml-4">Ready stock</p>
              </div>
              <div className="flex">
                <CheckCircleIcon style={{ "color": "#ff3333" }} />
                <p className="text-lg font-bold ml-4">Long-Testing Quality</p>
              </div>
              <br />
              <button style={{ "backgroundColor": "#ff3333" }} className="text-white text-sm p-3 rounded-[5px] hover:rounded-[10px]">More Details</button>
              <br /><br /><br />
            </div>
          </div>
        </div>
        <div style={{ borderBottom: "3px solid #ff3333", width: "235px" }} className="container">
          <h1 className="text-2xl text-center font-bold text-black mt-5">TOP CATEGORIES</h1>
        </div>
        {/* <div style={{borderTop:"4px solid black",marginTop:"-2px"}} className="container">
        
      </div> */}

        <div className="container mt-3">
          <CateSliders />
        </div><br />
        <div style={{ borderBottom: "3px solid #ff3333", width: "235px" }} className="container">
          <h1 className="text-2xl text-center font-bold text-black mt-5">SPECIAL OFFERS</h1>
        </div>
        <div className="container mt-3">
          <Special/>
        </div>

      </div>
    </>
  );
}
