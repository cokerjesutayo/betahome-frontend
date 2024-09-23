import React from "react";
import icon from "../../assets/images/icon.png";
import chain from "../../assets/images/chain.png";
import camera from "../../assets/images/camera.png";
import picture from "../../assets/images/picture.png";
import mapp from "../../assets/images/mapp.png";
import bed from "../../assets/images/bed.png";
import toilet from "../../assets/images/toilet.png";
import arrow from "../../assets/images/arrow.png";
import shuttle from "../../assets/images/shuttle.png";
import love from "../../assets/images/like.png";

import { FaNairaSign } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

import "../../styles/properties.css";

const Properties = () => {
  const information = [
    {
      id: 1,
      feature: "Featured",
      type: "For Sale",

      imgChain: chain,
      imgCamera: camera,
      imgPicture: picture,
      imgMapp: mapp,
      imgBed: bed,
      imgToilet: toilet,
      imgArrow: arrow,
      imgShuttle: shuttle,
      imglove: love,
      location: "Victoria Island, Lagos",
      bedroom: "6 Bedrooms",
      bathroom: "3 Bathrooms",
      amount: " 3,340,000,000",
      title: "Real House Luxury Villa",
    },
    {
      id: 2,
      feature: "Featured",
      type: "For Rent",
      imgChain: chain,
      imgCamera: camera,
      imgPicture: picture,
      imgMapp: mapp,
      imgBed: bed,
      imgToilet: toilet,
      imgArrow: arrow,
      imgShuttle: shuttle,
      imglove: love,
      location: "Festac, Lagos",
      bedroom: "5 Bedrooms",
      bathroom: "3 Bathrooms",
      amount: " 4,000,000/1 Year",
      title: "Exquisite Haven Villa",
    },
    {
      id: 3,
      feature: "Featured",
      type: "For Sale",
      imgChain: chain,
      imgCamera: camera,
      imgPicture: picture,
      imgMapp: mapp,
      imgBed: bed,
      imgToilet: toilet,
      imgArrow: arrow,
      imgShuttle: shuttle,
      imglove: love,
      location: "Gbagada, Lagos",
      bedroom: "7 Bedrooms",
      bathroom: "3 Bathrooms",
      amount: " 5, 350,000,000",
      title: "Luxe Palatial Villa",
    },
    {
      id: 4,
      feature: "Featured",
      type: "For Rent",
      imgChain: chain,
      imgCamera: camera,
      imgPicture: picture,
      imgMapp: mapp,
      imgBed: bed,
      imgToilet: toilet,
      imgArrow: arrow,
      imgShuttle: shuttle,
      imglove: love,
      location: "Mushin, Lagos",
      bedroom: "4 Bedrooms",
      bathroom: "3 Bathrooms",
      amount: " 4,000,000/1 Year",
      title: "Harmony Luxury Villa",
    },

    {
      id: 5,
      feature: "Featured",
      type: "For Rent",
      imgChain: chain,
      imgCamera: camera,
      imgPicture: picture,
      imgMapp: mapp,
      imgBed: bed,
      imgToilet: toilet,
      imgArrow: arrow,
      imgShuttle: shuttle,
      imglove: love,
      location: "Victoria Island, Lagos",
      bedroom: "6 Bedrooms",
      bathroom: "4 Bathrooms",
      amount: " 350,000,000",
      title: "Real House Luxury Villa",
    },
    {
      id: 6,
      feature: "Featured",
      type: "For Sale",
      imgChain: chain,
      imgCamera: camera,
      imgPicture: picture,
      imgMapp: mapp,
      imgBed: bed,
      imgToilet: toilet,
      imgArrow: arrow,
      imgShuttle: shuttle,
      imglove: love,
      location: "Lekki-Ajah, Lagos",
      bedroom: "5 Bedrooms",
      bathroom: "3 Bathrooms",
      amount: " 4,200,000/1 Year",
      title: "Real House Luxury Villa",
    },
    {
      id: 7,
      feature: "Featured",
      type: "For Sale",
      imgChain: chain,
      imgCamera: camera,
      imgPicture: picture,
      imgMapp: mapp,
      imgBed: bed,
      imgToilet: toilet,
      imgArrow: arrow,
      imgShuttle: shuttle,
      imglove: love,
      location: "Ishiagu, Enugu",
      bedroom: "5 Bedrooms",
      bathroom: "3 Bathrooms",
      amount: " 2,350,000,000",
      title: "Infinite Bliss Villa",
    },
    {
      id: 8,
      feature: "Featured",
      type: "For Rent",
      imgChain: chain,
      imgCamera: camera,
      imgPicture: picture,
      imgMapp: mapp,
      imgBed: bed,
      imgToilet: toilet,
      imgArrow: arrow,
      imgShuttle: shuttle,
      imglove: love,
      location: "Works Layout, Owerri",
      bedroom: "8 Bedrooms",
      bathroom: "6 Bathrooms",
      amount: " 3, 350,000/1 Year",
      title: "Real House Luxury Villa",
    },
    {
      id: 9,
      feature: "Featured",
      type: "For Sale",
      imgChain: chain,
      imgCamera: camera,
      imgPicture: picture,
      imgMapp: mapp,
      imgBed: bed,
      imgToilet: toilet,
      imgArrow: arrow,
      imgShuttle: shuttle,
      imglove: love,
      location: "Ikeja, Lagos",
      bedroom: "6 Bedrooms",
      bathroom: "6 Bathrooms",
      amount: "600,000,000",
      title: "Real House Luxury Villa",
    },
  ];
  return (
    <section className="container mt-5">
      <div className="d-flex justify-content-between align-items-center ">
        <div className="d-flex justify-content-between align-items-center flex-row gap-5">
          {" "}
          <div className="d-flex gap-3">
            <img src={icon} alt="" /> <span> More Filter</span>
          </div>{" "}
          <div> Showing 1 – 10 of 15 results </div>
        </div>

        <div>2</div>
      </div>

      {/* card */}
      <div className="d-flex gap-5 justify-content-center align-items-center property-divs">
        {information.map((info) => {
          return (
            <div key={info.id}>
              {/* top  div*/}
              <div className="list-properties mt-5 p-4 d-flex justify-content-between   flex-column">
                {" "}
                <div className="d-flex justify-content-between align-items-center  featured">
                  {" "}
                  <h2>{info.feature}</h2> <h3>{info.type}</h3>
                </div>
                {/* icons */}
                <div className="d-flex gap-3 justify-content-end align-items-end ">
                  {" "}
                  <img src={info.imgChain} alt="" className="img-fluid" />
                  <img src={info.imgCamera} alt="" className="img-fluid" />
                  <img src={info.imgPicture} alt="" className="img-fluid" />
                </div>
              </div>

              {/* bottom div */}
              <div className="bottom-div">
                <div className="p-3 bottom-contents">
                  <h4>{info.title}</h4>
                  <p className="d-flex gap-3 align-items-center">
                    <img src={info.imgMapp} alt="" /> {info.location}
                  </p>
                  <div className="d-flex gap-5">
                    <p className="d-flex gap-3 align-items-center">
                      <img src={info.imgBed} alt="" /> {info.bedroom}
                    </p>
                    <p className="d-flex gap-3 align-items-center">
                      <img src={info.imgToilet} alt="" /> {info.bathroom}
                    </p>
                  </div>

                  <hr />
                  <div className=" money mt-4 d-flex justify-content-between ">
                    <h5 className="d-flex gap-1 align-items-center">
                      <FaNairaSign /> <span>{info.amount}</span>
                    </h5>
                    <div className="d-flex gap-3 align-items-center">
                      <img src={info.imgArrow} alt="" className="img-fluid" />
                      <img src={info.imgShuttle} alt="" className="img-fluid" />
                      <img src={info.imglove} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* pagination */}
      <div className="d-flex justify-content-center align-items-center gap-4 my-5 page-numbers">
        <RiArrowLeftSLine />
        <p className="d-flex align-items-center">1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <RiArrowRightSLine />
      </div>
    </section>
  );
};

export default Properties;
