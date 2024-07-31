import React from "react";
import star from "../assets/star.png";
import semicolon from "../assets/semicolon.png";
import person1 from "../assets/Person1.jpg";
import person2 from "../assets/Person2.png";
import "./Page2.css";

const Page2 = () => {
  return (
    <div className="page2">
      <div>
        <p className="heading1p2">Testimonials</p>
        <p className="heading2p2">
          Don't Go only with our commitments: Here what our clients say about
          us:
        </p>
      </div>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="boxalign">
              <div className="Boxalign">
                <div className="flex">
                  <div className="review-box">
                    <div className="reviewbox2">
                      <div>
                        <p className="name">Ankush</p>
                        <p>Chief Technical Officer</p>
                        <div className="star-align">
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                        </div>
                        <img src={semicolon} alt="semicolon" className="star" />
                      </div>
                      <div>
                        <img src={person2} alt="person" className="person" />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. 
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="review-box">
                    <div className="reviewbox2">
                      <div>
                        <p className="name">Lalit Kumar</p>
                        <p>Chief Executive Officer</p>
                        <div className="star-align">
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                        </div>
                        <img src={semicolon} alt="semicolon" className="star" />
                      </div>
                      <div>
                        <img src={person1} alt="person" className="person" />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="boxalign">
              <div className="Boxalign">
                <div className="flex">
                  <div className="review-box">
                    <div className="reviewbox2">
                      <div>
                        <p className="name">Lalit Kumar</p>
                        <p>Chief Executive Officer</p>
                        <div className="star-align">
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                        </div>
                        <img src={semicolon} alt="semicolon" className="star" />
                      </div>
                      <div>
                        <img src={person1} alt="person" className="person" />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="review-box">
                    <div className="reviewbox2">
                      <div>
                        <p className="name">Lalit Kumar</p>
                        <p>Chief Executive Officer</p>
                        <div className="star-align">
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                          <img src={star} alt="star" className="star" />
                        </div>
                        <img src={semicolon} alt="semicolon" className="star" />
                      </div>
                      <div>
                        <img src={person1} alt="person" className="person" />
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Page2;
