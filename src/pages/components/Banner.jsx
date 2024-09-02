import React from 'react'

function Banner({page,heading}) {
  return (
    <>
    {/* Page Header Start */}
    <div className="container-fluid bg-dark bg-img p-5 mb-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4 text-uppercase text-white">{heading}</h1>
          <a href="">Home</a>
          <i className="far fa-square text-primary px-2" />
          <a href="">{page}</a>
        </div>
      </div>
    </div>
    {/* Page Header End */}
  </>
  
  )
}

export default Banner