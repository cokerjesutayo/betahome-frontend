import React from "react";
import "../../styles/popular.css";
import { FaNairaSign } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Popular = () => {
  const details = [
    {
      id: 1,
      type: "Semi Detached Duplex",
      amount: "1, 430,000,000",
      bed: "6 Bed",
      bath: "3 Bath",
      squareMeter: "720 sq ft",
      location: "Victoria Island, Lagos",
    },
    {
      id: 2,
      type: "Special Duplex",
      amount: "670,000,000",
      bed: "6 Bed",
      bath: "3 Bath",
      squareMeter: "720 sq ft",
      location: "Victoria Island, Lagos",
    },
    {
      id: 3,
      type: "Split-Level House",
      amount: "340,000,000",
      bed: "6 Bed",
      bath: "3 Bath",
      squareMeter: "720 sq ft",
      location: "Victoria Island, Lagos",
    },
    {
      id: 4,
      type: "Twin Duplex",
      amount: "290,000,000",
      bed: "6 Bed",
      bath: "3 Bath",
      squareMeter: "720 sq ft",
      location: "Victoria Island, Lagos",
    },
  ];
  return (
    <div className="container">
      <h1 className="fw-bolder fs-1 text-center my-5">
        Discover Our Popular Properties
      </h1>
      <div className="d-flex gap-3 flex-wrap justify-content-center align-items-center">
        {details.map((detail) => {
          return (
            <div key={detail.id} className="d-flex  my-5">
              <div className="popular-bg d-flex align-items-end">
                <div className="popular-content-div d-flex  ">
                  <div className="text-white mx-3 ">
                    <h1 className="fs-6">{detail.type}</h1>
                    <p className="d-flex align-items-center gap-1">
                      <FaNairaSign />
                      {detail.amount}
                    </p>
                    {/* bed| bath|sq ft */}
                    <div className="d-flex   gap-1 ">
                      <p className="d-flex gap-1 ">
                        {detail.bed} <span className="popular-hr"> |</span>
                      </p>
                      <p className="d-flex gap-1">
                        {detail.bath} <span className="popular-hr"> |</span>
                      </p>
                      <p>{detail.squareMeter}</p>
                    </div>
                    <p className="d-flex gap-1 align-items-center ">
                      {" "}
                      <FaMapMarkerAlt />
                      {detail.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
