import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Dynamic import of OwlCarousel for client-side rendering
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

function Testimonial() {
  const options = {
    autoplay: true,
    smartSpeed: 1500,
    margin: 45,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <>
    <style>
        {`
        .testimonial-carousel .owl-dot {
    position: relative;
    display: inline-block;
    margin: 0 2px;
    width: 10px;
    height: 25px;
    background: #DDDDDD !important;
    transition: .5s;
}
        `}
    </style>
      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: 600 }}
          >
            <h2 className="text-primary font-secondary">Testimonial</h2>
            <h1 className="display-4 text-uppercase">Our Clients Say!!!</h1>
          </div>
          <OwlCarousel className="owl-carousel testimonial-carousel" {...options}>
            <div className="testimonial-item bg-dark text-white border-inner p-4">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid flex-shrink-0"
                  src="assets/img/testimonial-1.jpg"
                  style={{ width: 60, height: 60 }}
                />
                <div className="ps-3">
                  <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                  <span>Profession</span>
                </div>
              </div>
              <p className="mb-0">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </p>
            </div>
            <div className="testimonial-item bg-dark text-white border-inner p-4">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid flex-shrink-0"
                  src="assets/img/testimonial-2.jpg"
                  style={{ width: 60, height: 60 }}
                />
                <div className="ps-3">
                  <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                  <span>Profession</span>
                </div>
              </div>
              <p className="mb-0">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </p>
            </div>
            <div className="testimonial-item bg-dark text-white border-inner p-4">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid flex-shrink-0"
                  src="assets/img/testimonial-3.jpg"
                  style={{ width: 60, height: 60 }}
                />
                <div className="ps-3">
                  <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                  <span>Profession</span>
                </div>
              </div>
              <p className="mb-0">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </p>
            </div>
            <div className="testimonial-item bg-dark text-white border-inner p-4">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="img-fluid flex-shrink-0"
                  src="assets/img/testimonial-4.jpg"
                  style={{ width: 60, height: 60 }}
                />
                <div className="ps-3">
                  <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                  <span>Profession</span>
                </div>
              </div>
              <p className="mb-0">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
}

export default Testimonial;
