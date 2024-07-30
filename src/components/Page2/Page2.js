import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Page2.css'

const Page2 = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="page2">
      <div>
        <p className="heading1p2">Testimonials</p>
        <p className="heading2p2">Don't Go only with our commitments : Here what our clients says about us:</p>
      </div>
    <div className="carousel-container">
      <Slider {...setting}>
        <div className="flexp2">
          <div>
            <p>Hong</p>
          </div>
          <div>
            <p>Yong</p>
          </div>
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Page2;
