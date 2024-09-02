import React, { useEffect } from 'react';
import $ from 'jquery';

function Facts() {
  useEffect(() => {
    // Dynamic import for counterUp
    const initCounterUp = async () => {
      const counterUp = (await import('counterup2')).default;
      
      // Initialize the counter
      $('[data-toggle="counter-up"]').each(function () {
        counterUp(this, {
          delay: 10,
          time: 2000
        });
      });
    };

    if (typeof window !== "undefined") {
      initCounterUp();
    }
  }, []);

  return (
    <>
      {/* Facts Start */}
      <div className="container-fluid bg-img py-5 mb-5">
        <div className="container py-5">
          <div className="row gx-5 gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-star text-white" />
                </div>
                <div className="ps-4">
                  <h6 className="text-primary text-uppercase">Our Experience</h6>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-users text-white" />
                </div>
                <div className="ps-4">
                  <h6 className="text-primary text-uppercase">Cake Specialist</h6> {/* Correct tag */}
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-check text-white" />
                </div>
                <div className="ps-4">
                  <h6 className="text-primary text-uppercase">Complete Project</h6>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-mug-hot text-white" />
                </div>
                <div className="ps-4">
                  <h6 className="text-primary text-uppercase">Happy Clients</h6>
                  <h1
                    className="display-5 text-white mb-0"
                    data-toggle="counter-up"
                  >
                    12345
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
    </>
  );
}

export default Facts;
