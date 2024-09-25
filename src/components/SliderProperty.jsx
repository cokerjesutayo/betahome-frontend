import React from "react";
import { FaNairaSign } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import FallBackLoader from "./FallBackLoader";
import axios from "axios";
import SliderCard from "./SliderCard";
const SliderProperty = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    try {
      const { data } = await axios(
        "https://tayo-betahome.onrender.com/api/v1/property"
      );
      setIsLoading(false);

      setProperties(data.properties);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProperties();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5 align-items-center">
        <FallBackLoader />
      </div>
    );
  }
  return (
    <div className="my-5">
      <Slider {...settings} className="slider-container">
        {properties.map((prop) => {
          return <SliderCard key={prop._id} {...prop} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderProperty;
