import React from 'react'

function HomeBanner() {
  return (
    <>
  {/* Hero Start */}
  <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-start">
        <div className="col-lg-8 text-center text-lg-start">
          <h1 className="font-secondary text-primary mb-4">Super Crispy</h1>
          <h1 className="display-1 text-uppercase text-white mb-4">CakeZone</h1>
          <h1 className="text-uppercase text-white">The Best Cake In London</h1>
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
            <a href="" className="btn btn-primary border-inner py-3 px-5 me-5">
              Read More
            </a>
            <button
              type="button"
              className="btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-bs-target="#videoModal"
            >
              <span />
            </button>
            <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
              Play Video
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* Video Modal Start */}
  <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Youtube Video
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src=""
              id="video"
              allowFullScreen=""
              allowscriptaccess="always"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Video Modal End */}
</>

  )
}

export default HomeBanner